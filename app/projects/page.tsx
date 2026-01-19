"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import carouselEducation from "@/assets/carousel-education.jpg";
import carouselAnimals from "@/assets/carousel-animals.jpg";
import aboutCommunity from "@/assets/about-community.jpg";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

// --- DATA (Exported to be used by the detail page) ---
export const allProjects = [
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
      "Establish 50 learning centers across rural India",
      "Train 500 women as community educators",
    ],
    achievements: [
      "2350+ girls currently enrolled in our programs",
      "95% retention rate in our learning centers",
      "35 learning centers operational across 3 states",
      "1,200+ girls received higher education scholarships",
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

const Projects = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="page-hero">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Our <span className="text-primary">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our ongoing initiatives that are transforming lives across
            India
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover how we're making a real difference through our various
              initiatives
            </p>
          </div>

          <div className="grid gap-8">
            {allProjects.map((project, idx) => (
              // IMPORTANT: Link to the dynamic slug route
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <Card className="overflow-hidden card-hover group">
                  <div
                    className={`flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  >
                    <div className="lg:w-1/2">
                      <OptimizedImage
                        src={project.image.src}
                        alt={project.title}
                        aspectRatio="video"
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="lg:w-1/2 p-6 lg:p-10 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                          {project.status}
                        </span>
                        <span className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {project.location}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-primary" />
                          {project.beneficiaries} Beneficiaries
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4 text-primary" />
                          Since {project.startDate}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        View Project Details <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Projects;
