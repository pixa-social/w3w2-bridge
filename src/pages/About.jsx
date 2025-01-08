import './About.css'
import { FaLock, FaGlobe, FaCoins, FaNetworkWired, FaShieldAlt, FaRocket, FaUserShield, FaExpandArrowsAlt } from 'react-icons/fa'

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <h1 className="hero-title">About Ghost Network</h1>
          <p className="hero-subtitle">
            Discover the power of decentralized, secure, and private storage with Ghost Network.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <h2>What is Ghost Network?</h2>
              <p>
                Ghost Network is a decentralized storage solution that leverages the power of IPFS (InterPlanetary File System) and other blockchain technologies to provide secure, private, and resilient file storage. It aims to bridge the gap between Web2 and Web3 ecosystems, offering users the benefits of both worlds.
              </p>
            </div>

            <div className="about-card">
              <h2>Benefits of Decentralized P2P IPFS Storage</h2>
              <ul>
                <li>
                  <h3><FaLock /> Security and Privacy</h3>
                  <p>
                    Files are encrypted before storage, ensuring that only the owner can access them. IPFS's distributed nature means there's no single point of failure, reducing the risk of data breaches.
                  </p>
                </li>
                <li>
                  <h3><FaGlobe /> Redundancy and Availability</h3>
                  <p>
                    Files are stored across multiple nodes, providing redundancy and ensuring high availability. If one node goes down, your data remains accessible from other nodes.
                  </p>
                </li>
                <li>
                  <h3><FaCoins /> Cost-Effective</h3>
                  <p>
                    Decentralized storage can be more cost-effective than traditional cloud storage, especially for long-term storage, as it leverages unused storage capacity across the network.
                  </p>
                </li>
                <li>
                  <h3><FaNetworkWired /> Interoperability</h3>
                  <p>
                    Ghost Network supports multiple blockchain networks, allowing for seamless file management across different ecosystems.
                  </p>
                </li>
                <li>
                  <h3><FaShieldAlt /> Immutable Data</h3>
                  <p>
                    Once data is stored on IPFS, it cannot be altered or deleted, ensuring data integrity and providing a verifiable history of changes.
                  </p>
                </li>
              </ul>
            </div>

            <div className="about-card">
              <h2>Decentralized Networks: The Future of Storage</h2>
              <p>
                Decentralized networks are poised to revolutionize data storage and management:
              </p>
              <ul>
                <li>
                  <h3><FaRocket /> Resilience</h3>
                  <p>
                    With no single point of failure, decentralized networks are inherently more resilient to attacks, outages, or censorship.
                  </p>
                </li>
                <li>
                  <h3><FaUserShield /> User Empowerment</h3>
                  <p>
                    Users have full control over their data, reducing reliance on centralized entities and enhancing privacy.
                  </p>
                </li>
                <li>
                  <h3><FaExpandArrowsAlt /> Scalability</h3>
                  <p>
                    Decentralized systems can scale more efficiently as they leverage the collective resources of the network.
                  </p>
                </li>
                <li>
                  <h3><FaLock /> Quantum-Grade Encryption</h3>
                  <p>
                    Ghost Network employs quantum-grade encryption, ensuring that even with the advent of quantum computing, your data remains secure. This level of encryption uses post-quantum cryptographic algorithms to protect against future threats.
                  </p>
                </li>
              </ul>
            </div>

            <div className="about-card">
              <h2>How Ghost Network Works</h2>
              <p>
                Ghost Network integrates with various decentralized storage solutions like IPFS, Filecoin, and Pinata, providing users with options to store their files securely. Here's how it works:
              </p>
              <ol>
                <li>Connect your wallet to access the Ghost Network.</li>
                <li>Upload your files to the decentralized storage network.</li>
                <li>Manage and organize your files through our intuitive interface.</li>
                <li>Retrieve your files from any device, anytime, anywhere.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
