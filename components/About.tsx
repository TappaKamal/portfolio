"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section
      id="about"
      className="min-h-screen bg-white text-black py-32 px-6 lg:px-12"
      ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Heading */}
            <div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-12">
                ABOUT
              </h2>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
                  Kamal Hussain
                </h3>
                <p className="text-xl text-black/80 mb-6">does</p>
                <div className="text-2xl font-light mb-8">
                  &lt; next.js development /&gt;
                </div>
                <p className="text-lg text-black/70 leading-relaxed mb-8">
                  I'm an enthusiastic and multifaceted developer specializing in
                  Next.js and full-stack development. Passionate about pushing
                  creative boundaries, I constantly seek to expand my expertise
                  and combine skills across various technologies. I thrive on
                  problem-solving and embrace challenges with a proactive and
                  open-minded approach.
                </p>
              </div>

              <div className="pt-8 border-t border-black/10">
                <p className="text-sm uppercase tracking-wider text-black/60 mb-2">
                  CURRENTLY BASED IN
                </p>
                <p className="text-lg text-black/80">KL University, India</p>
                <p className="text-sm text-black/50 mt-1">Next.js Developer</p>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-black/80 hover:text-black transition-colors group">
                READ MORE
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
