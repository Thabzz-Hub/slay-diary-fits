import { Heart, Calendar, Shirt } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface OutfitCardProps {
  outfit: {
    id: string;
    image: string;
    title: string;
    description?: string;
    breakdown?: string;
    compliment: string;
    tags: string[];
    date: string;
  };
}

export const OutfitCard = ({ outfit }: OutfitCardProps) => {
  return (
    <Card className="outfit-card masonry-item overflow-hidden border-0 shadow-lg bg-card/80 backdrop-blur-sm">
      <div className="relative">
        <img 
          src={outfit.image} 
          alt={outfit.title}
          className="w-full h-auto object-cover rounded-t-lg"
        />
        <div className="absolute top-3 right-3">
          <Heart className="w-6 h-6 text-white drop-shadow-lg floating-heart" />
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-playfair text-lg font-semibold text-foreground">
            {outfit.title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {outfit.date}
          </div>
        </div>

        {outfit.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {outfit.description}
          </p>
        )}

        {outfit.breakdown && (
          <div className="bg-muted/50 rounded-lg p-3">
            <div className="flex items-center mb-2">
              <Shirt className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium">Outfit Breakdown</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {outfit.breakdown}
            </p>
          </div>
        )}

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-3">
          <p className="font-dancing text-lg text-primary font-semibold italic">
            "{outfit.compliment}"
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {outfit.tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-secondary/80 text-secondary-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};