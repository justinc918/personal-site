import { Outlet } from 'react-router-dom'
import TopBar from './TopBar'

export default function AppLayout() {
  return (
    <div style={layoutStyle}>
      <TopBar />
      <main style={mainStyle}>
        <Outlet />
      </main>
    </div>
  )
}

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}

const mainStyle: React.CSSProperties = {
  flex: 1,
  overflow: 'hidden',
  position: 'relative',
}
