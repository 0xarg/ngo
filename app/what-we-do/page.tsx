"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/OptimizedImage";
import {
  Heart,
  ArrowRight,
  Users,
  BookOpen,
  Leaf,
  HandHeart,
  PawPrint,
  Globe,
  CheckCircle,
  Target,
  Eye,
} from "lucide-react";
import Link from "next/link";
import heroImage from "@/assets/about-hero.jpg";
import educationImage from "@/assets/child-education-hero.jpg";
import animalImage from "@/assets/animal-welfare-hero.jpg";

const programs = [
  {
    icon: BookOpen,
    title: "Education For Child Development",
    description:
      "Quality education and foundational learning for underprivileged children. Every child deserves access to knowledge and opportunities.",
    link: "/what-we-do/child-education",
    color: "bg-blue-100 text-blue-600",
    bgGradient: "from-blue-500/10 to-blue-600/5",
    stats: "15,000+ children educated",
    featured: true,
  },

  {
    icon: PawPrint,
    title: "Kindness Towards Animals",
    description:
      "Rescuing, treating, and rehabilitating abandoned and injured animals. Every creature deserves compassion and care.",
    link: "/what-we-do/animal-welfare",
    color: "bg-purple-100 text-purple-600",
    bgGradient: "from-purple-500/10 to-purple-600/5",
    stats: "25,000+ animals rescued",
    featured: true,
  },
];

const impactStats = [
  { value: "50,000+", label: "Lives Touched" },
  { value: "100+", label: "Active Projects" },
  { value: "15+", label: "States Covered" },
  { value: "500+", label: "Volunteers" },
];

const WhatWeDo = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage.src}
            alt="What We Do"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute h-full inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Our Programs
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-card mb-6 leading-tight">
              What We <span className="text-primary">Do</span>
            </h1>
            <p className="text-card/90 text-lg sm:text-xl max-w-xl leading-relaxed">
              We work across multiple focus areas to create lasting positive
              change in communities and for animals in need.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-display font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                Our Approach
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-6">
                Creating{" "}
                <span className="text-primary">Sustainable Impact</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At HopeHands, we believe in creating lasting change through
                comprehensive, community-driven programs. Our approach combines
                immediate relief with long-term development strategies to ensure
                sustainable impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Community-Centered
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We work with communities, not just for them, ensuring
                      ownership and sustainability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Transparency First
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Every donation is tracked and reported with complete
                      transparency.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Measurable Results
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      We set clear goals and measure outcomes to ensure real
                      impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="space-y-4 lg:space-y-6">
                  <OptimizedImage
                    src={educationImage.src}
                    alt="Education program"
                    className="rounded-2xl shadow-card w-full aspect-[4/5] object-cover"
                  />
                </div>
                <div className="space-y-4 lg:space-y-6 pt-8 lg:pt-12">
                  <OptimizedImage
                    src={animalImage.src}
                    alt="Animal welfare"
                    className="rounded-2xl shadow-card w-full aspect-[4/5] object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Our Focus Areas
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-4">
              Programs That{" "}
              <span className="text-primary">Transform Lives</span>
            </h2>
            <p className="text-muted-foreground">
              Each program is designed to address specific needs while creating
              interconnected positive impact across communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link
                key={program.title}
                href={program.link}
                className="block group"
              >
                <Card
                  className={`h-full card-hover overflow-hidden ${program.featured ? "ring-2 ring-primary/20" : ""}`}
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${program.bgGradient}`}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 rounded-2xl ${program.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <program.icon className="w-7 h-7" />
                      </div>
                      {program.featured && (
                        <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-xs font-semibold text-primary">
                        {program.stats}
                      </span>
                      <span className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Featured Programs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-4">
              Making the Biggest <span className="text-primary">Impact</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Card */}
            <div className="relative rounded-3xl overflow-hidden group">
              <OptimizedImage
                src={educationImage.src}
                alt="Education program"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">Education</span>
                </div>
                <h3 className="font-display text-2xl text-white mb-3">
                  Education For Child Development
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Quality education and foundational learning for 15,000+
                  underprivileged children across India.
                </p>
                <Link href="/what-we-do/child-education">
                  <Button variant="hero" size="lg" className="rounded-full">
                    Explore Program <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Animal Welfare Card */}
            <div className="relative rounded-3xl overflow-hidden group">
              <OptimizedImage
                src={animalImage.src}
                alt="Animal welfare program"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
                    <PawPrint className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">
                    Animal Welfare
                  </span>
                </div>
                <h3 className="font-display text-2xl text-white mb-3">
                  Kindness Towards Animals
                </h3>
                <p className="text-white/80 mb-4 line-clamp-2">
                  Rescuing, treating, and rehabilitating 25,000+ abandoned and
                  injured animals.
                </p>
                <Link href="/what-we-do/animal-welfare">
                  <Button variant="hero" size="lg" className="rounded-full">
                    Explore Program <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Your support enables us to continue transforming lives across India.
            Join us in our mission to create a better world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate">
              <Button variant="hero" size="xl" className="gap-2">
                <Heart className="w-5 h-5" fill="currentColor" /> Donate Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="xl"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full"
              >
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhatWeDo;
