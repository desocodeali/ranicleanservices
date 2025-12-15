import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  review: string;
  rating?: number;
}

export function TestimonialCard({ name, review, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="h-full border-none shadow-sm bg-secondary/20">
      <CardHeader className="flex flex-row gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">&quot;{review}&quot;</p>
      </CardContent>
      <CardFooter>
        <p className="font-semibold">{name}</p>
      </CardFooter>
    </Card>
  );
}

