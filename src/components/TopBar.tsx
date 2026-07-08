import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL
const RESUME_URL = `${BASE}files/JustinChenResumeF.pdf`

const navLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
  color: isActive ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.75)',
  textDecoration: 'none',
  fontSize: 18,
  letterSpacing: '0.03em',
  fontWeight: isActive ? 500 : 400,
})

const externalLinkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.75)',
  textDecoration: 'none',
  fontSize: 18,
  letterSpacing: '0.03em',
}

export default function TopBar() {
  const [galleryOpen, setGalleryOpen] = useState(false)

  return (
    <nav style={barStyle}>
      <NavLink to="/" style={navLinkStyle} end>
        Profile
      </NavLink>
      <NavLink to="/projects" style={navLinkStyle}>
        Projects
      </NavLink>
      <div
        style={{ position: 'relative' }}
        onMouseEnter={() => setGalleryOpen(true)}
        onMouseLeave={() => setGalleryOpen(false)}
      >
        <span style={galleryLabelStyle}>Gallery</span>
        {galleryOpen && (
          <div style={dropdownStyle}>
            <NavLink
              to="/gallery/digital"
              style={navLinkStyle}
              onClick={() => setGalleryOpen(false)}
            >
              Digital
            </NavLink>
            <NavLink
              to="/gallery/whiteboard"
              style={navLinkStyle}
              onClick={() => setGalleryOpen(false)}
            >
              Whiteboard
            </NavLink>
          </div>
        )}
      </div>
      <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={externalLinkStyle}>
        Resume
      </a>
    </nav>
  )
}

const barStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 56,
  padding: '14px 28px',
  background: 'transparent',
  fontFamily: 'system-ui, sans-serif',
  flexShrink: 0,
  zIndex: 200,
}

const galleryLabelStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.75)',
  fontSize: 18,
  letterSpacing: '0.03em',
  cursor: 'default',
}

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: '12px 16px',
  background: 'transparent',
  minWidth: 120,
}
