import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createCrudStore, CrudItem } from './useCrudStore';

export function useCrudApi<T extends CrudItem>(resource: string) {
  const queryClient = useQueryClient();
  const store = createCrudStore<T>();

  // Fetch all
  const query = useQuery<T[]>({
    queryKey: [resource],
    queryFn: async () => {
      const res = await fetch(`http://localhost:4000/${resource}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      store.getState().setItems(data);
      return data;
    },
  });

  // Create
  const createMutation = useMutation({
    mutationFn: async (item: Omit<T, 'id'>) => {
      const res = await fetch(`http://localhost:4000/${resource}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      if (!res.ok) throw new Error('Failed to create');
      return res.json();
    },
  onSuccess: () => queryClient.invalidateQueries({ queryKey: [resource] }),
  });

  // Update
  const updateMutation = useMutation({
    mutationFn: async (item: T) => {
      const res = await fetch(`http://localhost:4000/${resource}/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      if (!res.ok) throw new Error('Failed to update');
      return res.json();
    },
  onSuccess: () => queryClient.invalidateQueries({ queryKey: [resource] }),
  });

  // Delete
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`http://localhost:4000/${resource}/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete');
      return id;
    },
  onSuccess: () => queryClient.invalidateQueries({ queryKey: [resource] }),
  });

  return {
    query,
    createMutation,
    updateMutation,
    deleteMutation,
    store,
  };
}
