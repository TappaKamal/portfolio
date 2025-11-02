// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const Credentials = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-150px" });

//   const credentials = [
//     {
//       id: 1,
//       name: "MongoDB Associate Database Administrator",
//       description:
//         "Proven expertise in MongoDB administration, performance tuning, backup & recovery, and implementing secure, high-availability database environments.",
//       badgeIcon: "🔷",
//       badgeText: "Associate",
//     },
//     {
//       id: 2,
//       name: "MongoDB Associate Developer JAVA",
//       description:
//         "Proficient in MongoDB Java development, schema design, CRUD operations, and performance optimization.",
//       badgeIcon: "🔵",
//       badgeText: "ASSOCIATE",
//     },
//     {
//       id: 3,
//       name: "Oracle Cloud Infrastructure Architect Associate",
//       description:
//         "Skilled in architecting secure and scalable cloud solutions on OCI.",
//       badgeIcon: "🔴",
//       badgeText: "CERTIFIED",
//     },
//     {
//       id: 4,
//       name: "Aviatrix Multicloud Network",
//       description:
//         "Skilled in designing and operating secure, scalable multi-cloud network architectures using Aviatrix across AWS, Azure, GCP, and OCI.",
//       badgeIcon: "🛡️",
//       badgeText: "ASSOCIATE",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   };

//   return (
//     <section
//       id="credentials"
//       className="min-h-screen bg-black text-white py-32 px-6 lg:px-12"
//       ref={ref}>
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}>
//           <motion.h2
//             variants={cardVariants}
//             className="text-6xl md:text-8xl font-black tracking-tight mb-20 text-center">
//             <span className="text-white">My Credential</span>
//             <br />
//             <span className="text-purple-300">Collection</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {credentials.map((credential, index) => (
//               <motion.div
//                 key={credential.id}
//                 variants={cardVariants}
//                 className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-300/50 transition-all duration-500 p-8">
//                 {/* Glow effect */}
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500"></div>

//                 <div className="relative z-10 flex gap-6">
//                   {/* Badge */}
//                   <div className="flex-shrink-0">
//                     <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       {credential.badgeIcon}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1">
//                     <div className="mb-3">
//                       <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold">
//                         {credential.badgeText}
//                       </span>
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
//                       {credential.name}
//                     </h3>
//                     <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
//                       {credential.description}
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Credentials;

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Credentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const credentials = [
    {
      id: 1,
      name: "MongoDB Associate Database Administrator",
      description:
        "Proven expertise in MongoDB administration, performance tuning, backup & recovery, and implementing secure, high-availability database environments.",
      badgeImage:
        "data:image/png;base64,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",
      badgeText: "Associate",
    },
    {
      id: 2,
      name: "MongoDB Associate Developer JAVA",
      description:
        "Proficient in MongoDB Java development, schema design, CRUD operations, and performance optimization.",
      badgeImage:
        "data:image/png;base64,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",
      badgeText: "ASSOCIATE",
    },
    {
      id: 3,
      name: "Oracle Cloud Infrastructure Architect Associate",
      description:
        "Skilled in architecting secure and scalable cloud solutions on OCI.",
      badgeImage:
        "data:image/jpeg;base64,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",
      badgeText: "CERTIFIED",
    },
    {
      id: 4,
      name: "Aviatrix Multicloud Network",
      description:
        "Skilled in designing and operating secure, scalable multi-cloud network architectures using Aviatrix across AWS, Azure, GCP, and OCI.",
      badgeImage:
        "data:image/png;base64,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",
      badgeText: "ASSOCIATE",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="credentials"
      className="min-h-screen bg-black text-white py-32 px-6 lg:px-12"
      ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            variants={cardVariants}
            className="text-6xl md:text-8xl font-black tracking-tight mb-20 text-center">
            <span className="text-white">My Credential</span>
            <br />
            <span className="text-purple-300">Collection</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.id}
                variants={cardVariants}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-300/50 transition-all duration-500 p-8">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all duration-500"></div>

                <div className="relative z-10 flex gap-6">
                  {/* Badge Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={credential.badgeImage}
                      alt={`${credential.name} badge`}
                      className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="text-xs uppercase tracking-wider text-purple-300 font-semibold">
                        {credential.badgeText}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {credential.name}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                      {credential.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credentials;
