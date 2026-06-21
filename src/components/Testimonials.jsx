import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiStar } from 'react-icons/hi'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Aditi',
    college: 'IIT Mandi, Class of 2027',
    quote: "The actual OA questions on OAHelper were almost identical to what I got in my Microsoft OA. I solved 3/3 because I had practiced the exact patterns.",
    outcome: 'Cleared Microsoft OA ✅',
    avatar: 'A',
    avatarClass: 'avatar-1'
  },
  {
    name: 'Kumar Aryan',
    college: 'IIT BHU, Class of 2027',
    quote: "I was preparing from random sources until I found OAHelper. The company-specific question banks are a goldmine.",
    outcome: 'Cleared Flipkart OA ✅',
    avatar: 'K',
    avatarClass: 'avatar-2'
  },
  {
    name: 'Ashutosh Soni',
    college: 'MNNIT, Class of 2027',
    quote: "The editorial quality is insane. Each solution has multiple approaches with complexity analysis. Way better than paid platforms.",
    outcome: 'Cleared Goldman Sachs OA ✅',
    avatar: 'A',
    avatarClass: 'avatar-3'
  },
  {
    name: 'Shivanshee Sahu',
    college: 'IIT ISM Dhanbad, Class of 2028',
    quote: "The Monaco editor simulation feels exactly like the real OA environment. No surprises on test day.",
    outcome: 'Praised OA Simulation 🎯',
    avatar: 'S',
    avatarClass: 'avatar-4'
  }
]

export default function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="testimonials" id="testimonials">
      <div className="container" ref={ref}>
        
        <div className="testimonials-header">
          <motion.h2 
            className="testimonials-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Trusted by <br />
            <span className="gradient-text">future engineers</span>
          </motion.h2>
          <motion.p 
            className="testimonials-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hear from students who cracked their dream company OAs
          </motion.p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
            >
              <div className="quote-icon">"</div>
              
              <div className="t-stars">
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
                <HiStar />
              </div>
              
              <p className="t-quote">"{t.quote}"</p>
              
              <div className="t-footer">
                <div className={`t-avatar ${t.avatarClass}`}>
                  {t.avatar}
                </div>
                <div className="t-info">
                  <h4 className="t-name">{t.name}</h4>
                  <p className="t-college">{t.college}</p>
                  <span className="t-outcome">{t.outcome}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
