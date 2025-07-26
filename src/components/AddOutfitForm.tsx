import { useState } from "react";
import { Camera, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const moodTags = [
  "🐆 Bold", "🍒 Cute", "💼 Professional", "🖤 Baddie", 
  "💐 Soft girl", "🏉 Sporty", "✨ Glam", "🌙 Dark academia"
];

const compliments = [
  "You in this outfit? That's illegal levels of fine.",
  "This look needs its own runway.",
  "You make fashion bow down.",
  "Reminder: You could wear a bin bag and still be the baddest.",
  "This outfit didn't slay. It massacred.",
  "The way you serve looks should come with a warning label."
];

export const AddOutfitForm = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    breakdown: "",
    image: null as File | null
  });
  const { toast } = useToast();

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const getRandomCompliment = () => {
    return compliments[Math.floor(Math.random() * compliments.length)];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title) {
      toast({
        title: "Oops!",
        description: "Give your outfit a name, babe!",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically save to a database or state management
    toast({
      title: "Outfit added! 🔥",
      description: "Another slay documented for the books!",
    });
    
    // Reset form
    setFormData({ title: "", description: "", breakdown: "", image: null });
    setSelectedTags([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="image" className="flex items-center cursor-pointer">
          <Camera className="w-4 h-4 mr-2" />
          Upload Photo
        </Label>
        <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center hover:border-primary transition-colors">
          <Camera className="w-12 h-12 mx-auto text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">
            Tap to add your slay photo
          </p>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files?.[0] || null }))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="title">Outfit Name</Label>
        <Input
          id="title"
          placeholder="e.g., Campus Chic, Sunday Brunch Babe..."
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Vibe Description (Optional)</Label>
        <Textarea
          id="description"
          placeholder="What's the mood? Where you wearing this to?"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="breakdown">Outfit Breakdown (Optional)</Label>
        <Textarea
          id="breakdown"
          placeholder="Top: Cotton On | Pants: Mr Price | Shoes: Converse"
          value={formData.breakdown}
          onChange={(e) => setFormData(prev => ({ ...prev, breakdown: e.target.value }))}
        />
      </div>

      <div className="space-y-3">
        <Label>Mood Tags</Label>
        <div className="flex flex-wrap gap-2">
          {moodTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className="cursor-pointer transition-colors"
              onClick={() => handleTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
        <div className="flex items-center mb-2">
          <Heart className="w-4 h-4 text-primary mr-2" />
          <span className="text-sm font-medium">Compliment from Bae</span>
        </div>
        <p className="font-dancing text-lg text-primary font-semibold italic">
          "{getRandomCompliment()}"
        </p>
      </div>

      <Button type="submit" className="w-full" size="lg">
        Add to Diary ✨
      </Button>
    </form>
  );
};