"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    city: "Noida",
    type: "Head Office",
    address: "A-44 Galaxy Business Park, Sushil Marg,Block A, Sector 62",
    state: "UP 201309",
    phone: "+91 22 1234 5678",
    email: "Support@alchemyfoundation.in",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
  },
  {
    city: "Aurangabad",
    type: "Registered Office",
    address: "H-NO F-39-10, CIDCO N-7",
    state: "Maharashtra 431001",
    phone: "+91 11 2345 6789",
    email: "Support@alchemyfoundation.in",
    hours: "Mon - Fri: 9:30 AM - 5:30 PM",
  },
];

const generalContact = [
  // {
  //   icon: Phone,
  //   title: "Helpline",
  //   details: ["+91 1800 123 4567 (Toll Free)", "+91 98765 43210"],
  // },
  {
    icon: Mail,
    title: "Email",
    details: ["Support@alchemyfoundation.in"],
  },
  {
    icon: Clock,
    title: "Support Hours",
    details: ["24/7 Emergency Support", "Office: Mon - Sat"],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="page-hero">
        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our programs? Want to volunteer or partner with
            us? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Our Presence
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-4">
              Office <span className="text-primary">Locations</span>
            </h2>
            <p className="text-muted-foreground">
              Visit us at any of our offices across India. Our team is always
              ready to help.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <Card
                key={office.city}
                className="shadow-card hover:shadow-lg transition-shadow group overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                        {office.city}
                      </h3>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        {office.type}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-foreground font-medium">
                        {office.address}
                      </p>
                      <p className="text-muted-foreground">{office.state}</p>
                    </div>
                    <div className="pt-3 border-t border-border/50 space-y-2">
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {office.email}
                      </a>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">{office.hours}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-display text-xl text-foreground mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Your message has been sent. We'll get back to you soon.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            placeholder="How can we help?"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        variant="donate"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {generalContact.map((item) => (
                <Card key={item.title} className="shadow-soft">
                  <CardContent className="p-5">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                        {item.details.map((detail, idx) => (
                          <p
                            key={idx}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    Follow us on social media for updates and stories.
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 hover:scale-110 transition-all"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-secondary/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent pointer-events-none z-10" />
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center relative z-20">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">
              Find Us On The Map
            </h3>
            <p className="text-muted-foreground text-sm">
              Interactive map integration coming soon
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
