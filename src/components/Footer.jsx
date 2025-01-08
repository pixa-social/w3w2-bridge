import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Ghost Network</h3>
          <p>Bridging the gap between Web2 and Web3</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/bridge">Bridge</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/docs">Documentation</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@ghostcoin.network</p>
          <p>Twitter: @ghostmemecoin</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Ghost Network. All rights reserved.</p>
      </div>
    </footer>
  )
}
