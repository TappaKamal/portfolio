"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left">
            <p className="text-sm text-white/60 mb-2">© 2025 KAMALHUSSAIN</p>
            <p className="text-xs text-white/40">WEBSITE BY KAMALHUSSAIN</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-8 justify-center md:justify-end text-xs uppercase tracking-wider">
            <span className="text-white/40">01 Full Stack Development</span>
            <span className="text-white/40">02 UI/UX Design</span>
            <span className="text-white/40">03 Cloud Solutions</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
