import { useNavigate } from 'react-router-dom';
import { Button } from './Button';
import { Card, CardContent, CardFooter } from './Card';
import { useCart } from '@/context/CartContext';

const featuredProducts = [
  {
    id: 1,
    name: 'Luxury Face Cream',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',
    description: 'Premium anti-aging face cream with natural ingredients',
  },
  {
    id: 2,
    name: 'Organic Serum',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
    description: 'Vitamin C enriched serum for glowing skin',
  },
  {
    id: 3,
    name: 'Essential Oil Set',
    price: 45.99,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400',
    description: 'Collection of pure essential oils for aromatherapy',
  },
];

export default function FeaturedProducts() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredProducts.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover"
          />
          <CardContent className="p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="mt-2 text-sm text-gray-500">{product.description}</p>
            <p className="mt-2 font-semibold">${product.price}</p>
          </CardContent>
          <CardFooter className="flex gap-2 p-4">
            <Button
              variant="outline"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              View Details
            </Button>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}