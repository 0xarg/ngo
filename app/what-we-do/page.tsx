"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  ArrowRight,
  Users,
  BookOpen,
  Leaf,
  HandHeart,
  PawPrint,
  Globe,
} from "lucide-react";
import Link from "next/link";
const programs = [
  {
    icon: Users,
    title: "Rise Of Women Empowerment",
    description:
      "Empowering women through education, skill development, and leadership programs.",
    link: "/what-we-do/women-empowerment",
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: BookOpen,
    title: "Education For Child Development",
    description:
      "Quality education and foundational learning for underprivileged children.",
    link: "/what-we-do/child-education",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Leaf,
    title: "Nature Conservation",
    description:
      "Protecting our environment through tree plantation and awareness campaigns.",
    link: "/what-we-do/nature-conservation",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: HandHeart,
    title: "Upholding Humanity",
    description:
      "Supporting communities during crises with food, shelter, and medical aid.",
    link: "/what-we-do/humanity",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: PawPrint,
    title: "Kindness Towards Animals",
    description:
      "Rescuing, treating, and rehabilitating abandoned and injured animals.",
    link: "/what-we-do/animal-welfare",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Globe,
    title: "Awareness For A Better World",
    description:
      "Spreading awareness about social issues through campaigns and education.",
    link: "/what-we-do/awareness",
    color: "bg-teal-100 text-teal-600",
  },
];

const WhatWeDo = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="page-hero">
        <div className="container-custom text-center relative z-10">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            What We <span className="text-primary">Do</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We work across multiple focus areas to create lasting positive
            change in communities and for animals in need.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <Link key={program.title} href={program.link}>
                <Card className="h-full card-hover group">
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <program.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-xl text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {program.description}
                    </p>
                    <span className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl text-primary-foreground mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Join us in our mission to create a better world for girls and
            animals.
          </p>
          <Link href="/donate">
            <Button variant="hero" size="xl">
              <Heart className="w-5 h-5" /> Donate Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhatWeDo;
