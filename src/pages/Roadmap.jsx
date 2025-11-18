import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { apiPost } from '../utils/api'

export default function Roadmap(){
  const [sp] = useSearchParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const career = sp.get('career') || 'Software Engineer'
    apiPost('/api/roadmap', { career }).then(setData).finally(()=>setLoading(false))
  },[])

  if (loading) return <div className="p-10">Loading...</div>
  if (!data) return <div className="p-10">No data</div>

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{data.career} Roadmap</h1>
          <a className="px-4 py-2 rounded bg-black text-white" href={`/pdf?career=${encodeURIComponent(data.career)}`}>Download PDF Roadmap</a>
        </div>
        <p className="mt-2 text-gray-600">{data.summary}</p>

        <h3 className="mt-8 font-semibold text-xl">Required Skills</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {data.required_skills.map((s,i)=> <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-sm">{s}</span>)}
        </div>

        <h3 className="mt-8 font-semibold text-xl">Complete Roadmap</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {Object.entries(data.roadmap).map(([sec, items])=> (
            <div key={sec} className="p-5 rounded-xl border bg-white">
              <h4 className="font-semibold">{sec}</h4>
              <ul className="list-disc pl-5 mt-2 text-gray-700">
                {items.map((it,idx)=> <li key={idx}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <h3 className="mt-8 font-semibold text-xl">Skill Gap Analysis</h3>
        <div className="mt-3 p-5 rounded-xl border bg-white">
          <ul className="list-disc pl-5 text-gray-700">
            {data.required_skills.map((s,i)=> <li key={i}>Strengthen: {s}</li>)}
          </ul>
        </div>

        <h3 className="mt-8 font-semibold text-xl">Charts</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border bg-white h-64 grid place-items-center text-gray-500">Salary growth chart</div>
          <div className="p-5 rounded-xl border bg-white h-64 grid place-items-center text-gray-500">Job demand chart</div>
        </div>

        <h3 className="mt-8 font-semibold text-xl">Action Tasks</h3>
        <div className="mt-3 p-5 rounded-xl border bg-white">
          <ul className="list-disc pl-5 text-gray-700">
            {data.actions.map((a,i)=> <li key={i}>{a}</li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}
