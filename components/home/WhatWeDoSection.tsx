import { Button } from "@/components/ui/button";
import {
  Heart,
  ArrowRight,
  Users,
  BookOpen,
  Leaf,
  PawPrint,
  HandHeart,
  Lightbulb,
} from "lucide-react";
import carouselEducation from "@/assets/carousel-education2.jpg";
import Link from "next/link";
const programs = [
  {
    icon: Users,
    title: "Rise of Women Empowerment",
    description:
      "Empowering rural women through skill training, financial literacy, and entrepreneurship programs.",
    link: "/what-we-do/",
    color: "bg-pink-500",
  },
  {
    icon: BookOpen,
    title: "Education for Child Development",
    description:
      "Quality education and foundational skills for children in underserved communities.",
    link: "/what-we-do/child-education",
    color: "bg-blue-500",
  },
  {
    icon: Leaf,
    title: "Nature Conservation",
    description:
      "Sustainable environmental initiatives including tree plantation and waste management.",
    link: "/what-we-do/",
    color: "bg-green-500",
  },
  {
    icon: HandHeart,
    title: "Upholding Humanity",
    description:
      "Supporting communities in crisis through relief work and humanitarian assistance.",
    link: "/what-we-do/",
    color: "bg-purple-500",
  },
  {
    icon: PawPrint,
    title: "Kindness Towards Animals",
    description:
      "Rescuing, rehabilitating, and rehoming abandoned street animals with compassion.",
    link: "/what-we-do/animal-welfare",
    color: "bg-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Awareness for A Better World",
    description:
      "Creating awareness on social issues through campaigns, workshops, and community engagement.",
    link: "/what-we-do/",
    color: "bg-yellow-500",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <span className="text-primary font-bold text-sm uppercase tracking-widest">
              Our Mission
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              HopeHands Foundation works with government, communities, and local
              volunteers to ensure every girl in underserved areas has access to
              quality education, while simultaneously rescuing, rehabilitating,
              and rehoming abandoned animals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our holistic approach addresses both human and animal welfare,
              creating compassionate communities where girls are empowered to
              reach their potential and animals are treated with dignity and
              care.
            </p>
            <Link href="/donate">
              <Button
                variant="donate"
                size="lg"
                className="gap-2 rounded-full px-8"
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Yes! I want to help
              </Button>
            </Link>
          </div>

          {/* Image with decorative frame */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl transform rotate-3" />
            <div className="absolute -inset-2 bg-primary/40 rounded-3xl transform rotate-1" />
            <img
              src={carouselEducation.src}
              alt="Girls studying together"
              className="relative w-full h-[400px] object-cover rounded-2xl shadow-hover"
            />
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Link
              href={program.link}
              key={program.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="icon-circle mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {program.title}
              </h3>
              <div className="w-12 h-1 bg-primary/30 rounded-full mb-4 group-hover:w-20 group-hover:bg-primary transition-all duration-300" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                {program.description}
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
