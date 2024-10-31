import { Star } from 'lucide-react';
import { Card, CardContent } from './Card';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

export default function TestimonialCard({ name, role, content, avatar, rating }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
        <div className="mt-2 flex">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
        <p className="mt-4 text-gray-600">{content}</p>
      </CardContent>
    </Card>
  );
}