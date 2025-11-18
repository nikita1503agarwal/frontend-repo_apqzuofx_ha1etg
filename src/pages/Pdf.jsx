import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { apiPost } from '../lib/api'

export default function Pdf(){
  const [params]=useSearchParams()
  const [career]=useState(params.get('career')||'Software Engineer')
  const [language,setLanguage]=useState('en')
  const [downloading,setDownloading]=useState(false)
  const [roadmap,setRoadmap]=useState(null)

  useEffect(()=>{(async()=>{
    const res = await apiPost('/api/roadmap', {career, skills: []})
    setRoadmap(res.roadmap)
  })()},[])

  const download = async ()=>{
    setDownloading(true)
    const res = await fetch((import.meta.env.VITE_BACKEND_URL||'')+ '/api/pdf', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({language, roadmap})
    })
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href=url; a.download=`Pathify_${career}.pdf`; a.click();
    window.URL.revokeObjectURL(url)
    setDownloading(false)
  }

  if(!roadmap) return <div className="min-h-screen bg-black text-white grid place-items-center">Loading...</div>

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold">PDF Generator</h1>
        <div className="mt-6 bg-white/5 border border-white/10 rounded p-5 space-y-4">
          <div>
            <div className="font-semibold">Language</div>
            <select value={language} onChange={e=>setLanguage(e.target.value)} className="mt-2 bg-white/5 border border-white/10 rounded p-2">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
          <div>
            <div className="font-semibold">Template</div>
            <select className="mt-2 bg-white/5 border border-white/10 rounded p-2">
              <option>Classic</option>
              <option>Minimal</option>
            </select>
          </div>
          <button onClick={download} className="px-5 py-2 rounded bg-[#43FF70] text-black">{downloading? 'Preparing...' : 'Download PDF'}</button>
        </div>
        <p className="text-slate-300 mt-4">If you want, I can generate your personalized PDF roadmap.</p>
      </div>
    </div>
  )
}
