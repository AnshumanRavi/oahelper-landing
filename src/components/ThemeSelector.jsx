import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAperture } from 'react-icons/fi'
import './ThemeSelector.css'

const THEMES = [
  { id: 'cyberpunk', name: 'Cyberpunk', colors: ['#22d3ee', '#a855f7'] },
  { id: 'sunset', name: 'Sunset', colors: ['#f97316', '#ec4899'] },
  { id: 'ocean', name: 'Ocean', colors: ['#14b8a6', '#3b82f6'] },
  { id: 'forest', name: 'Forest', colors: ['#10b981', '#eab308'] },
  { id: 'monochrome', name: 'Monochrome', colors: ['#f8fafc', '#64748b'] },
]

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState('cyberpunk')
  const menuRef = useRef(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('colorTheme') || 'cyberpunk'
    setActiveTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleThemeChange = (themeId) => {
    setActiveTheme(themeId)
    localStorage.setItem('colorTheme', themeId)
    document.documentElement.setAttribute('data-theme', themeId)
    setIsOpen(false)
  }

  return (
    <div className="theme-selector-container" ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="theme-menu"
            initial={{ opacity: 0, scale: 0.95, y: 10, x: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="theme-menu-header">Select Accent</div>
            {THEMES.map((theme) => (
              <button 
                key={theme.id}
                className={`theme-option ${activeTheme === theme.id ? 'active' : ''}`}
                onClick={() => handleThemeChange(theme.id)}
              >
                <div className="theme-colors">
                  <span className="color-dot" style={{ background: theme.colors[0] }}></span>
                  <span className="color-dot" style={{ background: theme.colors[1] }}></span>
                </div>
                {theme.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        className="theme-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change color theme"
      >
        <FiAperture />
      </button>
    </div>
  )
}
