import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus, HiMinus } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'
import './FAQ.css'

const faqs = [
  {
    question: "What is OAHelper?",
    answer: "OAHelper is India's largest platform for practicing real Online Assessment questions asked by 400+ companies during campus placements."
  },
  {
    question: "Is it really free?",
    answer: "Yes! You can access interview experiences, some free questions, and placement info without even creating an account. Premium unlocks everything."
  },
  {
    question: "How are questions sourced?",
    answer: "Questions are contributed by students who recently took OAs, with screenshots and verification. We update every hiring season."
  },
  {
    question: "What's included in Premium?",
    answer: "Full solutions, real OA screenshots, unlimited company access, AI helper, assessment mode, and priority support — all for ₹99/month."
  },
  {
    question: "Can I contribute questions?",
    answer: "Absolutely! Upload screenshots or write out questions to earn OA coins. Your identity stays anonymous and PII is auto-blurred."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq">
      <div className="container" ref={ref}>
        <div className="faq-container">
          
          <motion.div 
            className="faq-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="faq-heading">Frequently asked questions</h2>
          </motion.div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  {faq.question}
                  <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>
                    {openIndex === index ? <HiMinus /> : <HiPlus />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
