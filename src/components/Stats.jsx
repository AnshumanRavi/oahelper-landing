import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiOutlineCode, HiOutlineOfficeBuilding, HiOutlineAcademicCap } from 'react-icons/hi'
import './Stats.css'

/* ── Animated Counter Hook ── */
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!start) return

    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [target, duration, start])

  return count
}

/* ── Stats Data ── */
const stats = [
  {
    target: 3500,
    suffix: '+',
    label: 'Real OA Questions',
    icon: HiOutlineCode,
    color: 'cyan',
  },
  {
    target: 400,
    suffix: '+',
    label: 'Companies Tracked',
    icon: HiOutlineOfficeBuilding,
    color: 'purple',
  },
  {
    target: 1000,
    suffix: '+',
    label: 'Students Placed',
    icon: HiOutlineAcademicCap,
    color: 'green',
  },
]

/* ── Single Stat Card ── */
function StatCard({ stat, index, isVisible }) {
  const count = useCounter(stat.target, 2200, isVisible)
  const Icon = stat.icon

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15 + 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="stat-card-inner">
        <div className={`stat-icon-wrapper stat-icon-${stat.color}`}>
          <Icon />
        </div>
        <div className="stat-content">
          <div className={`stat-number stat-number-${stat.color}`}>
            {count.toLocaleString()}{stat.suffix}
          </div>
          <div className="stat-label">{stat.label}</div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Stats Section ── */
export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section className="stats" ref={ref}>
      {/* Background glow */}
      <div className="stats-bg-glow-1" />
      <div className="stats-bg-glow-2" />

      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={i}
              isVisible={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
