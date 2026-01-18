import { ArrowRight } from "lucide-react";
import Link from "next/link";
import storyImage1 from "@/assets/story-1.jpg";
import storyImage2 from "@/assets/story-2.jpg";
import storyImage3 from "@/assets/story-3.jpg";

const stories = [
  {
    image: storyImage1,
    title: "Priya's Journey: From Dropout to Scholar",
    description:
      "How one girl's determination changed her village's perspective on education.",
    link: "/stories/1",
  },
  {
    image: storyImage2,
    title: "Rescued: Bruno & Whiskers Find Home",
    description: "A heartwarming tale of a puppy and kitten rescued together.",
    link: "/stories/2",
  },
  {
    image: storyImage3,
    title: "Celebrating Success: 100 Girls Graduate",
    description:
      "A milestone celebration as our first batch completes education.",
    link: "/stories/3",
  },
];

const StoriesSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Making Impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-foreground mt-2">
              Stories & Updates
            </h2>
          </div>
          <Link
            href="/stories"
            className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <Link
              key={story.title}
              href={story.link}
              className="group relative rounded-2xl overflow-hidden shadow-card card-hover aspect-[4/5]"
            >
              <img
                src={story.image.src}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-10 h-1 bg-primary mb-3" />
                <h3 className="font-display text-lg text-card font-semibold mb-2 line-clamp-2">
                  {story.title}
                </h3>
                <p className="text-card/80 text-sm line-clamp-2 mb-3">
                  {story.description}
                </p>
                <span className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
