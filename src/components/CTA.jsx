import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight, HiCheck } from 'react-icons/hi'
import { IoRocketOutline } from 'react-icons/io5'
import './CTA.css'

export default function CTA() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section className="cta-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Top Icons */}
          <div className="cta-icon-group">
            <div className="cta-icon cta-icon-circle">
              <div className="inner-dot"></div>
            </div>
            <div className="cta-icon cta-icon-rocket">
              <IoRocketOutline />
            </div>
          </div>

          <motion.h2 
            className="cta-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Your dream offer starts with <br/>
            <span className="gradient-text-full">one practiced assessment</span>
          </motion.h2>
          
          <motion.p 
            className="cta-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join 120,000+ students who stopped fearing online<br/>
            assessments and started collecting offers. Your first practice<br/>
            set is one click away.
          </motion.p>
          
          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#" className="btn-cta-filled">
              Start practicing free <HiArrowRight />
            </a>
            <a href="#" className="btn-cta-outline">
              Explore companies
            </a>
          </motion.div>

          <motion.div 
            className="cta-features"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="cta-feature"><HiCheck className="check-icon"/> Free to start</span>
            <span className="cta-feature"><HiCheck className="check-icon"/> No credit card</span>
            <span className="cta-feature"><HiCheck className="check-icon"/> 350+ companies</span>
            <span className="cta-feature"><HiCheck className="check-icon"/> New OAs weekly</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
