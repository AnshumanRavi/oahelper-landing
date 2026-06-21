import React from 'react'
import { FaLinkedinIn, FaYoutube, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'
import { HiArrowRight } from 'react-icons/hi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          {/* Column 1: Brand & Newsletter */}
          <div className="footer-col footer-col-1">
            <div className="footer-brand">
              <div className="footer-logo-icon">OA</div>
              <div className="footer-brand-text">OAHelper</div>
            </div>
            <p className="footer-tagline">
              The home base for students across India practicing<br/>
              real assessments, DSA sheets and interview<br/>
              experiences — all the way to the offer.
            </p>
            
            <div className="footer-newsletter">
              <label>Get fresh OAs in your inbox</label>
              <div className="newsletter-input-group">
                <input type="email" placeholder="you@college.edu" />
                <button className="btn-join">Join <HiArrowRight /></button>
              </div>
            </div>
          </div>

          {/* Column 2: Practice */}
          <div className="footer-col">
            <h4>Practice</h4>
            <ul className="footer-links">
              <li><a href="#">Company OAs</a></li>
              <li><a href="#">DSA Sheets</a></li>
              <li><a href="#">Mock Assessments</a></li>
              <li><a href="#">Aptitude</a></li>
              <li><a href="#">Topic Tracks</a></li>
            </ul>
          </div>

          {/* Column 3: Learn */}
          <div className="footer-col">
            <h4>Learn</h4>
            <ul className="footer-links">
              <li><a href="#">Interview Experiences</a></li>
              <li><a href="#">Roadmaps</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Success Stories</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 OA Helper. Built for every student chasing a dream offer.</p>
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" className="social-icon" aria-label="GitHub"><FaGithub /></a>
            <a href="#" className="social-icon" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}
