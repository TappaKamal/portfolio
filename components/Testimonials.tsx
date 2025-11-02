'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const testimonials = [
    {
      id: 1,
      name: 'Thibaud D\'hondt',
      title: 'Co-founder | Zippsafe',
      quote: 'The team delivered exactly what we needed. Our website looks amazing and performs perfectly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      title: 'CEO | DreamBaby',
      quote: 'Outstanding work! They transformed our vision into a beautiful digital reality.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Michael Chen',
      title: 'Founder | FlowUP',
      quote: 'Professional, creative, and efficient. Highly recommended for any web project.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Emma Wilson',
      title: 'Director | CEIRA',
      quote: 'They exceeded our expectations. The website is both beautiful and functional.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section 
      id="testimonials" 
      className="py-32 bg-odoo-dark relative overflow-hidden" 
      ref={ref}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-odoo-green blur-3xl"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-odoo-purple blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
            Voice of our clients
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="bg-odoo-gray rounded-lg p-8 border border-white/5 hover:border-odoo-green/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-odoo-green/30"
                />
                <div>
                  <h3 className="text-white font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-white/60 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-12 opacity-40"
        >
          {['ideve', 'FONDATION SAINT-LUC', 'DreamBaby', 'CEIRA', 'FlowUP', 'LINDOR'].map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.4, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-white/40 text-sm font-semibold uppercase tracking-wider"
            >
              {logo}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

