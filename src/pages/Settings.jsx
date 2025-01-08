import './Settings.css'
import { useState } from 'react'

export default function Settings() {
  const [apiKeys, setApiKeys] = useState({
    ipfs: '',
    pinata: '',
    filecoin: '',
    googleDrive: ''
  })

  const handleApiKeyChange = (e, key) => {
    setApiKeys({ ...apiKeys, [key]: e.target.value })
  }

  return (
    <div className="settings-page">
      <section className="settings-hero">
        <div className="container">
          <h1 className="hero-title">Settings</h1>
          <p className="hero-subtitle">
            Configure your storage settings and manage API keys.
          </p>
        </div>
      </section>

      <section className="settings-content">
        <div className="container">
          <div className="settings-grid">
            <div className="settings-card">
              <h3>API Key Management</h3>
              <p className="api-instructions">
                To obtain API keys, follow these steps:
                <ul>
                  <li>IPFS: Visit <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer">IPFS</a> and create an account to get your API key.</li>
                  <li>Pinata: Go to <a href="https://www.pinata.cloud/" target="_blank" rel="noopener noreferrer">Pinata</a>, sign up, and generate your API key.</li>
                  <li>Filecoin: Visit <a href="https://filecoin.io/" target="_blank" rel="noopener noreferrer">Filecoin</a> and follow their instructions to obtain an API key.</li>
                  <li>Google Drive: Use your Google account to access the <a href="https://developers.google.com/drive/api/v3/about-sdk" target="_blank" rel="noopener noreferrer">Google Drive API</a> and generate an API key.</li>
                </ul>
              </p>
              <div className="api-keys">
                <div className="api-key">
                  <label htmlFor="ipfs-api-key">IPFS API Key</label>
                  <input
                    id="ipfs-api-key"
                    type="text"
                    value={apiKeys.ipfs}
                    onChange={(e) => handleApiKeyChange(e, 'ipfs')}
                    placeholder="Enter IPFS API Key"
                  />
                </div>
                <div className="api-key">
                  <label htmlFor="pinata-api-key">Pinata API Key</label>
                  <input
                    id="pinata-api-key"
                    type="text"
                    value={apiKeys.pinata}
                    onChange={(e) => handleApiKeyChange(e, 'pinata')}
                    placeholder="Enter Pinata API Key"
                  />
                </div>
                <div className="api-key">
                  <label htmlFor="filecoin-api-key">Filecoin API Key</label>
                  <input
                    id="filecoin-api-key"
                    type="text"
                    value={apiKeys.filecoin}
                    onChange={(e) => handleApiKeyChange(e, 'filecoin')}
                    placeholder="Enter Filecoin API Key"
                  />
                </div>
                <div className="api-key">
                  <label htmlFor="google-drive-api-key">Google Drive API Key</label>
                  <input
                    id="google-drive-api-key"
                    type="text"
                    value={apiKeys.googleDrive}
                    onChange={(e) => handleApiKeyChange(e, 'googleDrive')}
                    placeholder="Enter Google Drive API Key"
                  />
                </div>
              </div>
              <button className="button button-primary">Save API Keys</button>
            </div>

            <div className="settings-card">
              <h3>Account Management</h3>
              <div className="account-management">
                <button className="button button-secondary">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
