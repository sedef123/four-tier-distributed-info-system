import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:8080/api/drivers'

export default function Driver() {
  const [drivers, setDrivers] = useState([])
  const [form, setForm] = useState({ name: '', address: '', phone: '' })

  const load = () => axios.get(API).then(r => setDrivers(r.data))
  useEffect(() => { load() }, [])

  const save = async () => {
    await axios.post(API, form)
    setForm({ name: '', address: '', phone: '' })
    load()
  }

  const del = async (id) => {
    await axios.delete(`${API}/${id}`)
    load()
  }

  return (
    <div>
      <h2>Drivers</h2>
      <input placeholder="Name"    value={form.name}    onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
      <input placeholder="Phone"   value={form.phone}   onChange={e => setForm({ ...form, phone: e.target.value })} />
      <button onClick={save}>Add</button>
      <table border="1" style={{ marginTop: '20px', width: '100%' }}>
        <thead>
          <tr><th>ID</th><th>Name</th><th>Address</th><th>Phone</th><th>Delete</th></tr>
        </thead>
        <tbody>
          {drivers.map(d => (
            <tr key={d.id}>
              <td>{d.id}</td><td>{d.name}</td><td>{d.address}</td><td>{d.phone}</td>
              <td><button onClick={() => del(d.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}