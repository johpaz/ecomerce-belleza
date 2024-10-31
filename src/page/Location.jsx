import { MapPin, Clock } from 'lucide-react';
import { Card } from '../components/Card';

export default function Location() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
      <h2 className="text-center text-3xl font-bold mb-8">Our Location</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Location Details */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="text-sm text-gray-600">123 Beauty St, Glamour City</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Clock className="h-6 w-6 text-primary" />
              <p className="text-sm text-gray-600">
                Monday - Saturday: 9:00 AM - 7:00 PM
              </p>
            </div>
          </Card>
        </div>

        {/* Map */}
        <div>
          <iframe
            title="Location Map"
            className="w-full h-80 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531884!3d-37.81720987975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f3f1c7%3A0xe15c6f9cfc0f3a3!2sQueen%20Victoria%20Market!5e0!3m2!1sen!2sus!4v1638765995947!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
