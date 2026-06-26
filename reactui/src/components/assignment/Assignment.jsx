import { useEffect, useState } from 'react'
import axios from 'axios'

const API         = 'http://localhost:8080/api/assignments'
const DRIVER_API  = 'http://localhost:8080/api/drivers'
const VEHICLE_API = 'http://localhost:8080/api/vehicles'

export default function Assignment() {
  const [assignments, setAssignments] = useState([])
  const [drivers, setDrivers]         = useState([])
  const [vehicles, setVehicles]       = useState([])
  const [form, setForm] = useState({ driverId: '', vehicleId: '', assignedDate: '', returnDate: '' })

  const load = () => axios.get(API).then(r => setAssignments(r.data))

  useEffect(() => {
    load()
    axios.get(DRIVER_API).then(r => setDrivers(r.data))
    axios.get(VEHICLE_API).then(r => setVehicles(r.data))
  }, [])

  const save = async () => {
    await axios.post(API, {
      driver:       { id: form.driverId },
      vehicle:      { id: form.vehicleId },
      assignedDate: form.assignedDate,
      returnDate:   form.returnDate
    })
    setForm({ driverId: '', vehicleId: '', assignedDate: '', returnDate: '' })
    load()
  }

  const del = async (id) => {
    await axios.delete(`${API}/${id}`)
    load()
  }

  return (
    <div>
      <h2>Assignments</h2>
      <select value={form.driverId} onChange={e => setForm({ ...form, driverId: e.target.value })}>
        <option value="">Select Driver</option>
        {drivers.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
      </select>
      <select value={form.vehicleId} onChange={e => setForm({ ...form, vehicleId: e.target.value })}>
        <option value="">Select Vehicle</option>
        {vehicles.map(v => <option key={v.id} value={v.id}>{v.brand} {v.model}</option>)}
      </select>
      <input type="date" value={form.assignedDate} onChange={e => setForm({ ...form, assignedDate: e.target.value })} />
      <input type="date" value={form.returnDate}   onChange={e => setForm({ ...form, returnDate: e.target.value })} />
      <button onClick={save}>Assign</button>
      <table border="1" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr><th>ID</th><th>Driver</th><th>Vehicle</th><th>Assigned Date</th><th>Return Date</th><th>Delete</th></tr>
        </thead>
        <tbody>
          {assignments.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.driver?.name}</td>
              <td>{a.vehicle?.brand} {a.vehicle?.model}</td>
              <td>{a.assignedDate}</td>
              <td>{a.returnDate}</td>
              <td><button onClick={() => del(a.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}