import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:8080/api/vehicles'

export default function Vehicle() {
  const [vehicles, setVehicles] = useState([])
  const [form, setForm] = useState({ brand: '', model: '', color: '', type: '' })

  const load = () => axios.get(API).then(r => setVehicles(r.data))
  useEffect(() => { load() }, [])

  const save = async () => {
    await axios.post(API, form)
    setForm({ brand: '', model: '', color: '', type: '' })
    load()
  }

  const del = async (id) => {
    await axios.delete(`${API}/${id}`)
    load()
  }

  return (
    <div>
      <h2>Vehicles</h2>
      <input placeholder="Brand" value={form.brand} onChange={e => setForm({ ...form, brand: e.target.value })} />
      <input placeholder="Model" value={form.model} onChange={e => setForm({ ...form, model: e.target.value })} />
      <input placeholder="Color" value={form.color} onChange={e => setForm({ ...form, color: e.target.value })} />
      <input placeholder="Type"  value={form.type}  onChange={e => setForm({ ...form, type: e.target.value })} />
      <button onClick={save}>Add</button>
      <table border="1" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr><th>ID</th><th>Brand</th><th>Model</th><th>Color</th><th>Type</th><th>Delete</th></tr>
        </thead>
        <tbody>
          {vehicles.map(v => (
            <tr key={v.id}>
              <td>{v.id}</td><td>{v.brand}</td><td>{v.model}</td><td>{v.color}</td><td>{v.type}</td>
              <td><button onClick={() => del(v.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}