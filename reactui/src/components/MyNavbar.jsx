import { Link } from 'react-router-dom'

export default function MyNavbar() {
  return (
    <nav style={{ padding: '10px', background: '#333', display: 'flex', gap: '20px' }}>
      <Link style={{ color: 'white' }} to="/drivers">Drivers</Link>
      <Link style={{ color: 'white' }} to="/vehicles">Vehicles</Link>
      <Link style={{ color: 'white' }} to="/assignments">Assignments</Link>
    </nav>
  )
}