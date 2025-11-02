'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-150px' })

  const services = [
    { number: '01', name: 'Web design', dot: true },
    { number: '02', name: 'Logo design', dot: true },
    { number: '03', name: 'Photography', dot: true },
    { number: '04', name: 'SEO', dot: true },
    { number: '05', name: 'Marketing', dot: true },
  ]

  return (
    <section 
      id="services" 
      className="py-32 bg-odoo-dark relative overflow-hidden" 
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          {/* Left side */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
              SERVICES
            </h2>
          </div>

          {/* Middle wave separator */}
          <div className="hidden md:block">
            <svg width="60" height="4" viewBox="0 0 60 4" fill="none">
              <motion.path
                d="M0,2 Q15,0 30,2 T60,2"
                stroke="#00ff88"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* Right side */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50" style={{
                WebkitTextStroke: '1px white',
                WebkitTextFillColor: 'transparent',
              }}>
                WHAT WE DO
              </span>
            </h2>
            
            <ul className="space-y-6">
              {services.map((service, index) => (
                <motion.li
                  key={service.number}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-between text-white/80 hover:text-odoo-green transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-odoo-green font-semibold">{service.number}</span>
                    <span className="text-xl font-medium">{service.name}</span>
                  </div>
                  {service.dot && (
                    <div className="w-2 h-2 rounded-full bg-odoo-green group-hover:scale-150 transition-transform"></div>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

