import { Header } from "@/components/Header";
import { OutfitCard } from "@/components/OutfitCard";
import { AddOutfitFab } from "@/components/AddOutfitFab";
import outfitSample1 from "@/assets/outfit-sample-1.jpg";
import outfitSample2 from "@/assets/outfit-sample-2.jpg";
import outfitSample3 from "@/assets/outfit-sample-3.jpg";

// Sample outfit data - in a real app this would come from a database
const sampleOutfits = [
  {
    id: "1",
    image: outfitSample1,
    title: "Campus Chic",
    description: "Ready to serve looks at the lecture hall ✨",
    breakdown: "Top: Zara | Jeans: Cotton On | Sneakers: Nike Air Force 1",
    compliment: "You in this outfit? That's illegal levels of fine.",
    tags: ["🐆 Bold", "💼 Professional"],
    date: "Today"
  },
  {
    id: "2", 
    image: outfitSample2,
    title: "Blazer Boss Babe",
    description: "When you need to remind everyone who runs this city",
    breakdown: "Blazer: H&M | Top: Uniqlo | Bag: Michael Kors",
    compliment: "This look needs its own runway.",
    tags: ["💼 Professional", "🖤 Baddie"],
    date: "Yesterday"
  },
  {
    id: "3",
    image: outfitSample3, 
    title: "Soft Girl Sunday",
    description: "Dreamy vibes for a dreamy day 🌸",
    breakdown: "Cardigan: Urban Outfitters | Skirt: Brandy Melville | Accessories: Pinterest finds",
    compliment: "You make fashion bow down.",
    tags: ["💐 Soft girl", "🍒 Cute"],
    date: "2 days ago"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="masonry-grid">
          {sampleOutfits.map((outfit) => (
            <OutfitCard key={outfit.id} outfit={outfit} />
          ))}
        </div>
      </main>

      <AddOutfitFab />
    </div>
  );
};

export default Index;
