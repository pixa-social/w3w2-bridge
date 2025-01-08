import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              The Future of <span className="gradient-text">Decentralized</span> Connectivity
            </h1>
            <p className="hero-subtitle">
              Seamlessly bridge Web2 and Web3 ecosystems with Ghost Network
            </p>
            <div className="hero-actions">
              <Link to="/bridge" className="button button-primary">Get Started</Link>
              <Link to="/login" className="button button-secondary">
                <span className="button-text">Login</span>
                <span className="button-icon">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Ghost Network?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Unmatched Security</h3>
              <p>Military-grade encryption and decentralized storage ensure your data remains safe and private</p>
            </div>
            <div className="feature-card">
              <h3>Cross-Chain Interoperability</h3>
              <p>Connect and transact across multiple blockchain networks with ease</p>
            </div>
            <div className="feature-card">
              <h3>Hybrid Storage Solutions</h3>
              <p>Choose between decentralized and traditional storage options based on your needs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
