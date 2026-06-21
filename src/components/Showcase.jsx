import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'
import './Showcase.css'

export default function Showcase() {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="showcase" id="showcase">
      <div className="showcase-bg-glow-1" />
      <div className="showcase-bg-glow-2" />

      <div className="container">
        
        {/* ===== BLOCK 1: Interview Experiences ===== */}
        <div className="showcase-block" ref={ref1}>
          {/* Content Left */}
          <motion.div 
            className="showcase-content"
            initial={{ opacity: 0, x: -50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="showcase-tag">Interview Experiences</div>
            <h2 className="showcase-heading">Learn from those who made it</h2>
            <p className="showcase-desc">
              Stop relying on scattered LeetCode discuss posts. Get verified, detailed interview experiences from students at IITs, NITs, and top tier colleges. Real questions asked, exact rounds, and outcomes.
            </p>
            <a href="#" className="btn-showcase btn-showcase-green">
              View All Experiences <HiArrowRight />
            </a>
          </motion.div>

          {/* Visual Right (Stacked Cards) */}
          <motion.div 
            className="showcase-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="experience-cards-wrapper">
              
              {/* Card 1 (Top) */}
              <div className="exp-card exp-card-1">
                <div className="exp-card-header">
                  <div className="exp-company-logo">Google</div>
                  <div className="exp-outcome outcome-offer">Offer</div>
                </div>
                <div className="exp-user">
                  <div className="exp-avatar">A</div>
                  <div className="exp-user-info">
                    <h4>Ananya Sharma</h4>
                    <p>IIT Bombay • SWE Intern 2024</p>
                  </div>
                </div>
              </div>

              {/* Card 2 (Middle) */}
              <div className="exp-card exp-card-2">
                <div className="exp-card-header">
                  <div className="exp-company-logo">Amazon</div>
                  <div className="exp-outcome outcome-offer">Offer</div>
                </div>
                <div className="exp-user">
                  <div className="exp-avatar">R</div>
                  <div className="exp-user-info">
                    <h4>Rahul Verma</h4>
                    <p>NIT Trichy • SDE-1</p>
                  </div>
                </div>
              </div>

              {/* Card 3 (Bottom) */}
              <div className="exp-card exp-card-3">
                <div className="exp-card-header">
                  <div className="exp-company-logo">Goldman Sachs</div>
                  <div className="exp-outcome outcome-interview">Interviewed</div>
                </div>
                <div className="exp-user">
                  <div className="exp-avatar">P</div>
                  <div className="exp-user-info">
                    <h4>Priya Patel</h4>
                    <p>BITS Pilani • Analyst</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* ===== BLOCK 2: Company Insights ===== */}
        <div className="showcase-block reverse" ref={ref2}>
          {/* Visual Left (Company Profile Mockup) */}
          <motion.div 
            className="showcase-visual"
            initial={{ opacity: 0, x: -50 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="company-profile-card">
              <div className="cp-header">
                <div className="cp-logo-box">G</div>
                <div className="cp-title">
                  <h3>Google</h3>
                  <p>Software Engineering • Campus Hiring</p>
                </div>
              </div>

              <div className="cp-stats-row">
                <div className="cp-stat-box">
                  <div className="cp-stat-label">Average CTC</div>
                  <div className="cp-stat-value highlight">₹45.0 LPA</div>
                </div>
                <div className="cp-stat-box">
                  <div className="cp-stat-label">Total Questions</div>
                  <div className="cp-stat-value">124</div>
                </div>
              </div>

              <div className="cp-section">
                <div className="cp-section-title">Question Difficulty</div>
                <div className="difficulty-bar">
                  <div className="diff-easy"></div>
                  <div className="diff-med"></div>
                  <div className="diff-hard"></div>
                </div>
                <div className="difficulty-labels">
                  <span>Easy 20%</span>
                  <span>Medium 55%</span>
                  <span>Hard 25%</span>
                </div>
              </div>

              <div className="cp-section" style={{ marginTop: '1.5rem' }}>
                <div className="cp-section-title">Frequently Asked Topics</div>
                <div className="topics-list">
                  <span className="topic-tag">Dynamic Programming</span>
                  <span className="topic-tag">Graphs</span>
                  <span className="topic-tag">Sliding Window</span>
                  <span className="topic-tag">Trees</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Right */}
          <motion.div 
            className="showcase-content"
            initial={{ opacity: 0, x: 50 }}
            animate={inView2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="showcase-tag">Company Insights</div>
            <h2 className="showcase-heading">Know your target company inside out</h2>
            <p className="showcase-desc">
              Don't blindly grind blind 75. Use our data-driven insights to know exactly what a company asks, the expected difficulty curve, and historical CTC data for your campus.
            </p>
            <a href="#" className="btn-showcase btn-showcase-pink">
              Explore Companies <HiArrowRight />
            </a>
          </motion.div>
        </div>

      {/* ===== BLOCK 3: DSA Sheets (Image 6 aesthetic) ===== */}
      <div className="showcase-block" ref={ref3}>
        <motion.div 
          className="showcase-content"
          initial={{ opacity: 0, x: -50 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="showcase-tag">&gt; STRUCTURED PRACTICE</span>
          <h2 className="showcase-heading">DSA sheets that<br/>actually<br/><span className="gradient-text">build momentum</span></h2>
          <p className="showcase-description">
            Stop random-walking through problems. Follow a sequenced path designed around the patterns that show up in real assessments — and watch your speed compound.
          </p>
          <ul className="showcase-list" style={{ listStyle: 'none', padding: 0, marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><span style={{ color: '#2ea043' }}>✓</span> Difficulty-graded from warm-up to interview-hard</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><span style={{ color: '#2ea043' }}>✓</span> Every problem mapped to the companies that ask it</li>
            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}><span style={{ color: '#2ea043' }}>✓</span> One-click resume — pick up exactly where you left off</li>
          </ul>
          <button className="btn-showcase" style={{ background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))', color: '#fff', marginTop: '2rem' }}>
            Browse all sheets <HiArrowRight />
          </button>
        </motion.div>

        <motion.div 
          className="showcase-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={inView3 ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="dsa-sheets-stack" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}>
            
            {/* Sheet 1 */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)', padding: '0.5rem', borderRadius: '8px' }}>&lt;/&gt;</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>OA Essentials 75</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Beginner → Intermediate</span>
                  </div>
                </div>
                <div style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>75</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>🔥 48 solved</span>
                <span style={{ color: 'var(--accent-cyan)' }}>64%</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '64%', background: 'var(--accent-cyan)', boxShadow: '0 0 10px var(--accent-cyan)' }}></div>
              </div>
            </div>

            {/* Sheet 2 */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-subtle)', borderRadius: '16px', padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-purple)', padding: '0.5rem', borderRadius: '8px' }}>&lt;/&gt;</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>FAANG Pattern Sheet</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Intermediate → Hard</span>
                  </div>
                </div>
                <div style={{ color: 'var(--accent-purple)', fontWeight: 700 }}>150</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--text-secondary)' }}>🔥 61 solved</span>
                <span style={{ color: 'var(--accent-purple)' }}>41%</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: '41%', background: 'var(--accent-purple)', boxShadow: '0 0 10px var(--accent-purple)' }}></div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* ===== BLOCK 4: The Path (Image 7 aesthetic) ===== */}
      <motion.div 
        ref={ref4}
        initial={{ opacity: 0, y: 30 }}
        animate={inView4 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginTop: '6rem', textAlign: 'center' }}
      >
        <span className="showcase-tag" style={{ justifyContent: 'center' }}>&gt; THE PATH</span>
        <h2 className="showcase-heading" style={{ fontSize: '3rem', margin: '1rem 0' }}>
          From "what even is an OA?"<br/>to <span className="gradient-text">offer in hand</span>
        </h2>
        <p className="showcase-description" style={{ margin: '0 auto 4rem', maxWidth: '600px' }}>
          Four steps. One focused loop. Repeat until the assessment feels like home turf.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', position: 'relative' }}>
          {/* Horizontal Line behind steps */}
          <div style={{ position: 'absolute', top: '20px', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))', zIndex: 0, opacity: 0.3 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1, background: 'var(--bg-base)', padding: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 800 }}>01</div>
            <h4 style={{ marginBottom: '1rem' }}>Pick your target company</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Search 350+ companies and open a focused prep track with their actual assessment pattern.</p>
          </div>

          <div style={{ position: 'relative', zIndex: 1, background: 'var(--bg-base)', padding: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 800 }}>02</div>
            <h4 style={{ marginBottom: '1rem' }}>Practice the real questions</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Solve verified OA problems in a timed, exam-like editor with hidden test cases.</p>
          </div>

          <div style={{ position: 'relative', zIndex: 1, background: 'var(--bg-base)', padding: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 800 }}>03</div>
            <h4 style={{ marginBottom: '1rem' }}>Learn from experiences</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Read round-by-round interview stories and the exact tips that converted offers.</p>
          </div>

          <div style={{ position: 'relative', zIndex: 1, background: 'var(--bg-base)', padding: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 800 }}>04</div>
            <h4 style={{ marginBottom: '1rem' }}>Walk in confident</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Show up to test day having already seen the pattern — and land the offer.</p>
          </div>
        </div>
      </motion.div>

      </div>
    </section>
  )
}
