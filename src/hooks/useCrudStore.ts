import { create } from 'zustand';

export interface CrudItem {
  id: number;
  // Extend this interface in your app for specific types
}

interface CrudState<T extends CrudItem> {
  items: T[];
  setItems: (items: T[]) => void;
  addItem: (item: T) => void;
  updateItem: (item: T) => void;
  deleteItem: (id: number) => void;
}

export function createCrudStore<T extends CrudItem>() {
  return create<CrudState<T>>((set) => ({
    items: [],
    setItems: (items) => set({ items }),
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    updateItem: (item) => set((state) => ({
      items: state.items.map((i) => (i.id === item.id ? item : i)),
    })),
    deleteItem: (id) => set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),
  }));
}
