import { Card } from '../components/Card';
import { Button } from '../components/Button';

const products = [
  {
    id: 1,
    name: 'Luxury Face Cream',
    description: 'A hydrating face cream with natural ingredients.',
    price: '$45.00',
    image: '/crema.jpeg',
  },
  {
    id: 2,
    name: 'Revitalizing Serum',
    description: 'Enhance your skin’s natural glow.',
    price: '$60.00',
    image: '/serum.jpeg',
  },
  {
    id: 3,
    name: 'Soothing Body Lotion',
    description: 'Calming lotion for soft, hydrated skin all day.',
    price: '$35.00',
    image: '/body-lotion.jpeg',
  },
  {
    id: 4,
    name: 'Exfoliating Face Scrub',
    description: 'Gently removes dead skin for a smooth complexion.',
    price: '$25.00',
    image: '/face-scrub.jpeg',
  },
  {
    id: 5,
    name: 'Organic Lip Balm',
    description: 'Moisturizing lip balm with natural oils and butter.',
    price: '$8.00',
    image: '/lip-balm.jpeg',
  },
  {
    id: 6,
    name: 'Nourishing Hair Mask',
    description: 'Revitalizes and strengthens hair with deep hydration.',
    price: '$50.00',
    image: '/hair-mask.jpeg',
  },
  {
    id: 7,
    name: 'Refreshing Facial Mist',
    description: 'Instant hydration boost with a refreshing scent.',
    price: '$20.00',
    image: '/facial-mist.jpeg',
  },
  {
    id: 8,
    name: 'Anti-Aging Eye Cream',
    description: 'Reduces dark circles and fine lines around the eyes.',
    price: '$55.00',
    image: '/eye-cream.jpeg',
  },
  {
    id: 9,
    name: 'Detoxifying Clay Mask',
    description: 'Purifies skin and removes impurities deeply.',
    price: '$30.00',
    image: '/clay-mask.jpeg',
  },
  {
    id: 10,
    name: 'SPF 30 Sunscreen',
    description: 'Broad-spectrum protection with a non-greasy finish.',
    price: '$28.00',
    image: '/sunscreen.jpeg',
  },
];


export default function Shop() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
      <h2 className="text-center text-3xl font-bold mb-8">Shop Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Card key={product.id} className="p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{product.description}</p>
            <p className="mt-4 text-lg font-bold">{product.price}</p>
            <Button className="mt-4 w-full">View Details</Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
