import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineTerminal, HiArrowRight, HiOutlineClock } from 'react-icons/hi'
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'
import './LiveAssessment.css'

const QUESTIONS = [
  {
    text: "What is the worst-case time complexity of finding an element in a Binary Search Tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 2 // O(n) because BST can be skewed
  },
  {
    text: "Which data structure is most appropriate for implementing a LRU Cache?",
    options: ["Array + Hash Map", "Doubly Linked List + Hash Map", "Min Heap", "Binary Search Tree"],
    correct: 1
  },
  {
    text: "In Python, which of the following modifies the list in-place?",
    options: ["sorted(my_list)", "my_list[::-1]", "my_list.sort()", "list(reversed(my_list))"],
    correct: 2
  }
]

export default function LiveAssessment() {
  const [gameState, setGameState] = useState('intro') // intro, playing, result
  const [timeLeft, setTimeLeft] = useState(60)
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)

  useEffect(() => {
    let timer
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000)
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('result')
    }
    return () => clearInterval(timer)
  }, [gameState, timeLeft])

  const startGame = () => {
    setGameState('playing')
    setTimeLeft(60)
    setCurrentQ(0)
    setScore(0)
    setSelectedOption(null)
  }

  const handleOptionClick = (idx) => {
    if (selectedOption !== null) return // prevent multiple clicks

    setSelectedOption(idx)
    
    if (idx === QUESTIONS[currentQ].correct) {
      setScore(prev => prev + 1)
    }

    // Wait 1.5s then move to next
    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(prev => prev + 1)
        setSelectedOption(null)
      } else {
        setGameState('result')
      }
    }, 1500)
  }

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <section className="live-assessment-section" id="assessment">
      <div className="la-header">
        <span className="la-tag">&gt; TRY IT RIGHT NOW</span>
        <h2 className="la-title">
          Feel a real OA in <span className="gradient-text">60 seconds</span>
        </h2>
        <p className="la-subtitle">
          No sign-up, no setup. Solve three actual assessment-style questions against the clock — exactly like test day. This is a tiny taste of 4,200+ inside.
        </p>
      </div>

      <div className="la-window">
        {/* Header Bar */}
        <div className="la-window-header">
          <div className="la-mac-dots">
            <span className="la-dot close"></span>
            <span className="la-dot min"></span>
            <span className="la-dot max"></span>
          </div>
          <div className="la-window-title">&gt; oa-helper · live assessment</div>
          <div className={`la-timer-badge ${timeLeft <= 10 ? 'danger' : ''}`}>
            <HiOutlineClock />
            {gameState === 'playing' ? formatTime(timeLeft) : '1:00'}
          </div>
        </div>

        {/* Dynamic Body */}
        <div className="la-body">
          <AnimatePresence mode="wait">
            
            {/* INTRO STATE */}
            {gameState === 'intro' && (
              <motion.div 
                key="intro"
                className="la-intro"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <div className="la-terminal-icon">
                  <HiOutlineTerminal />
                </div>
                <h3>3 questions - 1 minute - timed</h3>
                <p>You'll see real OA-style questions from Amazon, Google and Microsoft. Pick an answer before the timer runs out.</p>
                <button className="la-start-btn" onClick={startGame}>
                  Start the challenge <HiArrowRight />
                </button>
              </motion.div>
            )}

            {/* PLAYING STATE */}
            {gameState === 'playing' && (
              <motion.div 
                key="playing"
                className="la-playing"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <span className="la-question-num">Question {currentQ + 1} of 3</span>
                <p className="la-question-text">{QUESTIONS[currentQ].text}</p>
                
                <div className="la-options">
                  {QUESTIONS[currentQ].options.map((opt, idx) => {
                    const isSelected = selectedOption === idx
                    const isCorrect = idx === QUESTIONS[currentQ].correct
                    const showStatus = selectedOption !== null

                    let btnClass = "la-option-btn "
                    let Icon = null
                    
                    if (showStatus) {
                      if (isCorrect) {
                        btnClass += "correct"
                        Icon = FiCheckCircle
                      } else if (isSelected && !isCorrect) {
                        btnClass += "wrong"
                        Icon = FiXCircle
                      }
                    }

                    return (
                      <button 
                        key={idx} 
                        className={btnClass}
                        onClick={() => handleOptionClick(idx)}
                        disabled={selectedOption !== null}
                      >
                        {opt}
                        {Icon && <Icon size={20} />}
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {/* RESULT STATE */}
            {gameState === 'result' && (
              <motion.div 
                key="result"
                className="la-result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="la-score-circle">
                  {score}/3
                </div>
                <h3>{score === 3 ? "Perfect!" : "Good effort!"}</h3>
                <p>
                  {score === 3 
                    ? "You're ready to tackle the real patterns." 
                    : "Review the concepts and try again. Practice makes perfect."}
                </p>
                <button className="la-start-btn" style={{ marginTop: '1rem' }} onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                  Unlock all 4,200+ questions <HiArrowRight />
                </button>
                <button 
                  className="la-start-btn" 
                  style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', marginTop: '0.5rem' }} 
                  onClick={startGame}
                >
                  Retry Challenge
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
