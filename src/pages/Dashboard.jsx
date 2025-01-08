import './Dashboard.css'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <section className="dashboard-hero">
        <div className="container">
          <h1 className="hero-title">Welcome to Your Dashboard</h1>
          <p className="hero-subtitle">
            Manage your decentralized storage and explore the Ghost Network ecosystem.
          </p>
        </div>
      </section>

      <section className="dashboard-content">
        <div className="container">
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Your Files</h3>
              <p>View, upload, and manage your files stored on the Ghost Network.</p>
              <Link to="/files" className="button button-primary">Go to Files</Link>
            </div>
            <div className="dashboard-card">
              <h3>Network Status</h3>
              <p>Check the current status of the Ghost Network and connected blockchains.</p>
              <Link to="/network-status" className="button button-primary">View Status</Link>
            </div>
            <div className="dashboard-card">
              <h3>Settings</h3>
              <p>Configure your wallet, manage API keys, and customize your experience.</p>
              <Link to="/settings" className="button button-primary">Settings</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
