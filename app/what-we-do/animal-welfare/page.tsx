import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { Card, CardContent } from "@/components/ui/card";
import {
  PawPrint,
  Heart,
  Stethoscope,
  Home,
  Syringe,
  Utensils,
  CheckCircle,
  ArrowRight,
  Star,
  Shield,
} from "lucide-react";
import Link from "next/link";
import DonationBox from "@/components/DonationBox";
import heroImage from "@/assets/animal-welfare-hero.jpg";
import image1 from "@/assets/animal-welfare-1.jpg";
import image2 from "@/assets/animal-welfare-2.jpg";

const stats = [
  { icon: PawPrint, value: "1200+", label: "Animals Rescued" },
  { icon: Stethoscope, value: "300+", label: "Medical Treatments" },
  { icon: Syringe, value: "4000+", label: "Vaccinations Done" },
  { icon: Home, value: "800+", label: "Animals Rehomed" },
];

const services = [
  {
    title: "Rescue & Emergency Care",
    description:
      "24/7 rescue helpline for injured, abandoned, or distressed animals. Our trained team responds promptly to save lives.",
    icon: Shield,
  },
  {
    title: "Veterinary Treatment",
    description:
      "Complete medical care including surgeries, post-operative care, and rehabilitation for injured animals.",
    icon: Stethoscope,
  },
  {
    title: "Vaccination & Sterilization",
    description:
      "Free vaccination and sterilization camps to control rabies and humanely manage stray animal populations.",
    icon: Syringe,
  },
  {
    title: "Feeding Programs",
    description:
      "Regular feeding programs for street animals ensuring they receive nutritious food and clean water daily.",
    icon: Utensils,
  },
];

const achievements = [
  "Operated 500+ animal rescue operations across cities",
  "Established 10 animal care shelters with 24/7 veterinary support",
  "Conducted 200+ vaccination camps benefiting 50,000+ animals",
  "Sterilized 30,000+ animals to humanely control population",
  "Trained 1,000+ community animal caregivers",
  "Rehabilitated and rehomed 5,000+ animals",
];

const AnimalWelfare = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage.src}
            alt="Children learning in classroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-card text-sm font-medium mb-6">
              <PawPrint className="w-4 h-4" />
              What We Do
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-card mb-6 leading-tight">
              Kindness Towards <span className="text-primary">Animals</span>
            </h1>
            <p className="text-card/90 text-lg sm:text-xl max-w-xl leading-relaxed">
              Rescuing, treating, and rehabilitating abandoned and injured
              animals. Because every creature deserves compassion and care.
            </p>
          </div>
        </div>
      </section>
      {/* How You Can Help */}
      <section className="section-padding bg-gradient-to-br from-purple-50 via-background to-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                Make a Difference
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-6">
                Help Us Save <span className="text-primary">More Lives</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Your contribution directly funds rescue operations, medical
                treatments, food, and shelter for animals in need. Together, we
                can create a more compassionate world.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      ₹500 / month
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Feed 10 stray animals for a month
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Syringe className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      ₹1,100 / donation
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Vaccinate 5 street dogs against rabies
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      ₹5,500 / case
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Complete medical treatment for one rescue
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/what-we-do"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to What We Do
              </Link>
            </div>

            <div className="lg:sticky lg:top-28">
              <DonationBox context="animals" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 -mt-16 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="bg-card/95 backdrop-blur-md border-border/50 shadow-card"
              >
                <CardContent className="p-5 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-100 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                Our Commitment
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-6">
                Protecting Our{" "}
                <span className="text-primary">Voiceless Friends</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                India is home to over 30 million stray animals, many of whom
                face daily struggles for survival. They suffer from injuries,
                diseases, hunger, and abuse. Our Kindness Towards Animals
                initiative is dedicated to changing their lives through rescue,
                medical care, and community awareness.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in the inherent right of every animal to live with
                dignity and without suffering. Through our comprehensive animal
                welfare programs, we provide immediate relief and long-term
                solutions for the welfare of street animals.
              </p>
              <div className="space-y-3">
                {achievements.slice(0, 4).map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-sm">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <OptimizedImage
                  src={image1.src}
                  alt="Volunteers feeding stray dogs"
                  className="rounded-2xl shadow-hover w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-5 rounded-2xl shadow-card max-w-[200px]">
                  <Heart className="w-8 h-8 mb-2" />
                  <p className="font-display text-2xl font-bold">25K+</p>
                  <p className="text-sm opacity-90">Animals saved with love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Our Services
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-4">
              Comprehensive Animal Care
            </h2>
            <p className="text-muted-foreground">
              From emergency rescue to long-term rehabilitation, we provide
              complete care for animals in need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group card-hover">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-5 group-hover:bg-purple-200 transition-colors">
                    <service.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <OptimizedImage
                src={image2.src}
                alt="Dog receiving medical treatment"
                className="rounded-2xl shadow-hover w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                Rescue Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-6">
                Every Life <span className="text-primary">Matters</span>
              </h2>
              <blockquote className="border-l-4 border-primary pl-6 mb-6">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "Bruno was found severely injured after being hit by a
                  vehicle. His hind legs were paralyzed and he was barely
                  breathing. Our rescue team brought him to our shelter where he
                  received intensive care for 3 months. Today, Bruno uses a
                  wheelchair and lives happily at our shelter, greeting every
                  visitor with his wagging tail. He's a symbol of hope and
                  resilience."
                </p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
                  <PawPrint className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Bruno's Story</p>
                  <p className="text-sm text-muted-foreground">
                    Rescued: March 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Animal Emergency CTA */}
      <section className="section-padding bg-purple-600">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <PawPrint className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="font-display text-3xl text-white mb-4">
              Found an Injured Animal?
            </h2>
            <p className="text-white/80 mb-8">
              Call our 24/7 rescue helpline or fill out our emergency form. Our
              team will respond immediately.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+911800001234">
                <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:shadow-hover transition-all">
                  📞 1800-001-1234
                </button>
              </a>
              <Link href="/contact">
                <button className="px-6 py-3 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-all">
                  Report Online
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Programs CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl text-primary-foreground mb-4">
            Explore Other Programs
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Discover how we're creating impact across multiple focus areas
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/what-we-do/child-education">
              <button className="px-6 py-3 bg-card text-foreground rounded-full font-semibold hover:shadow-hover transition-all">
                Education for Child Development
              </button>
            </Link>
            <Link href="/what-we-do">
              <button className="px-6 py-3 bg-primary-foreground/20 text-primary-foreground rounded-full font-semibold hover:bg-primary-foreground/30 transition-all">
                View All Programs
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AnimalWelfare;
