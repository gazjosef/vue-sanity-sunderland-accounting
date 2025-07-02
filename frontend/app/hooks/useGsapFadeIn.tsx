"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeInConfig = {
  delay?: number;
  duration?: number;
  yOffset?: number;
};

const useGsapFadeIn = () => {
  // Update the type to match the element you’re assigning to
  const titleRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const fadeIn = (
        target: HTMLElement | null,
        { delay = 0.1, duration = 1, yOffset = -50 }: FadeInConfig = {}
      ) => {
        if (!target) return;

        gsap.fromTo(
          target,
          { opacity: 0, y: yOffset },
          {
            opacity: 1,
            y: 0,
            duration,
            delay,
            ease: "power2.out",
            scrollTrigger: {
              trigger: target,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      };

      fadeIn(titleRef.current, { delay: 0.1 });
      fadeIn(textRef.current, { delay: 0.3 });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return [titleRef, textRef] as const;
};

export default useGsapFadeIn;
