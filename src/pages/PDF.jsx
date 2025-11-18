import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { API_BASE } from '../utils/api'

export default function PDF(){
  const [sp] = useSearchParams()
  const [language, setLanguage] = useState('en')
  const [template, setTemplate] = useState('classic')

  const download = async()=>{
    const career = sp.get('career') || 'Software Engineer'
    const payload = {
      career,
      language,
      summary: `Personalized roadmap for ${career}.`,
      roadmap: {
        'Classes 8–10': ['Math foundations', 'Intro to CS'],
        'Classes 11–12': ['Python + DSA basics'],
        'Graduation': ['Internship', 'Open Source'],
        'Certifications': ['Cloud'],
        'Portfolio': ['3-5 projects']
      }
    }
    const res = await fetch(`${API_BASE}/api/pdf`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    if(!res.ok){ alert('PDF generator not available on server'); return }
    const blob = await res.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${career.replace(' ','_')}_roadmap.pdf`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold">PDF Generator</h1>
        <div className="mt-6 grid gap-4">
          <div className="flex items-center gap-3">
            <label className="w-40">Language</label>
            <select className="border p-2 rounded" value={language} onChange={e=>setLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="w-40">Template</label>
            <select className="border p-2 rounded" value={template} onChange={e=>setTemplate(e.target.value)}>
              <option value="classic">Classic</option>
              <option value="modern">Modern</option>
            </select>
          </div>
          <button onClick={download} className="mt-4 px-4 py-2 rounded bg-[#2349FF] text-white">Download PDF</button>
          <p className="mt-4 font-medium">If you want, I can generate your personalized PDF roadmap.</p>
        </div>
      </div>
    </div>
  )
}
