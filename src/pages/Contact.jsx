import { useState } from 'react'
import { apiPost } from '../utils/api'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const submit = async(e)=>{
    e.preventDefault(); setStatus('')
    try{ await apiPost('/api/contact', { name, email, message }); setStatus('Sent!'); setName(''); setEmail(''); setMessage('') } catch(e){ setStatus('Failed.') }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold">Contact Support</h1>
        <form onSubmit={submit} className="mt-6 grid gap-4">
          <input className="border p-3 rounded" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} required />
          <input type="email" className="border p-3 rounded" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <textarea className="border p-3 rounded" rows="6" placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} required />
          <button className="px-4 py-2 rounded bg-[#2349FF] text-white" type="submit">Send</button>
          {status && <p className="text-sm text-gray-600">{status}</p>}
        </form>
      </div>
    </div>
  )
}
