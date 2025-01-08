import './AdminDashboard.css'
import { useState } from 'react'

export default function AdminDashboard() {
  const [walletConfig, setWalletConfig] = useState({
    defaultNetwork: 'ghostcoin',
    autoBackup: false
  })

  const [storageOptions, setStorageOptions] = useState({
    ghostcoin: true,
    filecoin: true,
    ipfs: true,
    pinata: true,
    googleDrive: true
  })

  const [userRoles, setUserRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['manage_users', 'manage_storage', 'manage_api'] },
    { id: 2, name: 'User', permissions: ['upload_files', 'manage_files'] }
  ])

  const [apiSettings, setApiSettings] = useState({
    wordpressUrl: '',
    wordpressApiKey: ''
  })

  const [apiKeys, setApiKeys] = useState([])

  const handleWalletConfigChange = (e, key) => {
    setWalletConfig({ ...walletConfig, [key]: e.target.value })
  }

  const handleStorageOptionChange = (e, key) => {
    setStorageOptions({ ...storageOptions, [key]: e.target.checked })
  }

  const handleUserRoleChange = (e, roleId, permission) => {
    setUserRoles(userRoles.map(role => 
      role.id === roleId 
        ? { ...role, permissions: e.target.checked 
            ? [...role.permissions, permission] 
            : role.permissions.filter(p => p !== permission) 
          } 
        : role
    ))
  }

  const handleApiSettingsChange = (e, key) => {
    setApiSettings({ ...apiSettings, [key]: e.target.value })
  }

  const generateApiKey = () => {
    const newKey = {
      id: Date.now(),
      key: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      createdAt: new Date().toISOString()
    }
    setApiKeys([...apiKeys, newKey])
  }

  const deleteApiKey = (id) => {
    setApiKeys(apiKeys.filter(key => key.id !== id))
  }

  return (
    <div className="admin-dashboard">
      <section className="admin-hero">
        <div className="container">
          <h1 className="hero-title">Admin Dashboard</h1>
          <p className="hero-subtitle">
            Manage wallet configurations, storage options, user roles, and API settings.
          </p>
        </div>
      </section>

      <section className="admin-content">
        <div className="container">
          <div className="admin-grid">
            <div className="admin-card">
              <h3>Wallet Configuration</h3>
              <div className="wallet-config">
                <div className="config-item">
                  <label htmlFor="default-network">Default Network</label>
                  <select 
                    id="default-network"
                    value={walletConfig.defaultNetwork}
                    onChange={(e) => handleWalletConfigChange(e, 'defaultNetwork')}
                  >
                    <option value="ghostcoin">Ghostcoin Network</option>
                    <option value="filecoin">Filecoin</option>
                    <option value="ipfs">IPFS</option>
                    <option value="pinata">Pinata</option>
                    <option value="google-drive">Google Drive</option>
                  </select>
                </div>
                <div className="config-item">
                  <label htmlFor="auto-backup">Auto Backup</label>
                  <input 
                    id="auto-backup" 
                    type="checkbox" 
                    checked={walletConfig.autoBackup}
                    onChange={(e) => handleWalletConfigChange(e, 'autoBackup')}
                  />
                </div>
              </div>
              <button className="button button-primary">Save Configuration</button>
            </div>

            <div className="admin-card">
              <h3>Storage Options</h3>
              <div className="storage-options">
                {Object.entries(storageOptions).map(([key, value]) => (
                  <div key={key} className="storage-option">
                    <label htmlFor={`${key}-storage`}>
                      <input 
                        id={`${key}-storage`} 
                        type="checkbox" 
                        checked={value}
                        onChange={(e) => handleStorageOptionChange(e, key)}
                      />
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
              <button className="button button-primary">Save Storage Options</button>
            </div>

            <div className="admin-card">
              <h3>User Roles and Permissions</h3>
              <div className="user-roles">
                {userRoles.map(role => (
                  <div key={role.id} className="role-item">
                    <h4>{role.name}</h4>
                    <div className="permissions">
                      {['manage_users', 'manage_storage', 'manage_api', 'upload_files', 'manage_files'].map(permission => (
                        <div key={permission} className="permission-item">
                          <label htmlFor={`${role.id}-${permission}`}>
                            <input 
                              id={`${role.id}-${permission}`} 
                              type="checkbox" 
                              checked={role.permissions.includes(permission)}
                              onChange={(e) => handleUserRoleChange(e, role.id, permission)}
                            />
                            {permission.replace('_', ' ')}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button className="button button-primary">Save User Roles</button>
            </div>

            <div className="admin-card">
              <h3>API Settings</h3>
              <div className="api-settings">
                <div className="api-setting">
                  <label htmlFor="wordpress-url">WordPress URL</label>
                  <input 
                    id="wordpress-url"
                    type="text"
                    value={apiSettings.wordpressUrl}
                    onChange={(e) => handleApiSettingsChange(e, 'wordpressUrl')}
                    placeholder="Enter WordPress URL"
                  />
                </div>
                <div className="api-setting">
                  <label htmlFor="wordpress-api-key">WordPress API Key</label>
                  <input 
                    id="wordpress-api-key"
                    type="text"
                    value={apiSettings.wordpressApiKey}
                    onChange={(e) => handleApiSettingsChange(e, 'wordpressApiKey')}
                    placeholder="Enter WordPress API Key"
                  />
                </div>
              </div>
              <button className="button button-primary">Save API Settings</button>
            </div>

            <div className="admin-card">
              <h3>API Key Management</h3>
              <div className="api-key-management">
                <button className="button button-primary" onClick={generateApiKey}>Generate API Key</button>
                <div className="api-keys-list">
                  {apiKeys.map(key => (
                    <div key={key.id} className="api-key-item">
                      <p>{key.key}</p>
                      <p>Created: {key.createdAt}</p>
                      <button className="button button-secondary" onClick={() => deleteApiKey(key.id)}>Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
