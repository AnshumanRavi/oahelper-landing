import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Companies.css'

/* ── Company logo data ── */
const companies = [
  {
    name: 'Nvidia',
    className: 'logo-nvidia',
    render: () => (
      <>
        <span className="company-logo-icon">◆</span>
        nvidia
      </>
    ),
  },
  {
    name: 'Visa',
    className: 'logo-visa',
    render: () => 'VISA',
  },
  {
    name: 'Stripe',
    className: 'logo-stripe',
    render: () => 'stripe',
  },
  {
    name: 'Adobe',
    className: 'logo-adobe',
    render: () => (
      <>
        <span className="company-logo-icon">▲</span>
        Adobe
      </>
    ),
  },
  {
    name: 'Databricks',
    className: 'logo-databricks',
    render: () => (
      <>
        <span className="company-logo-icon" style={{ color: '#ff3621', opacity: 0.4 }}>◆</span>
        databricks
      </>
    ),
  },
  {
    name: 'Atlassian',
    className: 'logo-atlassian',
    render: () => 'Atlassian',
  },
  {
    name: 'Uber',
    className: 'logo-uber',
    render: () => 'Uber',
  },
  {
    name: 'Flipkart',
    className: 'logo-flipkart',
    render: () => (
      <>
        Flipkart
        <span className="company-logo-icon">✦</span>
      </>
    ),
  },
  {
    name: 'Google',
    className: 'logo-google',
    render: () => 'Google',
  },
  {
    name: 'Microsoft',
    className: 'logo-microsoft',
    render: () => (
      <>
        <span className="company-logo-icon">
          <span className="ms-square" style={{ background: '#f25022' }} />
          <span className="ms-square" style={{ background: '#7fba00' }} />
          <span className="ms-square" style={{ background: '#00a4ef' }} />
          <span className="ms-square" style={{ background: '#ffb900' }} />
        </span>
        Microsoft
      </>
    ),
  },
  {
    name: 'Amazon',
    className: 'logo-amazon',
    render: () => 'amazon',
  },
  {
    name: 'Goldman Sachs',
    className: 'logo-goldman',
    render: () => 'Goldman Sachs',
  },
]

/* ── Logo Set (rendered twice for seamless loop) ── */
function LogoSet() {
  return (
    <div className="companies-logo-set">
      {companies.map((company) => (
        <div key={company.name} className={`company-logo ${company.className}`}>
          <span className="company-logo-text">{company.render()}</span>
        </div>
      ))}
    </div>
  )
}

export default function Companies() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section className="companies" ref={ref}>
      <motion.div
        className="companies-inner"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Title */}
        <div className="companies-title">
          OUR STUDENTS HAVE BEEN PLACED AT
        </div>

        {/* Marquee */}
        <div className="companies-marquee-wrapper">
          <div className="companies-marquee">
            <LogoSet />
            <LogoSet />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
