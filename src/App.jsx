import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Bridge from './pages/Bridge'
import NetworkSelection from './pages/NetworkSelection'
import Admin from './pages/Admin'
import Dashboard from './pages/Dashboard'
import Files from './pages/Files'
import NetworkStatus from './pages/NetworkStatus'
import Settings from './pages/Settings'
import AdminDashboard from './pages/AdminDashboard'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bridge" element={<Bridge />} />
            <Route path="/login" element={<NetworkSelection />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/files" element={<Files />} />
            <Route path="/network-status" element={<NetworkStatus />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
