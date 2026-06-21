import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineSearch,
  HiOutlineBriefcase,
  HiOutlineQuestionMarkCircle,
  HiOutlineAcademicCap,
  HiOutlineUpload,
  HiOutlineShoppingBag,
  HiChevronDown,
  HiX,
} from 'react-icons/hi'
import './Navbar.css'

const navLinks = [
  { label: 'Placements', hasDropdown: true, icon: HiOutlineBriefcase },
  { label: 'Questions', hasDropdown: true, icon: HiOutlineQuestionMarkCircle },
  { label: 'For Campus', hasDropdown: true, icon: HiOutlineAcademicCap },
  { label: 'Contribute', hasDropdown: true, icon: HiOutlineUpload },
  { label: 'OA Store', hasDropdown: false, icon: HiOutlineShoppingBag },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [bannerVisible, setBannerVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.header
      className="navbar-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Announcement Banner */}
      <AnimatePresence>
        {bannerVisible && (
          <motion.div
            className="announcement-banner"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <span className="announcement-emoji">📅</span>
            <span className="announcement-new">NEW</span>
            <span className="announcement-text">
              OA Calendar is live — 400+ companies tracked
            </span>
            <span className="announcement-arrow">→</span>
            <button
              className="announcement-close"
              onClick={(e) => {
                e.stopPropagation()
                setBannerVisible(false)
              }}
              aria-label="Close announcement"
            >
              <HiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav className={`navbar navbar-glass ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <a href="/" className="navbar-logo">
            <div className="navbar-logo-icon">Ⓐ</div>
            <div className="navbar-logo-text">
              <span className="navbar-logo-name">OAHelper</span>
              <span className="navbar-logo-tag">
                Powered by <span>NxtWave</span>
              </span>
            </div>
          </a>

          {/* Center Nav Links (Desktop) */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <a key={link.label} href="#" className="navbar-link">
                {link.label}
                {link.hasDropdown && (
                  <HiChevronDown className="navbar-link-dropdown" />
                )}
              </a>
            ))}
          </div>

          {/* Right Section (Desktop) */}
          <div className="navbar-right">
            <button className="navbar-search">
              <HiOutlineSearch className="navbar-search-icon" />
              <span className="navbar-search-text">Search</span>
              <kbd className="navbar-search-shortcut">Ctrl K</kbd>
            </button>
            <button className="navbar-login">Login</button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`navbar-mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="navbar-mobile-links">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href="#"
                  className="navbar-mobile-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon className="navbar-mobile-link-icon" />
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              className="navbar-mobile-actions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="navbar-mobile-search">
                <HiOutlineSearch />
                <span>Search questions, companies...</span>
              </div>
              <button className="navbar-mobile-login">
                Login / Sign Up
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
