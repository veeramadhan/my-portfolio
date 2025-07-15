'use client'
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyCard = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });
    return () => ScrollTrigger.kill();
  }, []);

  return (
    <section ref={ref} className="min-h-screen ">
      {children}
    </section>
  );
};

export default StickyCard;
