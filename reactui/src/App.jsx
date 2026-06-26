import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Driver from './components/driver/Driver'
import Vehicle from './components/vehicle/Vehicle'
import Assignment from './components/assignment/Assignment'
import MyNavbar from './components/MyNavbar'

export default function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/drivers"     element={<Driver />} />
          <Route path="/vehicles"    element={<Vehicle />} />
          <Route path="/assignments" element={<Assignment />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}