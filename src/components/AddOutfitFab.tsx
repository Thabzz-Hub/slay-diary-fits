import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddOutfitForm } from "./AddOutfitForm";

export const AddOutfitFab = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110 z-50"
        >
          <Plus className="w-8 h-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair text-2xl">Add New Outfit</DialogTitle>
          <DialogDescription>
            Document another slay moment ✨
          </DialogDescription>
        </DialogHeader>
        <AddOutfitForm />
      </DialogContent>
    </Dialog>
  );
};