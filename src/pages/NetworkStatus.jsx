import './NetworkStatus.css'

export default function NetworkStatus() {
  return (
    <div className="network-status">
      <section className="status-hero">
        <div className="container">
          <h1 className="hero-title">Network Status</h1>
          <p className="hero-subtitle">
            Check the current status of the Ghost Network and connected blockchains.
          </p>
        </div>
      </section>

      <section className="status-content">
        <div className="container">
          <div className="status-grid">
            <div className="status-card">
              <h3>Network Status</h3>
              <p>Status: <span className="status-indicator online">Online</span></p>
              <p>Block Height: 1,234,567</p>
              <p>Transaction Count: 12,345,678</p>
            </div>
            <div className="status-card">
              <h3>Token Prices</h3>
              <div className="token-prices">
                <div className="token-price">
                  <h4>XRP</h4>
                  <p>$0.50</p>
                </div>
                <div className="token-price">
                  <h4>GHOST</h4>
                  <p>$0.0001</p>
                </div>
                <div className="token-price">
                  <h4>DAG</h4>
                  <p>$0.00001</p>
                </div>
              </div>
            </div>
            <div className="status-card">
              <h3>GHOST Token Details</h3>
              <p>Issuer Address: rw57VKMLgWYcgdcu89Bnz1YHne1gE35F1L</p>
              <p>Total Supply: 1,000,000,000 GHOST</p>
              <p>Current Supply: 500,000,000 GHOST</p>
            </div>
            <div className="status-card">
              <h3>Network Statistics</h3>
              <p>Active Nodes: 100</p>
              <p>Network Hashrate: 100 TH/s</p>
              <p>Last Block Time: 1 minute ago</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
