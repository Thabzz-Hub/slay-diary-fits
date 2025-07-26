import { useState, useEffect } from "react";
import { Sparkles, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const quotes = [
  "You don't need a reason to dress well.",
  "Today's fit? Main character energy.",
  "Confidence is the best accessory.",
  "Style is a way to say who you are without speaking.",
  "Fashion fades, but style is eternal."
];

export const Header = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8 text-primary mr-3 floating-heart" />
          <h1 className="font-playfair text-5xl md:text-6xl font-bold gradient-text">
            Slay Diary
          </h1>
          <Sparkles className="w-8 h-8 text-accent ml-3 floating-heart" />
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-8">
          Your personal gallery of fire fits and fashion moments
        </p>
        
        <div className="bg-white/30 backdrop-blur-sm rounded-full px-6 py-3 inline-block border border-white/20">
          <p className="font-dancing text-lg font-semibold text-foreground italic">
            "{quotes[currentQuote]}"
          </p>
        </div>

        <Button
          onClick={toggleDarkMode}
          variant="ghost"
          size="icon"
          className="absolute top-6 right-6 hover:bg-white/20"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </div>
    </header>
  );
};