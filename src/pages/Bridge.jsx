import './Bridge.css'

export default function Bridge() {
  return (
    <div className="bridge">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              The <span className="gradient-text">Ghost Network Bridge</span>
            </h1>
            <p className="hero-subtitle">
              Securely store and manage your files across decentralized networks
            </p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Decentralized Storage</h3>
              <p>
                Store your files across multiple decentralized networks for maximum
                security and availability.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>End-to-End Encryption</h3>
              <p>
                Your files are encrypted before storage, ensuring complete privacy
                and security.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Access</h3>
              <p>
                Retrieve your files quickly with our optimized decentralized
                storage network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Connect Your Wallet</h3>
              <p>
                Securely connect your preferred wallet to access the Ghost Network.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Upload Your Files</h3>
              <p>
                Select and upload your files to the decentralized storage network.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Manage Storage</h3>
              <p>
                Easily manage and organize your stored files through our intuitive
                interface.
              </p>
            </div>
            <div className="step-card">
              <div className="step-number">4</div>
              <h3>Access Anywhere</h3>
              <p>
                Retrieve your files from any device, anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Why Use Ghost Network for File Storage?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Data Ownership</h3>
              <p>
                Maintain complete control over your files with true data ownership.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Cost-Effective</h3>
              <p>
                Affordable storage solutions compared to traditional cloud services.
              </p>
            </div>
            <div className="benefit-card">
              <h3>Redundant Storage</h3>
              <p>
                Your files are stored across multiple nodes for maximum reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
