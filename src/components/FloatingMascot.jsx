import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './FloatingMascot.css'

export default function FloatingMascot() {
  const [message, setMessage] = useState("Hi! I'm your AI companion. 👋")
  const [showMessage, setShowMessage] = useState(false)
  const [isWaving, setIsWaving] = useState(false)

  const messages = [
    "Need help cracking that OA? 🚀",
    "I have 350+ company patterns! 🧠",
    "Your dream offer is waiting. ✨",
    "Practice makes perfect! 💻",
    "Don't forget to check the roadmap. 🗺️"
  ]

  useEffect(() => {
    // Initial wave and message
    const initialTimer = setTimeout(() => {
      setIsWaving(true)
      setShowMessage(true)
      setTimeout(() => setIsWaving(false), 2000)
      setTimeout(() => setShowMessage(false), 5000)
    }, 3000)

    // Cycle messages every 20 seconds
    const interval = setInterval(() => {
      setShowMessage(false)

      setTimeout(() => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)]
        setMessage(randomMsg)
        setShowMessage(true)

        // Hide message after 5 seconds
        setTimeout(() => setShowMessage(false), 5000)
      }, 600)
    }, 20000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(interval)
    }
  }, [])

  const handleMascotClick = () => {
    setIsWaving(true)
    setMessage("You clicked me! Beep boop 🤖")
    setShowMessage(true)

    setTimeout(() => setIsWaving(false), 2000)
    setTimeout(() => setShowMessage(false), 4000)
  }

  return (
    <div className="mascot-container">
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="mascot-bubble"
            initial={{ opacity: 0, y: 15, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 10, scale: 0.9, x: 10 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mascot-wrapper" onClick={handleMascotClick}>
        <div className="mascot-glow-ring"></div>
        <div className="mascot-orb">
          <div className="mascot-face">
            <div className="mascot-eye left"></div>
            <div className="mascot-eye right"></div>
          </div>
        </div>
        <div className={`mascot-arm ${isWaving ? 'waving' : ''}`}>👋</div>
      </div>
    </div>
  )
}
