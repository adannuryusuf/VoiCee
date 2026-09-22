import './footer.css'

const ASSET = '/assets'

export default function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <button className="footer-logo" onClick={() => navigate && navigate('home')}>
            <div className="footer-logo-badge">
              <img src={`${ASSET}/a2564.svg`} alt="VoiCee" width={16} height={16} />
            </div>
            <span className="footer-logo-text">VoiCee</span>
          </button>
          <p className="footer-tagline">Empowering Kenyan citizens to be heard.</p>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Platform</p>
          <div className="footer-links">
            <button onClick={() => navigate && navigate('submit')}>Submit Complaint</button>
            <button onClick={() => navigate && navigate('community')}>Community Dashboard</button>
            <button onClick={() => navigate && navigate('home')}>How it Works</button>
            <button onClick={() => navigate && navigate('about')}>About</button>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Partners</p>
          <div className="footer-links">
            <span>County Governments</span>
            <span>National Ministries</span>
            <span>Ombudsman Office</span>
            <span>Public Oversight Portal</span>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Legal</p>
          <div className="footer-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Citizen Data Charter</span>
            <span>Kenya Constitution Art. 37</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 VoiCee. Empowering Kenyan citizens to be heard.</p>
        <p>Harambee. Huduma Bora ni Haki Yako.</p>
      </div>
    </footer>
  )
}
