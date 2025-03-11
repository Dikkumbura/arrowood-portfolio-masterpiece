
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: "fade-in-up" | "fade-in" | "none";
}

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  threshold = 0.1,
  animation = "fade-in-up",
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay, threshold]);

  const animationClass = animation === "fade-in-up" 
    ? "opacity-0 translate-y-8 transition-all duration-700" 
    : animation === "fade-in" 
    ? "opacity-0 transition-opacity duration-700" 
    : "";

  return (
    <div
      ref={sectionRef}
      className={cn(
        animationClass,
        isVisible && "opacity-100 translate-y-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
