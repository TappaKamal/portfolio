// "use client";

// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex flex-col justify-between items-center relative overflow-hidden bg-black text-white px-6 lg:px-12 pt-32 pb-12">
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col justify-center items-center text-center w-full max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
//           className="w-full">
//           <motion.h1
//             className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-8 leading-none"
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
//             KAMALHSN
//           </motion.h1>

//           <motion.p
//             className="text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-white/70 mb-12"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.4 }}>
//             A COLLECTION OF VISUAL WORKS
//           </motion.p>

//           <motion.p
//             className="text-lg md:text-xl font-light tracking-wide text-white/50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.6 }}>
//             KAMALHSN 2025
//           </motion.p>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="flex flex-col items-center gap-2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.8 }}>
//         <span className="text-xs uppercase tracking-wider text-white/50">
//           SCROLL TO EXPLORE
//         </span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
//           <svg
//             className="w-5 h-5 text-white/50"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    title: false,
    subtitle: false,
    year: false,
    scroll: false,
  });

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setIsVisible((prev) => ({ ...prev, title: true })), 200);
    setTimeout(
      () => setIsVisible((prev) => ({ ...prev, subtitle: true })),
      600
    );
    setTimeout(() => setIsVisible((prev) => ({ ...prev, year: true })), 1000);
    setTimeout(() => setIsVisible((prev) => ({ ...prev, scroll: true })), 1400);

    // Parallax effect
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between items-center relative overflow-hidden bg-black text-white px-6 lg:px-12 pt-32 pb-12">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center w-full max-w-7xl">
        <div className="w-full">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-none transition-all duration-1000 ease-out ${
              isVisible.title
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{
              transform: `translateY(${Math.min(offsetY * 0.3, 100)}px)`,
            }}>
            KAMALHUSSAIN
          </h1>

          <p
            className={`text-lg md:text-xl lg:text-2xl font-light tracking-wide text-white/70 mb-8 transition-all duration-1000 ease-out ${
              isVisible.subtitle ? "opacity-100" : "opacity-0"
            }`}>
            A COLLECTION OF VISUAL WORKS
          </p>

          <p
            className={`text-base md:text-lg font-light tracking-wide text-white/50 transition-all duration-1000 ease-out ${
              isVisible.year ? "opacity-100" : "opacity-0"
            }`}>
            KAMALHSN 2025
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`flex flex-col items-center gap-2 transition-all duration-1000 ease-out ${
          isVisible.scroll ? "opacity-100" : "opacity-0"
        }`}>
        <span className="text-xs uppercase tracking-wider text-white/50">
          SCROLL TO EXPLORE
        </span>
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
