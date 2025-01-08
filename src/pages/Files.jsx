import './Files.css'

export default function Files() {
  return (
    <div className="files-page">
      <section className="files-hero">
        <div className="container">
          <h1 className="hero-title">Your Files</h1>
          <p className="hero-subtitle">
            Upload, manage, and store your files across multiple networks.
          </p>
        </div>
      </section>

      <section className="files-content">
        <div className="container">
          <div className="file-upload">
            <h2>Upload a File</h2>
            <div className="upload-area">
              <label htmlFor="file-upload" className="upload-label">
                <div className="upload-icon">📁</div>
                <p>Drag and drop files here or click to select</p>
              </label>
              <input id="file-upload" type="file" className="file-input" />
            </div>
          </div>

          <div className="file-management">
            <h2>Your Files</h2>
            <div className="file-grid">
              {/* Placeholder for file items */}
              <div className="file-item">
                <div className="file-icon">📄</div>
                <div className="file-details">
                  <h3>example.pdf</h3>
                  <p>1.2 MB</p>
                </div>
                <div className="file-actions">
                  <button className="button button-secondary">Download</button>
                  <button className="button button-secondary">Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className="storage-options">
            <h2>Select Storage Network</h2>
            <div className="network-grid">
              <div className="network-card">
                <div className="network-icon">👻</div>
                <h3>Ghostcoin Network</h3>
                <p>Decentralized, secure, and private storage</p>
                <button className="button button-primary">Select</button>
              </div>
              <div className="network-card">
                <div className="network-icon">🪙</div>
                <h3>Filecoin</h3>
                <p>Distributed storage with economic incentives</p>
                <button className="button button-primary">Select</button>
              </div>
              <div className="network-card">
                <div className="network-icon">🦒</div>
                <h3>Pinata</h3>
                <p>IPFS pinning service for long-term storage</p>
                <button className="button button-primary">Select</button>
              </div>
              <div className="network-card">
                <div className="network-icon">📁</div>
                <h3>Google Drive</h3>
                <p>Web2 storage for hybrid functionality</p>
                <button className="button button-primary">Select</button>
              </div>
            </div>
          </div>

          <div className="storage-info">
            <h2>Storage Limits and Tiers</h2>
            <div className="tiers-grid">
              <div className="tier-card">
                <h3>Free Tier</h3>
                <p>1 GB Storage</p>
                <p>100 Uploads per Month</p>
                <p>Basic Support</p>
                <p><strong>Free</strong></p>
              </div>
              <div className="tier-card">
                <h3>Pro Tier</h3>
                <p>50 GB Storage</p>
                <p>Unlimited Uploads</p>
                <p>Priority Support</p>
                <p>Advanced Features</p>
                <p><strong>$9.99/month</strong></p>
              </div>
              <div className="tier-card">
                <h3>Enterprise</h3>
                <p>Custom Storage</p>
                <p>Unlimited Uploads</p>
                <p>24/7 Dedicated Support</p>
                <p>Custom Solutions</p>
                <p><strong>Contact Us</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
