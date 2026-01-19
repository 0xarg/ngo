"use client";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import carouselEducation from "@/assets/carousel-education2.jpg";
import carouselWomen from "@/assets/carousel-women.jpg";
import carouselAnimals from "@/assets/carousel-animals.jpg";
import carouselNature from "@/assets/carousel-nature.jpg";
import Link from "next/link";

const heroSlides = [
  {
    image: heroImage,
    tag: "#EducateHer #ProtectThem",
    title: "Every Girl Deserves Education.",
    highlight: "Every Animal Deserves Care.",
    description:
      "We work with communities to ensure underprivileged girls receive quality education and abandoned animals find shelter, healthcare, and loving homes.",
  },
  {
    image: carouselEducation,
    tag: "#ChildEducation",
    title: "Building Futures Through",
    highlight: "Quality Education",
    description:
      "Empowering young minds with knowledge, skills, and opportunities to break the cycle of poverty and create a brighter tomorrow.",
  },
  {
    image: carouselWomen,
    tag: "#WomenEmpowerment",
    title: "Rise of Women",
    highlight: "Empowerment",
    description:
      "Training and supporting rural women with skills, financial literacy, and entrepreneurship opportunities for independent livelihoods.",
  },
  {
    image: carouselAnimals,
    tag: "#AnimalRescue",
    title: "Compassion for",
    highlight: "Every Living Being",
    description:
      "Rescuing, rehabilitating, and rehoming abandoned animals while promoting kindness and compassion in our communities.",
  },
  {
    image: carouselNature,
    tag: "#NatureConservation",
    title: "Protecting Our",
    highlight: "Natural Heritage",
    description:
      "Sustainable initiatives to conserve our environment through tree plantation, waste management, and eco-awareness programs.",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Images */}
      {heroSlides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image.src}
            alt={s.title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container-custom section-padding w-full">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          <span
            key={`tag-${currentSlide}`}
            className="inline-block px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg animate-slide-up"
          >
            {slide.tag}
          </span>

          <h1
            key={`title-${currentSlide}`}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-card leading-tight animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {slide.title}
            <br />
            <span className="text-primary">{slide.highlight}</span>
          </h1>

          <p
            key={`desc-${currentSlide}`}
            className="text-lg lg:text-xl text-card/90 leading-relaxed max-w-xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {slide.description}
          </p>

          <div
            className="flex flex-wrap gap-4 pt-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/donate">
              <Button variant="hero" size="xl" className="shadow-glow">
                <Heart className="w-5 h-5" fill="currentColor" />
                Donate Now
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline-light" size="xl">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div
            className="flex flex-wrap gap-8 lg:gap-12 pt-8 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "2350+", label: "Girls Educated" },
              { value: "1200+", label: "Animals Rescued" },
              { value: "50+", label: "Communities" },
            ].map((stat) => (
              <div key={stat.label} className="text-card">
                <p className="font-display text-3xl lg:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-sm lg:text-base text-card/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/40 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-card/50 hover:bg-card/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center text-card hover:bg-card/40 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
