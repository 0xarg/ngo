"use client";
import { useEffect, useState } from "react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

const StatItem = ({ value, suffix, label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <div
      className={`text-center p-6 bg-card rounded-2xl shadow-soft transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
        {count.toLocaleString()}
        <span className="text-primary/70">{suffix}</span>
      </p>
      <p className="text-muted-foreground font-medium mt-2">{label}</p>
    </div>
  );
};

const ImpactSection = () => {
  const stats = [
    {
      value: 2350,
      suffix: "+",
      label: "Girls Mobilised for Enrolment",
      display: 2350,
    },
    {
      value: 4200,
      suffix: "+",
      label: "Students Supported with Learning",
      display: 4200,
    },
    {
      value: 1200,
      suffix: "+",
      label: "Animals Rescued & Treated",
      display: 1200,
    },
    { value: 4, suffix: "", label: "States Covered", display: 4 },
    { value: 850, suffix: "+", label: "Active Volunteers", display: 850 },
    { value: 70, suffix: "+", label: "Partner Organizations", display: 70 },
  ];

  return (
    <section className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">
            Our Reach
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 section-heading">
            Impact Since Inception
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.display}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
