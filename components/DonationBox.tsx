"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DonationBoxProps {
  context?: string;
  impactText?: string;
}

const DonationBox = ({
  context = "education",
  impactText,
}: DonationBoxProps) => {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">(
    "one-time",
  );
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2200);
  const [customAmount, setCustomAmount] = useState("");
  const [citizenType, setCitizenType] = useState<"indian" | "foreign">(
    "indian",
  );
  const [bearCharges, setBearCharges] = useState(true);
  const [anonymous, setAnonymous] = useState(false);
  const { toast } = useToast();

  const amounts = [1100, 2200, 5500];

  const getImpactMessage = () => {
    if (impactText) return impactText;

    const amount = selectedAmount || parseInt(customAmount) || 0;
    if (context === "education") {
      if (amount >= 5500)
        return `will support the enrolment of ${Math.floor(amount / 2750)} children`;
      if (amount >= 2200)
        return `will support the enrolment of ${Math.floor(amount / 1100)} children`;
      if (amount >= 1100) return "will support 1 child's education for a month";
    } else if (context === "animals") {
      if (amount >= 5500)
        return `will provide medical care for ${Math.floor(amount / 1000)} animals`;
      if (amount >= 2200)
        return `will feed ${Math.floor(amount / 200)} stray animals for a month`;
      if (amount >= 1100) return "will vaccinate 5 street dogs";
    }
    return "will make a meaningful impact";
  };

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || amount < 100) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid donation amount (minimum ₹100)",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for your generosity! 🙏",
      description: `Your ${frequency === "monthly" ? "monthly " : ""}donation of ₹${amount.toLocaleString("en-IN")} will help transform lives.`,
    });
  };

  return (
    <Card className="overflow-hidden border-2 border-primary/10 shadow-card bg-gradient-to-br from-background to-secondary/20">
      <CardContent className="p-0">
        {/* Frequency Toggle */}
        <div className="flex p-2 gap-2 bg-secondary/30 border-b border-border/50">
          <button
            onClick={() => setFrequency("one-time")}
            className={`flex-1 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
              frequency === "one-time"
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:bg-secondary"
            }`}
          >
            ONE TIME
          </button>
          <button
            onClick={() => setFrequency("monthly")}
            className={`flex-1 py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
              frequency === "monthly"
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:bg-secondary"
            }`}
          >
            MONTHLY
          </button>
        </div>

        <div className="p-5 space-y-5">
          {/* Amount Selection */}
          <div className="space-y-3">
            <p className="font-semibold text-foreground">
              Select Donation Amount
            </p>
            <div className="grid grid-cols-4 gap-2">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`py-3 px-2 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${
                    selectedAmount === amount
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border/60 hover:border-primary/50 text-foreground"
                  }`}
                >
                  ₹{amount.toLocaleString("en-IN")}
                </button>
              ))}
              <button
                onClick={() => {
                  setSelectedAmount(null);
                  document.getElementById("custom-amount")?.focus();
                }}
                className={`py-3 px-2 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${
                  selectedAmount === null && customAmount
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border/60 hover:border-primary/50 text-foreground"
                }`}
              >
                OTHER
              </button>
            </div>

            {/* Custom Amount Input */}
            {selectedAmount === null && (
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">
                  ₹
                </span>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="pl-8 h-12 text-lg font-semibold"
                  min={100}
                />
              </div>
            )}
          </div>

          {/* Impact Message */}
          <div className="text-center py-3 px-4 bg-secondary/50 rounded-lg border border-border/50">
            <p className="text-muted-foreground text-sm">
              {getImpactMessage()}
            </p>
          </div>

          {/* Citizen Type */}
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setCitizenType("indian")}
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  citizenType === "indian"
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                }`}
              >
                {citizenType === "indian" && (
                  <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                )}
              </div>
              <span className="text-sm text-foreground">Indian Citizen</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={() => setCitizenType("foreign")}
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  citizenType === "foreign"
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                }`}
              >
                {citizenType === "foreign" && (
                  <div className="w-1.5 h-1.5 bg-primary-foreground rounded-full" />
                )}
              </div>
              <span className="text-sm text-foreground">Foreign Citizen</span>
            </label>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Checkbox
                id="bear-charges"
                checked={bearCharges}
                onCheckedChange={(checked) =>
                  setBearCharges(checked as boolean)
                }
                className="mt-0.5 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label
                htmlFor="bear-charges"
                className="text-sm text-foreground cursor-pointer"
              >
                I wish to bear the 3% payment Gateway charges.
              </label>
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="anonymous"
                checked={anonymous}
                onCheckedChange={(checked) => setAnonymous(checked as boolean)}
                className="mt-0.5"
              />
              <label
                htmlFor="anonymous"
                className="text-sm text-muted-foreground cursor-pointer"
              >
                I don't want to be recognised on the website
              </label>
            </div>
          </div>

          {/* Legal Text */}
          <p className="text-xs text-muted-foreground leading-relaxed">
            Registered under Section 8 of the Indian Companies Act, 2013 and
            under Section 12A of the Income Tax Act, 1961. Donations are tax
            exempted under Section 80G of the Indian Income Tax Act.
          </p>

          {/* Donate Button */}
          <Button
            onClick={handleDonate}
            variant="donate"
            size="xl"
            className="w-full gap-2 text-base font-bold shadow-glow"
          >
            <Heart className="w-5 h-5" fill="currentColor" />
            DONATE NOW
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonationBox;
