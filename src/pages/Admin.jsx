import { useEffect, useState } from 'react'
import { apiGet, apiPost } from '../utils/api'

export default function Admin(){
  const [list, setList] = useState([])
  const [career, setCareer] = useState('Software Engineer')
  const [summary, setSummary] = useState('')

  const refresh = ()=> apiGet('/api/admin/templates').then(setList)
  useEffect(()=>{ refresh() },[])

  const save = async()=>{
    const body = {
      career,
      summary,
      required_skills: ['Skill 1','Skill 2'],
      roadmap: { Stage: ['Item 1','Item 2'] },
      default_actions: ['Action 1']
    }
    await apiPost('/api/admin/templates', body)
    setSummary(''); refresh()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold">Add / Edit Career Template</h3>
            <div className="mt-3 grid gap-3">
              <input className="border p-2 rounded" value={career} onChange={e=>setCareer(e.target.value)} />
              <textarea className="border p-2 rounded" value={summary} onChange={e=>setSummary(e.target.value)} placeholder="Summary" />
              <button onClick={save} className="px-4 py-2 rounded bg-[#2349FF] text-white">Save Template</button>
            </div>
          </div>
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold">Templates</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {list.map((t,i)=> <li key={i}>{t.career} — {t.summary}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
