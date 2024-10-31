import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-2 bg-white/90 backdrop-blur-sm p-2 rounded-l-lg shadow-lg">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-700 transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="text-pink-600 hover:text-pink-700 transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="text-sky-500 hover:text-sky-600 transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}