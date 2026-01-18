"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  CreditCard,
  Shield,
  CheckCircle,
  BookOpen,
  PawPrint,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const donationAmounts = [500, 1000, 2500, 5000, 10000];

const impactCards = [
  {
    amount: 500,
    icon: BookOpen,
    title: "Education Kit",
    description:
      "Provides books, notebooks, and stationery for one child for a year.",
  },
  {
    amount: 1000,
    icon: PawPrint,
    title: "Animal Care",
    description:
      "Covers vaccination and basic medical care for 5 rescued animals.",
  },
  {
    amount: 2500,
    icon: Users,
    title: "Community Program",
    description:
      "Sponsors a community awareness session reaching 50+ families.",
  },
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const { toast } = useToast();

  const finalAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  const handleDonate = async () => {
    if (!finalAmount || finalAmount < 100) {
      toast({
        title: "Invalid Amount",
        description: "Please enter an amount of at least ₹100",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setIsComplete(true);

    toast({
      title: "Thank you for your generosity!",
      description: `Your donation of ₹${finalAmount.toLocaleString()} will help transform lives.`,
    });
  };

  if (isComplete) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <section className="section-padding bg-background">
          <div className="container-custom max-w-2xl text-center">
            <div className="bg-card rounded-2xl p-12 shadow-card">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-4">
                Thank You!
              </h1>
              <p className="text-muted-foreground text-lg mb-2">
                Your donation of{" "}
                <span className="font-semibold text-primary">
                  ₹{finalAmount?.toLocaleString()}
                </span>{" "}
                has been received.
              </p>
              <p className="text-muted-foreground mb-8">
                A confirmation email has been sent to your registered email
                address. Your contribution will help us educate more girls and
                rescue more animals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={() => setIsComplete(false)} variant="outline">
                  Make Another Donation
                </Button>
                <Button onClick={() => (window.location.href = "/")}>
                  Return Home
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom text-center relative z-10">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Make a Difference Today
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            Your Donation <span className="text-primary">Transforms Lives</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every rupee you donate helps educate a girl, rescue an animal, and
            build a more compassionate world.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background -mt-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-display text-2xl flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    Make a Donation
                  </CardTitle>
                  <CardDescription>
                    Choose an amount and complete your donation securely
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Frequency */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Donation Type
                    </Label>
                    <RadioGroup
                      value={frequency}
                      onValueChange={setFrequency}
                      className="flex gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="cursor-pointer">
                          One-time
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer">
                          Monthly
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Select Amount
                    </Label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          onClick={() => {
                            setSelectedAmount(amount);
                            setCustomAmount("");
                          }}
                          className={`py-3 px-4 rounded-lg font-semibold text-sm transition-all ${
                            selectedAmount === amount && !customAmount
                              ? "bg-primary text-primary-foreground shadow-lg"
                              : "bg-secondary hover:bg-primary/10 text-foreground"
                          }`}
                        >
                          ₹{amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Label htmlFor="custom-amount" className="text-sm">
                        Or enter custom amount
                      </Label>
                      <div className="relative mt-2">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          ₹
                        </span>
                        <Input
                          id="custom-amount"
                          type="number"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount(null);
                          }}
                          className="pl-8"
                          min={100}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold mb-4 block">
                      Your Details
                    </Label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="pan">PAN (for 80G certificate)</Label>
                        <Input
                          id="pan"
                          placeholder="ABCDE1234F"
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div>
                    <Label className="text-base font-semibold mb-4 block">
                      Payment Details
                    </Label>
                    <div className="bg-secondary/50 rounded-xl p-6 space-y-4">
                      <div>
                        <Label htmlFor="card">Card Number</Label>
                        <div className="relative mt-1">
                          <Input
                            id="card"
                            placeholder="4242 4242 4242 4242"
                            className="pl-10"
                          />
                          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" className="mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    variant="donate"
                    size="xl"
                    className="w-full"
                    onClick={handleDonate}
                    disabled={isProcessing || !finalAmount}
                  >
                    {isProcessing ? (
                      <span className="animate-pulse">Processing...</span>
                    ) : (
                      <>
                        <Heart className="w-5 h-5" />
                        Donate ₹{finalAmount?.toLocaleString() || 0}
                        {frequency === "monthly" && "/month"}
                      </>
                    )}
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    Your payment is secure and encrypted
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Cards */}
            <div className="space-y-6">
              <h3 className="font-display text-xl text-foreground">
                Your Impact
              </h3>
              {impactCards.map((card) => (
                <Card
                  key={card.amount}
                  className={`cursor-pointer transition-all ${
                    selectedAmount === card.amount && !customAmount
                      ? "ring-2 ring-primary shadow-lg"
                      : "hover:shadow-card"
                  }`}
                  onClick={() => {
                    setSelectedAmount(card.amount);
                    setCustomAmount("");
                  }}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <card.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary">
                          ₹{card.amount.toLocaleString()}
                        </p>
                        <p className="font-display text-lg text-foreground">
                          {card.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Trust badges */}
              <Card className="bg-secondary/50">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">80G Tax Benefit Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">100% Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="text-sm">
                      Transparent Fund Utilization
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Donate;
