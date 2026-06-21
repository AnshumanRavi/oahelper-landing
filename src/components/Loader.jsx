import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Keep loader on screen for 1.8s
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 500) // Wait for exit animation to finish
    }, 1800)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="loader-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="loader-logo-wrapper">
            <motion.div 
              className="loader-icon"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              A
            </motion.div>
            
            <motion.div 
              className="loader-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              OAHelper
            </motion.div>

            <div className="loader-progress-bar">
              <motion.div 
                className="loader-progress-fill"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
