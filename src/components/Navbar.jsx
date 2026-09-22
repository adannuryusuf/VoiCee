import './navbar.css'

const ASSET = '/assets'

export default function Navbar({ currentPage, navigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'submit', label: 'Submit Complaint' },
    { id: 'community', label: 'Community Analysis' },
    { id: 'about', label: 'About' },
  ]

  const activeId = ['analysis', 'confirmation'].includes(currentPage) ? 'submit' : currentPage

  return (
    <nav className="navbar">
      <button className="navbar-logo" onClick={() => navigate('home')}>
        <div className="navbar-logo-badge">
          <img src={`${ASSET}/2516a.svg`} alt="VoiCee" width={20} height={20} />
        </div>
        <span className="navbar-logo-text">VoiCee</span>
      </button>

      <div className="navbar-links">
        {links.map(link => (
          <button
            key={link.id}
            className={`navbar-link ${activeId === link.id ? 'active' : ''}`}
            onClick={() => navigate(link.id)}
          >
            {link.label}
            {activeId === link.id && <span className="navbar-indicator" />}
          </button>
        ))}
      </div>
    </nav>
  )
}
