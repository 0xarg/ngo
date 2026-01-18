import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Target,
  Eye,
  ArrowRight,
  Users,
  BookOpen,
  Leaf,
  PawPrint,
  Lightbulb,
  HandHeart,
  FileText,
  Shield,
  Award,
} from "lucide-react";
import Link from "next/link";
import aboutHero from "@/assets/about-hero.jpg";
import aboutCommunity from "@/assets/about-community.jpg";
import aboutApproach from "@/assets/about-approach.jpg";

const approachItems = [
  {
    icon: Users,
    letter: "R",
    title: "Rise of Women Empowerment",
    color: "bg-pink-500",
  },
  {
    icon: BookOpen,
    letter: "E",
    title: "Education for Child Development",
    color: "bg-blue-500",
  },
  {
    icon: Leaf,
    letter: "N",
    title: "Nature Conservation",
    color: "bg-green-500",
  },
  {
    icon: HandHeart,
    letter: "U",
    title: "Upholding Humanity",
    color: "bg-purple-500",
  },
  {
    icon: PawPrint,
    letter: "K",
    title: "Kindness Towards Animals",
    color: "bg-orange-500",
  },
  {
    icon: Lightbulb,
    letter: "A",
    title: "Awareness for A Better World",
    color: "bg-yellow-500",
  },
];

const legalItems = [
  {
    icon: FileText,
    title: "Registered under NGO Registration Act",
    subtitle: "REGISTRATION",
  },
  {
    icon: Shield,
    title: "Registration under FCRA for receiving foreign Act",
    subtitle: "12AA",
  },
  {
    icon: Award,
    title: "Approved under Section 80G, for deductions for donations.",
    subtitle: "80G",
  },
  {
    icon: FileText,
    title: "Niti Aayog registered (Company/Organization)",
    subtitle: "REG/2024/0484877",
  },
];

const About = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section - Yellow Banner */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container-custom section-padding py-0">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-4">
              About Us
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              We work for holistic and collective development of underserved
              communities, empowering girls through education and protecting
              animals with compassion.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative -mt-4">
        <div className="container-custom section-padding py-0">
          <div className="relative rounded-3xl overflow-hidden shadow-hover">
            <img
              src={aboutHero.src}
              alt="Community gathering for education"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground section-heading section-heading-left">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground pt-4">
                <p>
                  HopeHands is a non-profit committed to holistic and collective
                  development of underserved communities, working across various
                  areas including:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Women Empowerment & Child Development</strong> —
                      Nurturing education for girls and young learners
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Animal Welfare & Compassion</strong> — Providing
                      shelter, medical care, and rehabilitation for abandoned
                      animals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong>Nature Conservation</strong> — Sustainable
                      initiatives to protect our environment
                    </span>
                  </li>
                </ul>
                <p>
                  We are registered under NGO Registration Act with 80G, 12A &
                  CSR eligibility, ensuring your contributions make a real
                  impact with tax benefits.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutCommunity.src}
                alt="Community members collaborating"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-circle">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-foreground">
                  Our Mission
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower women and girls through education, skill building,
                and advocacy, enabling them to lead independent, purposeful
                lives. Additionally, we are committed to promoting compassion
                for animals and creating a sustainable future for all beings.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-circle">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-foreground">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Our hope lies in a spiritually uplifted environment rooted in
                true community development." We believe in transformation
                through:
              </p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Girls Empowerment</li>
                <li>• Child Education</li>
                <li>• Environmental Protection</li>
                <li>• Animal Welfare</li>
                <li>• Nature Conservation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground section-heading">
              Our Approach
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  Inspired by the philosophy of holistic development, our
                  approach encompasses six pillars for positive social change.
                  Together, these pillars form RENUKA—a symbol of collective
                  empowerment and sustainable development.
                </p>
              </div>
              <div>
                <img
                  src={aboutApproach.src}
                  alt="Our approach to community development"
                  className="rounded-2xl shadow-soft"
                />
              </div>
            </div>
          </div>

          {/* RENUKA Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {approachItems.map((item) => (
              <div
                key={item.letter}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="icon-circle mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="w-6 h-6" />
                </div>
                <div
                  className={`text-4xl lg:text-5xl font-display font-bold text-primary mb-2`}
                >
                  {item.letter}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Compliance */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground section-heading">
              Legal & Compliance
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalItems.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all"
              >
                <div className="icon-circle-sm mx-auto mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {item.title}
                </p>
                <p className="font-semibold text-foreground text-xs">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Support Us and Change Lives Today
          </h2>
          <p className="text-primary-foreground/85 max-w-2xl mx-auto mb-8 text-lg">
            Your support empowers us to continue our mission in Women
            Empowerment, Child Development, Animal Welfare, Our Nature, and
            awareness creation. Contributing allows you to help promote a more
            compassionate and sustainable world.
          </p>
          <Link href="/donate">
            <Button variant="hero" size="xl" className="shadow-lg">
              <Heart className="w-5 h-5" fill="currentColor" />
              Donate
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={aboutCommunity.src}
                alt="Stay updated with our newsletter"
                className="rounded-2xl shadow-card"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl text-foreground">
                Stay Updated with Project HopeHands
              </h2>
              <p className="text-muted-foreground">
                Subscribe to our newsletter and never miss our latest news and
                updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button variant="donate" size="lg" className="rounded-xl px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
