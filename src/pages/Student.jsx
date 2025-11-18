import { useEffect, useState } from 'react'
import { apiGet } from '../utils/api'

export default function Student(){
  const [data, setData] = useState(null)
  useEffect(()=>{ apiGet('/api/student/test@pathify.ai/overview').then(setData) },[])
  if(!data) return <div className="p-10">Loading...</div>

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold">Saved Roadmaps</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {data.saved.map((s,i)=> <li key={i}>{s.career}</li>)}
            </ul>
          </div>
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold">Tasks</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {data.tasks.map((t,i)=> <li key={i}>{t.title} {t.done? '✅':''}</li>)}
            </ul>
          </div>
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold">Skill Levels</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              {data.skills.map((s,i)=> <li key={i}>{s.name}: {s.level}%</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-6 p-5 rounded-xl border bg-white">
          <h3 className="font-semibold">Recommended Courses</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            {data.courses.map((c,i)=> <li key={i}>{c.title} — {c.provider}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
