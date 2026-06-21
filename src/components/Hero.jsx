import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated Gradient Mesh Background */}
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge-new">NEW</span>
          Trusted by 120k+ students across India <HiArrowRight />
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Practice the<br/>
          exact<br/>
          online<br/>
          <span className="gradient-text">assessments</span><br/>
          that land your<br/>
          <span className="gradient-text-secondary">first job.</span>
        </motion.h1>

        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Real OA questions from 350+ top companies, curated DSA sheets and honest interview experiences — all in one place. Stop guessing what the test looks like. Walk in already knowing.
        </motion.p>

        <motion.div 
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button className="hero-btn-primary">
            Start Practicing
            <HiArrowRight className="hero-btn-icon" />
          </button>
        </motion.div>
      </div>

      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {/* Floating Bubble 1: Google OA */}
        <motion.div 
          className="floating-bubble bubble-google"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="bubble-icon google-icon">G</div>
          <div className="bubble-text">
            <strong>Google OA</strong>
            <span>2 coding • 1 DP</span>
          </div>
        </motion.div>

        {/* Floating Bubble 2: 42-day streak */}
        <motion.div 
          className="floating-bubble bubble-streak"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <span className="streak-fire">🔥</span>
          <strong>42-day streak</strong>
        </motion.div>

        {/* Floating Bubble 3: Offer unlocked */}
        <motion.div 
          className="floating-bubble bubble-offer"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="bubble-icon success-icon">✓</div>
          <div className="bubble-text">
            <strong>Offer unlocked</strong>
            <span>Microsoft • SDE</span>
          </div>
        </motion.div>

        <div className="mock-ide">
          <div className="ide-header">
            <div className="mac-dots">
              <span className="dot close"></span>
              <span className="dot minimize"></span>
              <span className="dot expand"></span>
            </div>
            <div className="ide-title">
              <span className="company-logo amazon">a</span>
              Amazon · Online Assessment
            </div>
            <div className="ide-timer">
              <span className="pulse-dot"></span> 27:48
            </div>
          </div>
          
          <div className="ide-body">
            <div className="problem-header">
              <h3>Maximum Subarray Score</h3>
              <span className="difficulty medium">Medium</span>
            </div>

            <div className="code-editor">
              <pre>
                <code className="python">
                  <span className="keyword">def</span> <span className="function">maxScore</span>(nums, k):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;best = window = <span className="number">0</span><br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">for</span> i, x <span className="keyword">in</span> <span className="builtin">enumerate</span>(nums):<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window += x<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span> i &gt;= k:<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;window -= nums[i - k]<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;best = <span className="builtin">max</span>(best, window)<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> best
                </code>
              </pre>
            </div>

            <div className="test-cases-panel">
              <div className="test-cases-header">
                <span className="status-passed">✓ All test cases passed</span>
                <span className="fraction">12/12</span>
              </div>
              <div className="test-cases-grid">
                <div className="test-case">
                  <span>✓ Sample 1</span>
                  <span className="time">0.03s</span>
                </div>
                <div className="test-case">
                  <span>✓ Sample 2</span>
                  <span className="time">0.04s</span>
                </div>
                <div className="test-case">
                  <span>✓ Hidden 1</span>
                  <span className="time">0.05s</span>
                </div>
                <div className="test-case">
                  <span>✓ Hidden 2</span>
                  <span className="time">0.05s</span>
                </div>
              </div>
            </div>
            
            <div className="ide-footer-actions">
              <button className="btn-submit">Submit solution</button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
