import { Mail, Phone, MapPin } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
      <h2 className="text-center text-3xl font-bold mb-8">Contact Us</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <p className="text-sm text-gray-600">info@luxebeauty.com</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <p className="text-sm text-gray-600">+1 (123) 456-7890</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <p className="text-sm text-gray-600">123 Beauty St, Glamour City</p>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Your message"
              rows="4"
              required
            ></textarea>
          </div>
          <Button type="submit" className="w-full mt-4">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
