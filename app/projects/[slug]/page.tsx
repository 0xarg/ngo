"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import carouselEducation from "@/assets/carousel-education.jpg";
import carouselAnimals from "@/assets/carousel-animals.jpg";
import aboutCommunity from "@/assets/about-community.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import OptimizedImage from "@/components/ui/OptimizedImage";
import {
  Heart,
  Calendar,
  MapPin,
  Users,
  Target,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
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
      "Our flagship education program provides comprehensive support to underprivileged girls including scholarships, uniforms, books, and mentorship to ensure they complete their education.",
    objectives: [
      "Provide free quality education to 25,000 girls by 2027",
      "Reduce dropout rates by 80% in partner schools",
      "Establish 35 learning centers across rural India",
      "Train 500 women as community educators",
    ],
    achievements: [
      "1250+ girls currently enrolled in our programs",
      "95% retention rate in our learning centers",
      "6 learning centers operational across 3 states",
      "750+ girls received higher education scholarships",
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
      "Our animal rescue program operates 24/7 helplines, mobile rescue units, and rehabilitation centers to save injured, abandoned, and abused animals across India.",
    objectives: [
      "Operate 24/7 animal rescue helplines in 20 major cities",
      "Establish 10 fully-equipped rehabilitation centers",
      "Conduct 100,000 rescue operations by 2026",
      "Achieve 90% rehabilitation success rate",
    ],
    achievements: [
      "1200+ animals rescued and treated",
      "8 rehabilitation centers operational",
      "1000+ animals successfully rehomed",
      "50+ mobile rescue units deployed",
    ],
    gallery: [story1, story2, story3],
  },
];

const ProjectDetail = () => {
  const { slug } = useParams();

  // Find the specific project data
  const project = allProjects.find((p) => p.slug === slug);

  // Handle invalid URLs (e.g., /projects/invalid-name)
  if (!project) {
    return (
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">
            We couldn't find the project you are looking for.
          </p>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
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
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
              {project.status} Project
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-card mb-4">
              {project.title}
            </h1>
            <p className="text-card/90 text-lg mb-6">{project.subtitle}</p>
            <div className="flex flex-wrap gap-4 text-card/80 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> Since {project.startDate}
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" /> {project.beneficiaries}{" "}
                Beneficiaries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              About This Project
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Objectives */}
            <Card className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle-sm">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Objectives
                </h3>
              </div>
              <ul className="space-y-4">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-foreground/80">{obj}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Achievements */}
            <Card className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="icon-circle-sm bg-success/10 text-success">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Achievements
                </h3>
              </div>
              <ul className="space-y-4">
                {project.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{ach}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground text-center mb-8">
            Project Gallery
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, idx) => (
              <OptimizedImage
                key={idx}
                src={img.src}
                alt={`${project.title} gallery ${idx + 1}`}
                aspectRatio="video"
                containerClassName="rounded-2xl overflow-hidden"
                className="hover:scale-105 transition-transform duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-foreground mb-4">
            Support This Project
          </h2>
          <p className="text-primary-foreground/85 max-w-xl mx-auto mb-8">
            Your contribution can help us expand this project and reach more
            beneficiaries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate">
              <Button variant="hero" size="xl">
                <Heart className="w-5 h-5" fill="currentColor" />
                Donate Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline-light" size="xl">
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;
