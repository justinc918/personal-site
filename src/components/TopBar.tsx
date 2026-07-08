import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const BASE = import.meta.env.BASE_URL
const RESUME_URL = `${BASE}files/JustinChenResumeF.pdf`

const navLinkStyle = ({ isActive }: { isActive: boolean }): React.CSSProperties => ({
  color: isActive ? '#c4d3ff' : 'rgba(196,211,255,0.75)',
  textDecoration: 'none',
  fontSize: 18,
  letterSpacing: '0.03em',
  fontWeight: isActive ? 500 : 400,
})

const externalLinkStyle: React.CSSProperties = {
  color: 'rgba(196,211,255,0.75)',
  textDecoration: 'none',
  fontSize: 18,
  letterSpacing: '0.03em',
}

export default function TopBar() {
  const [artworkOpen, setArtworkOpen] = useState(false)

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
        onMouseEnter={() => setArtworkOpen(true)}
        onMouseLeave={() => setArtworkOpen(false)}
      >
        <span style={artworkLabelStyle}>
          Artwork
          <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" style={artworkArrowStyle}>
            <path
              d="M1 1 L5 5 L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {artworkOpen && (
          <div style={dropdownStyle}>
            <NavLink
              to="/artwork/digital"
              style={navLinkStyle}
              onClick={() => setArtworkOpen(false)}
            >
              Digital
            </NavLink>
            <NavLink
              to="/artwork/whiteboard"
              style={navLinkStyle}
              onClick={() => setArtworkOpen(false)}
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
  flexShrink: 0,
  zIndex: 200,
  textTransform: 'uppercase',
}

const artworkLabelStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  color: 'rgba(196,211,255,0.75)',
  fontSize: 18,
  letterSpacing: '0.03em',
  cursor: 'default',
}

const artworkArrowStyle: React.CSSProperties = {
  flexShrink: 0,
  marginTop: 2,
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
