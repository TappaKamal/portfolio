"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      number: "01",
      category: "Video Streaming Platform",
      title: "NEXTTALK",
      year: "2025",
      description:
        "A Platform that enables seamless video-call interviews, allowing users to connect, conduct meetings, and collaborate in real-time from anywhere.",
      tags: ["Next.js", "TypeScript", "Convex", "Clerk", "Stream"],
      liveUrl: "https://next-talk-jade.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1661661389828-3970a44524eb?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFwcHklMjBvZmZpY2UlMjB3b3JrZXJ8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    },
    {
      id: 2,
      number: "02",
      category: "Interactive Map Application",
      title: "MAP Traveller",
      year: "2025",
      description:
        "“A full-stack travel mapping app built with React and Node — enabling users to explore, plot, and manage locations effortlessly with Mapbox and hooks in real time.",
      tags: ["React", "Streaming", "Real-time", "WebRTC"],
      liveUrl: "https://helper-tau-wine.vercel.app/",
      image:
        "https://plus.unsplash.com/premium_photo-1723867341274-da1f98ecd19e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxUcmF2ZWxsJTIwbWFwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
    },
    {
      id: 3,
      number: "03",
      category: "AI Voice & Text Translation",
      title: "TrueSpeak APP",
      year: "2024",
      description:
        "An AI-powered voice and text translation platform built with Next.js, Tailwind CSS & TypeScript — enabling users to instantly translate and communicate across languages, both spoken and written, with ease",
      tags: ["React", "Tailwind CSS", "Design", "Responsive"],
      liveUrl: "https://true-speak.vercel.app",
      image:
        "https://www.addevice.io/storage/ckeditor/uploads/images/637ba6f15f60e_how.to.create.a.voice.translation.app.1920.1080.1.png",
    },
    {
      id: 4,
      number: "04",
      category: "FULL STACK PROJECT",
      title: "E-Commerce Website",
      year: "2024",
      description:
        "A modern and An AI-powered eCommerce platform offering personalized product recommendations, secure checkout, chatbot assistance, gamified rewards, smart search, and real-time order tracking for a seamless shopping experience",
      tags: ["React", "MySQL", "Spring Boot", "Tailwind CSS"],
      liveUrl: "https://github.com/TappaKamal/ecommerce",
      image:
        "https://media.licdn.com/dms/image/v2/D4E12AQEEgw88WbbEiw/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1739243670204?e=1763596800&v=beta&t=a9lPZPgekcr941Yi6HfLLoE4QP3SM68DXszaZmCKP98",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-white text-black py-32 px-6 lg:px-12"
      ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
            FEATURED WORK
          </h2>
          <a
            href="#projects"
            className="text-sm uppercase tracking-wider text-black/60 hover:text-black transition-colors inline-flex items-center gap-2">
            SEE ALL WORKS →
          </a>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="relative overflow-hidden bg-black aspect-[4/3]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl md:text-7xl font-black text-black/10">
                      {project.number}
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-black/60 mb-2">
                        {project.category}
                      </p>
                      <p className="text-sm text-black/40">{project.year}</p>
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-lg text-black/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-black/5 text-black/70 text-xs font-medium rounded border border-black/10">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-black hover:gap-4 transition-all group/link">
                    VIEW PROJECT
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
