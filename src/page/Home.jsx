import { Sparkles, Star, Users } from 'lucide-react';
import { Button } from '../components/Button';
import FeaturedProducts from '@/components/FeaturedProducts';
import TestimonialCard from '@/components/TestimonialCard';
import { Card } from '../components/Card';

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Premium Products',
    description: 'Curated selection of luxury beauty products',
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Expert Care',
    description: 'Professional beauty consultations and treatments',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Community',
    description: 'Join our beauty-loving community',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Beauty Enthusiast',
    content: 'The products and services at Luxe Beauty have transformed my skincare routine. Absolutely amazing!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Chen',
    role: 'Professional Model',
    content: 'I love the personalized attention and expert advice I receive every time I visit.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1920"
          alt="Beauty products and treatments"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Disfruta Tu Belleza
          </h1>
          <p className="mt-6 max-w-lg text-xl text-gray-200">
            Experience luxury beauty treatments and premium products at Luxe Beauty
          </p>
          <Button size="lg" className="mt-8">
            Book Appointment
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold">What Our Clients Say</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
}