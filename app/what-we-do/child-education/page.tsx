import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DonationBox from "@/components/DonationBox";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  Users,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Award,
  Globe,
  Star,
} from "lucide-react";
import Link from "next/link";
import heroImage from "@/assets/child-education-hero.jpg";
import image1 from "@/assets/child-education-1.jpg";
import image2 from "@/assets/child-education-2.jpg";

const stats = [
  { icon: GraduationCap, value: "2350+", label: "Children Educated" },
  { icon: BookOpen, value: "50+", label: "Schools Supported" },
  { icon: Users, value: "80+", label: "Teachers Trained" },
  { icon: Award, value: "98%", label: "Attendance Rate" },
];

const programs = [
  {
    title: "Foundational Learning",
    description:
      "Building strong basics in literacy and numeracy through innovative teaching methodologies for children aged 3-8 years.",
    icon: BookOpen,
  },
  {
    title: "School Enrollment Drive",
    description:
      "Identifying out-of-school children and facilitating their enrollment in formal education with all necessary support.",
    icon: GraduationCap,
  },
  {
    title: "Learning Centers",
    description:
      "Community-based learning centers providing after-school support and remedial classes for struggling students.",
    icon: Globe,
  },
  {
    title: "Scholarship Programs",
    description:
      "Financial assistance for meritorious students from underprivileged families to continue their higher education.",
    icon: Award,
  },
];

const achievements = [
  "Established 50+ community learning centers across rural India",
  "Provided school kits to 1000+ children annually",
  "Trained 150+ teachers in modern pedagogical methods",
  "Achieved 95% grade-level improvement among enrolled students",
  "Partnered with 50+ government and private schools",
  "Organized 200+ parent awareness programs",
];

const ChildEducation = () => {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              What We Do
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-card mb-6 leading-tight">
              Education For Child{" "}
              <span className="text-primary">Development</span>
            </h1>
            <p className="text-card/90 text-lg sm:text-xl max-w-xl leading-relaxed">
              Empowering underprivileged children with quality education,
              foundational learning, and the skills they need to build a
              brighter future.
            </p>
          </div>
        </div>
      </section>
      {/* Donation Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                Support Our Cause
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-6">
                Help a Child Get <span className="text-primary">Education</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Your donation can transform a child's life. With just ₹1,100 per
                month, you can sponsor a child's complete education including
                school fees, books, uniform, and learning materials.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      ₹1,100 / month
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Educate one child for a year
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      ₹5,500 / month
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Support a learning center for 5 children
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      ₹11,000 / year
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Full scholarship for one student
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
              <DonationBox context="education" />
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
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
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
                Our Mission
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-6">
                Breaking Barriers to{" "}
                <span className="text-primary">Quality Education</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In India, millions of children remain out of school due to
                poverty, lack of infrastructure, and social barriers. Our
                Education For Child Development initiative works to bridge this
                gap by providing comprehensive educational support to the most
                marginalized communities.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe that every child deserves access to quality education
                regardless of their socio-economic background. Through our
                integrated approach, we not only enroll children in schools but
                also ensure they stay and succeed.
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
                  alt="Children receiving books"
                  className="rounded-2xl shadow-hover w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-5 rounded-2xl shadow-card max-w-[200px]">
                  <Star className="w-8 h-8 mb-2" />
                  <p className="font-display text-2xl font-bold">1000+</p>
                  <p className="text-sm opacity-90">
                    Children's lives transformed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-semibold text-sm tracking-wide uppercase">
              Our Approach
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-4">
              Comprehensive Education Programs
            </h2>
            <p className="text-muted-foreground">
              Our multi-faceted approach ensures holistic development of every
              child through various specialized programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program) => (
              <Card key={program.title} className="group card-hover">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <program.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
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
                alt="Student studying"
                className="rounded-2xl shadow-hover w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">
                Success Story
              </span>
              <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2 mb-6">
                From Struggles to <span className="text-primary">Success</span>
              </h2>
              <blockquote className="border-l-4 border-primary pl-6 mb-6">
                <p className="text-lg text-muted-foreground italic leading-relaxed">
                  "I never thought I would be able to go to school. My parents
                  worked as daily wage laborers and couldn't afford my
                  education. HopeHands not only enrolled me in school but also
                  provided books, uniform, and tuition support. Today, I'm in
                  10th grade and dream of becoming a teacher to help other
                  children like me."
                </p>
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-xl text-primary">P</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Priya Sharma</p>
                  <p className="text-sm text-muted-foreground">
                    Student, Rajasthan
                  </p>
                </div>
              </div>
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
            <Link href="/what-we-do/animal-welfare">
              <button className="px-6 py-3 bg-card text-foreground rounded-full font-semibold hover:shadow-hover transition-all">
                Kindness Towards Animals
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

export default ChildEducation;
