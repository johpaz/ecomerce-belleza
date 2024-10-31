import { Button } from '../components/Button';

export default function ProductDetails({ product }) {
  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="mt-4 text-gray-500">{product.description}</p>
          <p className="mt-6 text-xl font-semibold">{product.price}</p>
          <Button className="mt-8">Add to Cart</Button>
        </div>
      </div>
    </section>
  );
}
