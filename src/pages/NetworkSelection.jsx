import './NetworkSelection.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NetworkSelection() {
  const [xumm, setXumm] = useState(null)
  const [account, setAccount] = useState(null)
  const [isTestingEnv, setIsTestingEnv] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if we're in a testing environment
    if (window.location.host.includes('bolt.diy')) {
      setIsTestingEnv(true)
      return
    }

    // Load XUMM SDK
    const script = document.createElement('script')
    script.src = 'https://xumm.app/assets/cdn/xumm.min.js'
    script.onload = () => {
      const xummInstance = new Xumm('c3343fcb-bc0d-42b8-a678-7478a48db43d')
      setXumm(xummInstance)

      // Setup event listeners
      xummInstance.on('ready', () => {
        console.log('XUMM SDK is ready')
      })

      xummInstance.on('success', async () => {
        const account = await xummInstance.user.account
        setAccount(account)
        localStorage.setItem('xummAccount', account)
        navigate('/dashboard')
      })

      xummInstance.on('logout', () => {
        setAccount(null)
        localStorage.removeItem('xummAccount')
      })
    }
    document.body.appendChild(script)

    return () => {
      if (xumm) {
        xumm.off('ready')
        xumm.off('success')
        xumm.off('logout')
      }
      document.body.removeChild(script)
    }
  }, [])

  const handleXummConnect = () => {
    if (isTestingEnv) {
      // Fallback for testing environment
      const testAccount = 'rTestAccount123456789012345678901234567'
      setAccount(testAccount)
      localStorage.setItem('xummAccount', testAccount)
      navigate('/dashboard')
    } else if (xumm) {
      xumm.authorize()
    }
  }

  const handleLogout = () => {
    if (isTestingEnv) {
      setAccount(null)
      localStorage.removeItem('xummAccount')
    } else if (xumm) {
      xumm.logout()
    }
  }

  return (
    <div className="network-selection">
      <div className="container">
        <div className="selection-content">
          <h1 className="title">Select Your Wallet</h1>
          <p className="subtitle">
            Choose your preferred wallet to connect to Ghost Network
          </p>
          
          {isTestingEnv && (
            <div className="testing-notice">
              <p>Testing environment detected. Using mock XUMM authentication.</p>
            </div>
          )}

          <div className="network-cards">
            <div className="network-card xumm">
              <div className="card-content">
                <div className="network-logo">
                  <img src="/xumm-logo.png" alt="XUMM" />
                </div>
                <p className="network-description">
                  Securely connect using the XUMM Wallet
                </p>
                {account ? (
                  <>
                    <p className="account-address">
                      Connected: {account.slice(0, 6)}...{account.slice(-4)}
                    </p>
                    <button 
                      className="select-button logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button 
                    className="select-button"
                    onClick={handleXummConnect}
                  >
                    Connect with XUMM
                    <span className="arrow">→</span>
                  </button>
                )}
              </div>
            </div>

            <div className="network-card stargazer">
              <div className="card-content">
                <div className="network-logo">
                  <img src="/stargazer-logo.png" alt="Stargazer" />
                </div>
                <p className="network-description">
                  Securely connect using the Stargazer Wallet
                </p>
                <button 
                  className="select-button"
                  onClick={() => navigate('/dashboard')}
                >
                  Connect with Stargazer
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
