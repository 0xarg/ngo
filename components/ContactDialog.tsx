import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Heart, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    toast({
      title: "Thank you for reaching out!",
      description: "Our team will connect with you within 24 hours.",
    });

    setTimeout(() => {
      onOpenChange(false);
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-primary to-accent p-6 text-primary-foreground">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Heart className="w-5 h-5" fill="currentColor" />
            </div>
            <DialogHeader className="text-left space-y-0">
              <DialogTitle className="text-xl font-display text-primary-foreground">
                Get In Touch
              </DialogTitle>
              <DialogDescription className="text-primary-foreground/80 text-sm">
                We'd love to hear from you
              </DialogDescription>
            </DialogHeader>
          </div>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mt-1">
                  Our team will connect with you soon.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Anurag Poonia"
                    required
                    className="bg-secondary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="bg-secondary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="anurag@example.com"
                  required
                  className="bg-secondary/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how you'd like to help or any questions you have..."
                  rows={3}
                  className="bg-secondary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="donate"
                className="w-full"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting, you agree to be contacted by our team regarding
                your inquiry.
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
