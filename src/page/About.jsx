import { Sparkles, Heart, Award } from 'lucide-react';
import { Card } from '../components/Card';

const aboutFeatures = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Quality',
    description: 'We offer only the finest products and services in beauty.',
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Passion',
    description: 'Driven by a love for beauty and self-care.',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Experience',
    description: 'Years of expertise in luxury and personalized care.',
  },
];

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
      <h2 className="text-center text-3xl font-bold mb-8">About Us</h2>
      <p className="text-center max-w-2xl mx-auto mb-12 text-gray-600">
        Luxe Beauty is dedicated to enhancing your beauty with premium products and services. 
        We believe in providing a luxurious and personalized experience for each of our clients.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {aboutFeatures.map((feature, index) => (
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
  );
}
