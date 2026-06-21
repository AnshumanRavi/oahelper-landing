import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheck } from 'react-icons/hi'
import './Pricing.css'

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section className="pricing" id="pricing">
      <div className="container" ref={ref}>
        
        <div className="pricing-header">
          <motion.h2 
            className="pricing-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Simple, <br />
            <span className="gradient-text">transparent pricing</span>
          </motion.h2>
          <motion.p 
            className="pricing-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Start free. Go premium when you're serious.
          </motion.p>
        </div>

        {/* Billing Toggle */}
        <motion.div 
          className="pricing-toggle-container"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
          <div 
            className={`toggle-switch ${isAnnual ? 'annual' : ''}`}
            onClick={() => setIsAnnual(!isAnnual)}
          >
            <motion.div 
              className="toggle-knob"
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
          <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
            Annually <span className="save-badge">Save 20%</span>
          </span>
        </motion.div>

        <div className="pricing-grid">
          
          {/* Free Plan */}
          <motion.div 
            className="pricing-card"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="pricing-title">Free</h3>
            <p className="pricing-desc">Perfect for getting started</p>
            
            <div className="pricing-price-container">
              <span className="pricing-amount">₹0</span>
              <span className="pricing-period">/forever</span>
            </div>

            <div className="pricing-divider"></div>

            <ul className="pricing-features">
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> Interview experiences
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> Limited free questions
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> Placement drive info
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> Basic company list
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> No account required
              </li>
            </ul>

            <a href="#" className="btn-pricing btn-pricing-outline">
              Get Started
            </a>
          </motion.div>

          {/* Premium Plan */}
          <motion.div 
            className="pricing-card premium"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="popular-badge">Most Popular</div>
            <h3 className="pricing-title">Premium</h3>
            <p className="pricing-desc">Everything you need to crack any OA</p>
            
            <div className="pricing-price-container">
              {isAnnual && <span className="pricing-strikethrough">₹199</span>}
              <span className="pricing-amount">{isAnnual ? '₹79' : '₹99'}</span>
              <span className="pricing-period">/month</span>
            </div>
            {isAnnual && <p className="billed-yearly">Billed ₹948 yearly</p>}

            <div className="pricing-divider"></div>

            <ul className="pricing-features">
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> Everything in Free
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> All written solutions
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> Real question screenshots
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> Unlimited company access
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> AI coding companion
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> Priority support
              </li>
              <li className="pricing-feature">
                <HiCheck className="feature-icon" /> Assessment mode
              </li>
            </ul>

            <a href="#" className="btn-pricing btn-pricing-gradient">
              Go Premium
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
