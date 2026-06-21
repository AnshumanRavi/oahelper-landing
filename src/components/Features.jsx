import React, { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiOutlineOfficeBuilding,
  HiOutlineSparkles,
  HiOutlineCheckCircle,
  HiOutlinePhotograph,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
} from 'react-icons/hi'
import { HiArrowRight } from 'react-icons/hi'
import './Features.css'

/* ── Hover Tilt Effect Component ── */
function TiltCard({ children, className }) {
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25 // 25 is dampening factor
    const y = (e.clientY - top - height / 2) / 25
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const transform = useMotionTemplate`rotateY(${mouseX}deg) rotateX(${-mouseY.get()}deg)`

  return (
    <motion.div
      ref={ref}
      className={`feature-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      {children}
    </motion.div>
  )
}

/* ── Features Data ── */
const features = [
  {
    id: 1,
    size: 'large',
    color: 'cyan',
    icon: HiOutlineOfficeBuilding,
    title: 'Real Company Questions',
    desc: 'Real questions from 400+ companies, updated every hiring season.',
    linkText: 'Browse companies',
    customClass: 'feature-card-1',
    Visual: () => (
      <div className="feature-visual mini-company-grid">
        {['Google', 'Amazon', 'Microsoft', 'Atlassian', 'Uber', 'Databricks', 'Stripe', '+393'].map((name, i) => (
          <div key={name} className={`mini-company-pill ${i === 7 ? 'mini-company-pill-more' : ''}`}>
            {name}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    size: 'large',
    color: 'purple',
    icon: HiOutlineSparkles,
    title: 'AI Coding Companion',
    desc: 'A senior-dev style AI that gives hints, not answers.',
    linkText: 'Try helper',
    customClass: 'feature-card-2',
    Visual: () => (
      <div className="feature-visual chat-mockup">
        <div className="chat-bubble chat-user">
          I'm stuck on finding the longest palindromic substring. Should I use DP?
        </div>
        <div className="chat-bubble chat-ai">
          <div className="chat-ai-label">OAHelper AI</div>
          DP works, but takes O(n²). Can you think of a way to expand from the center instead?
        </div>
        <div className="chat-typing">
          <span className="chat-typing-dot" />
          <span className="chat-typing-dot" />
          <span className="chat-typing-dot" />
        </div>
      </div>
    ),
  },
  {
    id: 3,
    size: 'small',
    color: 'green',
    icon: HiOutlineCheckCircle,
    title: 'Verified Solutions',
    desc: 'Expert editorials by Codeforces Candidate Masters.',
    linkText: 'See editorial',
    customClass: 'feature-card-3 feature-card-small',
  },
  {
    id: 4,
    size: 'small',
    color: 'amber',
    icon: HiOutlinePhotograph,
    title: 'Real OA Screenshots',
    desc: 'Unedited screenshots of actual OA questions.',
    linkText: 'View sample',
    customClass: 'feature-card-4 feature-card-small',
  },
  {
    id: 5,
    size: 'small',
    color: 'pink',
    icon: HiOutlineLightningBolt,
    title: '3x Faster Editor',
    desc: 'Monaco-powered editor for real coding speed.',
    linkText: 'Open editor',
    customClass: 'feature-card-5 feature-card-small',
  },
  {
    id: 6,
    size: 'small',
    color: 'blue',
    icon: HiOutlineChartBar,
    title: 'Company Insights',
    desc: 'CTC, difficulty curves, topic frequencies per company.',
    linkText: 'Explore',
    customClass: 'feature-card-6 feature-card-small',
  },
]

export default function Features() {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  })

  return (
    <section className="features" id="features" ref={ref}>
      <div className="features-bg-glow" />

      <div className="container">
        {/* Section Heading */}
        <motion.div
          className="features-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>
            Everything you need to
            <span>crack the OA</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                className={feature.customClass}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1 + 0.2, // Staggered entrance
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TiltCard className={`feature-card-${feature.color}`}>
                  <div className="feature-card-content">
                    <div className={`feature-icon feature-icon-${feature.color}`}>
                      <Icon />
                    </div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.desc}</p>
                    
                    {feature.Visual && <feature.Visual />}
                    
                    <a href="#" className={`feature-link feature-link-${feature.color}`}>
                      {feature.linkText}
                      <HiArrowRight className="feature-link-arrow" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
