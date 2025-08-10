import { notFound } from 'next/navigation';
import Image from 'next/image';

type SegmentParams = { [key: string]: string | string[] | undefined };

async function getRestaurantBySlug(slug: string) {
  const res = await fetch(`http://localhost:4000/restaurants?slug=${slug}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data[0] || null;
}

const RestaurantDetailPage = async ({ params }: { params?: Promise<SegmentParams> }) => {
  const awaitedParams = params ? await params : {};
  const slug = Array.isArray(awaitedParams.slug) ? awaitedParams.slug[0] : awaitedParams.slug;
  if (!slug || typeof slug !== 'string') return notFound();
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) return notFound();

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{restaurant.name}</h1>
      <Image src={restaurant.image} alt={restaurant.name} width={600} height={400} className="w-full rounded-xl mb-4" />
      <div className="flex items-center gap-4 mb-2">
        <Image src={restaurant.logo} alt={restaurant.name + ' logo'} width={64} height={64} className="w-16 h-16 rounded-full bg-white p-2" />
        <span className="text-lg font-semibold">{restaurant.status}</span>
      </div>
      <div className="mb-2">Discount: <span className="font-bold text-green-600">{restaurant.discount}</span></div>
      <div className="mb-2">Rating: <span className="font-bold">{restaurant.rating}</span></div>
    </div>
  );
};

export default RestaurantDetailPage;
