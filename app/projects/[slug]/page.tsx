// app/projects/[slug]/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Heart,
  Calendar,
  MapPin,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";

// Assets
import carouselEducation from "@/assets/carousel-education.jpg";
import carouselAnimals from "@/assets/carousel-animals.jpg";
import story1 from "@/assets/carousel-education2.jpg";
import story2 from "@/assets/carousel-education3.jpg";
import story3 from "@/assets/carousel-education4.jpg";
import story1Animal from "@/assets/carousel-animals2.jpg";
import story2Animal from "@/assets/carousel-animals3.jpg";
import story3Animal from "@/assets/carousel-animals4.jpg";

/* ================================
   STATIC DATA (BUILD-TIME ONLY)
================================ */

const allProjects = [
  {
    slug: "girl-education",
    title: "Shiksha Shakti - Girl Education Initiative",
    subtitle: "Empowering girls through quality education",
    image: carouselEducation,
    location: "Maharashtra, Rajasthan, UP",
    startDate: "January 2019",
    beneficiaries: "2350+",
    status: "Ongoing",
    description:
      "Our flagship education program provides comprehensive support to underprivileged girls including scholarships, uniforms, books, and mentorship.",
    objectives: [
      "Provide free quality education to 25,000 girls by 2027",
      "Reduce dropout rates by 80% in partner schools",
      "Establish 35 learning centers across rural India",
      "Train 500 women as community educators",
    ],
    achievements: [
      "1250+ girls currently enrolled",
      "95% retention rate",
      "6 learning centers operational",
      "750+ higher education scholarships",
    ],
    gallery: [story1, story2, story3],
  },
  {
    slug: "animal-rescue",
    title: "Jeevan Raksha - Animal Rescue Program",
    subtitle: "Rescuing and rehabilitating animals in need",
    image: carouselAnimals,
    location: "Pan India - 15 States",
    startDate: "March 2018",
    beneficiaries: "1200+",
    status: "Ongoing",
    description:
      "Our animal rescue program operates 24/7 helplines and rehabilitation centers across India.",
    objectives: [
      "24/7 rescue helplines in 20 cities",
      "10 rehabilitation centers",
      "100,000 rescues by 2026",
      "90% rehabilitation success",
    ],
    achievements: [
      "1200+ animals rescued",
      "8 rehab centers operational",
      "1000+ animals rehomed",
      "50+ mobile units deployed",
    ],
    gallery: [story1Animal, story2Animal, story3Animal],
  },
];

/* ================================
   REQUIRED FOR STATIC EXPORT
================================ */

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

/* ================================
   PAGE COMPONENT (SERVER)
================================ */

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;

  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // return JSX

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            src={project.image.src}
            alt={project.title}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="container-custom relative z-10">
          <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm rounded-full mb-4">
            {project.status} Project
          </span>

          <h1 className="text-4xl lg:text-5xl font-semibold text-card mb-4">
            {project.title}
          </h1>

          <p className="text-card/90 text-lg mb-6">{project.subtitle}</p>

          <div className="flex flex-wrap gap-4 text-card/80 text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Since {project.startDate}
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              {project.beneficiaries} Beneficiaries
            </span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About This Project</h2>
          <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>
      </section>

      {/* OBJECTIVES & ACHIEVEMENTS */}
      <section className="section-padding">
        <div className="container-custom grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex gap-2 items-center">
              <Target className="w-5 h-5" />
              Objectives
            </h3>
            <ul className="space-y-3">
              {project.objectives.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex gap-2 items-center">
              <CheckCircle className="w-5 h-5" />
              Achievements
            </h3>
            <ul className="space-y-3">
              {project.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <h2 className="text-3xl font-semibold text-primary-foreground mb-4">
          Support This Project
        </h2>
        <div className="flex justify-center gap-4">
          <Link href="/donate">
            <Button size="xl">
              <Heart className="w-5 h-5" />
              Donate
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline-light" size="xl">
              Get Involved
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
