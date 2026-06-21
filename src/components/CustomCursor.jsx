import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './CustomCursor.css'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  
  // Instant mouse position for the dot
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Spring settings for the trailing ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button'
      
      setIsHovering(isClickable)
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <div className="custom-cursor-container">
      {/* Trailing Ring */}
      <motion.div 
        className={`custom-cursor-ring ${isHovering ? 'hovering' : ''}`}
        style={{
          x: ringX,
          y: ringY
        }}
      />
      {/* Instant Dot */}
      <motion.div 
        className="custom-cursor-dot"
        style={{
          x: cursorX,
          y: cursorY
        }}
      />
    </div>
  )
}
