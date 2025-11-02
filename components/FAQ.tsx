'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What are the prices?',
      answer: 'Our pricing depends on the scope and complexity of your project. We offer customized quotes tailored to your specific needs. Contact us for a detailed estimate.',
    },
    {
      question: 'How long will it take?',
      answer: 'Project timelines vary based on requirements. A simple website typically takes 2-4 weeks, while more complex projects may take 6-12 weeks. We provide detailed timelines in our proposals.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer maintenance and support packages to keep your website running smoothly. This includes updates, security patches, and technical assistance.',
    },
    {
      question: 'Can you work with our existing design?',
      answer: 'Absolutely! We can work with your existing brand guidelines, design systems, or create something entirely new based on your vision.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We use modern technologies including Next.js, React, TypeScript, Tailwind CSS, and various other tools depending on project requirements.',
    },
  ]

  return (
    <section 
      id="faq" 
      className="py-32 bg-odoo-dark relative overflow-hidden" 
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
              FAQ
            </h2>
            <p className="text-white/60 text-lg mb-12">
              Find answers to common questions about our services and process.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-odoo-gray rounded-lg border border-white/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-white font-semibold text-lg">{faq.question}</span>
                    <motion.svg
                      className="w-6 h-6 text-odoo-green"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-white/70 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

