// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-150px" });
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [copied, setCopied] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you for your message! I will get back to you soon.");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const copyEmail = () => {
//     navigator.clipboard.writeText("kamalhussaintappa09@gmail.com");
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   const contactLinks = [
//     {
//       label: "EMAIL",
//       href: "mailto:kamalhussaintappa09@gmail.com",
//       action: copyEmail,
//     },

//     {
//       label: "LINKEDIN",
//       href: "https://www.linkedin.com/in/kamalhussain-t",
//       external: true,
//     },
//   ];

//   return (
//     <section
//       id="contact"
//       className="min-h-screen bg-white text-black py-32 px-6 lg:px-12"
//       ref={ref}>
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8 }}>
//           <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-16">
//             CONTACT
//           </h2>

//           <div className="grid lg:grid-cols-2 gap-16">
//             {/* Left Side - Contact Info */}
//             <div className="space-y-8">
//               <div>
//                 <p className="text-lg text-black/70 mb-8 leading-relaxed">
//                   Let's work together! I'm always open to discussing new
//                   projects, creative ideas, or opportunities to be part of your
//                   visions.
//                 </p>
//               </div>

//               {/* Contact Links */}
//               <div className="space-y-6">
//                 {contactLinks.map((link, index) => (
//                   <motion.a
//                     key={link.label}
//                     href={link.href}
//                     target={link.external ? "_blank" : undefined}
//                     rel={link.external ? "noopener noreferrer" : undefined}
//                     onClick={link.action}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={
//                       isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
//                     }
//                     transition={{ duration: 0.6, delay: index * 0.1 }}
//                     className="block text-lg font-medium uppercase tracking-wider text-black/80 hover:text-black transition-colors group">
//                     {link.label === "EMAIL" && copied ? "COPIED!" : link.label}
//                     <svg
//                       className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17 8l4 4m0 0l-4 4m4-4H3"
//                       />
//                     </svg>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* Right Side - Contact Form */}
//             <motion.form
//               onSubmit={handleSubmit}
//               initial={{ opacity: 0, x: 20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="space-y-6">
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={(e) =>
//                     setFormData({ ...formData, name: e.target.value })
//                   }
//                   className="w-full px-0 py-4 bg-transparent border-b border-black/20 text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
//                   required
//                 />
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   className="w-full px-0 py-4 bg-transparent border-b border-black/20 text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors"
//                   required
//                 />
//               </div>
//               <div>
//                 <textarea
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   rows={6}
//                   className="w-full px-0 py-4 bg-transparent border-b border-black/20 text-black placeholder-black/40 focus:outline-none focus:border-black transition-colors resize-none"
//                   required></textarea>
//               </div>
//               <motion.button
//                 type="submit"
//                 className="px-8 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-black/80 transition-colors"
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}>
//                 Send Message
//               </motion.button>
//             </motion.form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kamalhussaintappa09@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-black py-32 px-6 lg:px-12"
      ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-16">
            CONTACT
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-black/70 mb-12 leading-relaxed text-center">
              Let's work together! I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your visions.
            </p>

            {/* Contact Buttons */}
            <div className="space-y-6">
              {/* Email Button */}
              <motion.a
                href="mailto:kamalhussaintappa09@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block w-full px-8 py-6 bg-black text-white hover:bg-black/80 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-lg font-medium uppercase tracking-wider">
                    Let's Get in Touch
                  </span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm mt-2 text-white/70 text-center">
                  kamalhussaintappa09@gmail.com
                </p>
              </motion.a>

              {/* LinkedIn Button */}
              <motion.a
                href="https://www.linkedin.com/in/kamalhussain-t"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block w-full px-8 py-6 bg-black text-white hover:bg-black/80 transition-all group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-lg font-medium uppercase tracking-wider">
                    Connect on LinkedIn
                  </span>
                  <svg
                    className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <p className="text-sm mt-2 text-white/70 text-center">
                  linkedin.com/in/kamalhussain-t
                </p>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
