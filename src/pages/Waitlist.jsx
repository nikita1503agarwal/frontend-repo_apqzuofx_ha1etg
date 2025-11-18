import { useEffect, useState } from 'react'
import { apiGet, apiPost } from '../utils/api'

export default function Waitlist(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [instagram, setInstagram] = useState('')
  const [status, setStatus] = useState('')
  const [stats, setStats] = useState({ total: 0, recent: [] })

  const loadStats = ()=> apiGet('/api/waitlist/stats').then(setStats)
  useEffect(()=>{ loadStats() },[])

  const submit = async(e)=>{
    e.preventDefault()
    setStatus('')
    try{
      await apiPost('/api/waitlist', { name, email, instagram })
      setStatus('Added!')
      setName(''); setEmail(''); setInstagram('')
      loadStats()
    }catch(e){ setStatus('Failed. Please try again.') }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold">Join the Waitlist</h1>
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <input className="border p-3 rounded" placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} required />
          <input type="email" className="border p-3 rounded" placeholder="Gmail" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="border p-3 rounded" placeholder="Instagram ID" value={instagram} onChange={e=>setInstagram(e.target.value)} />
          <button className="px-4 py-2 rounded bg-[#2349FF] text-white" type="submit">Join Waitlist</button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>

        <div className="mt-10 p-5 rounded-xl border bg-white">
          <h3 className="font-semibold">Community</h3>
          <p className="text-gray-600 mt-1">Total on waitlist: <span className="font-semibold">{stats.total}</span></p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {stats.recent.map((n,i)=> <div key={i} className="p-3 rounded bg-gray-50">{n}</div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
