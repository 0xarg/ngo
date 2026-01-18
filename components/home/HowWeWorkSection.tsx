import { Users, Search, Megaphone, Home, BookOpen, Heart } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Create Local Champions",
    description: "Train village-based volunteers who understand local needs and drive change.",
  },
  {
    icon: Search,
    title: "Identify Those in Need",
    description: "Door-to-door surveys to find out-of-school girls and abandoned animals.",
  },
  {
    icon: Megaphone,
    title: "Mobilise Communities",
    description: "Conduct village meetings to rally support from local influencers.",
  },
  {
    icon: Home,
    title: "Rescue & Rehabilitate",
    description: "Provide shelter, medical care, and rehabilitation for abandoned animals.",
  },
  {
    icon: BookOpen,
    title: "Ensure Quality Education",
    description: "Foundational literacy and numeracy skills for every child we support.",
  },
  {
    icon: Heart,
    title: "Foster Compassion",
    description: "Teaching children empathy through animal welfare programs in schools.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
            How We Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <div className="w-12 h-0.5 bg-primary mb-3" />
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
