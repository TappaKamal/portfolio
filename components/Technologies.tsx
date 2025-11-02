// 'use client'

// import { motion, useInView } from 'framer-motion'
// import { useRef } from 'react'

// const Technologies = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-150px' })

//   const technologies = [
//     {
//       name: 'Cloudinary',
//       icon: (
//         <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.5l8-4 8 4V12c0 4.41-3.59 8-8 8z"/>
//         </svg>
//       ),
//     },
//     {
//       name: 'Appwrite',
//       icon: (
//         <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
//         </svg>
//       ),
//     },
//     {
//       name: 'Hostinger',
//       icon: (
//         <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4.41 0-8-3.59-8-8V8.5l8-4 8 4V12c0 4.41-3.59 8-8 8z"/>
//         </svg>
//       ),
//     },
//     {
//       name: 'Stream',
//       icon: (
//         <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M17.5 10.5c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zM3 18v2h18v-2H3z"/>
//         </svg>
//       ),
//     },
//     {
//       name: 'Docker',
//       icon: (
//         <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
//           <path d="M13.983 18.943h3.782v-3.783h-3.782v3.783zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm6.961 16.304l-1.8 1.8c-.885.885-2.373.885-3.258 0L5.34 8.836c-.885-.885-.885-2.373 0-3.258l1.8-1.8c.885-.885 2.373-.885 3.258 0l8.563 8.563c.886.886.886 2.373.001 3.258z"/>
//         </svg>
//       ),
//     },
//   ]

//   return (
//     <section
//       id="technologies"
//       className="min-h-screen bg-gradient-to-b from-black to-purple-950 text-white py-32 px-6 lg:px-12"
//       ref={ref}
//     >
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}
//           className="text-center"
//         >
//           <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-16">
//             <span className="text-white">Technologies I've</span>
//             <br />
//             <span className="text-purple-300">worked with</span>
//           </h2>

//           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
//             {technologies.map((tech, index) => (
//               <motion.div
//                 key={tech.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="flex flex-col items-center gap-4 group"
//               >
//                 <div className="text-white group-hover:text-purple-300 transition-colors">
//                   {tech.icon}
//                 </div>
//                 <span className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">
//                   {tech.name}
//                 </span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Technologies
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const technologies = [
    {
      name: "Cloudinary",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cloudinary.svg",
    },
    {
      name: "Appwrite",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/appwrite.svg",
    },
    {
      name: "Hostinger",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hostinger.svg",
    },
    {
      name: "Stream",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/streamlit.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
    },
  ];

  return (
    <section
      id="technologies"
      className="min-h-screen bg-gradient-to-b from-black to-purple-950 text-white py-32 px-6 lg:px-12"
      ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-16">
            <span className="text-white">Technologies I've</span>
            <br />
            <span className="text-purple-300">worked with</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center gap-4 group">
                <div className="text-white group-hover:text-purple-300 transition-colors">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    className="w-12 h-12 filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                  />
                </div>
                <span className="text-sm uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
