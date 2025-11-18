import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { apiPost } from '../utils/api'

export default function Results(){
  const [sp] = useSearchParams()
  const [blocks, setBlocks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const career = sp.get('career') || 'Software Engineer'
    // Fake a single block as if AI response
    setBlocks([{
      title: `Why ${career} fits you`,
      items: [
        'Your interests align with core activities of the role',
        'Your current skills show strong foundation',
        'Personality answers indicate good job satisfaction fit'
      ]
    },{
      title: 'Skill Gap Analysis', items: [
        'System Design fundamentals', 'Advanced Algorithms', 'Real-world project experience'
      ]
    },{
      title: 'Salary Forecast (LPA)', items: ['Entry: 4–8', 'Mid: 12–18', 'Senior: 25–35']
    },{
      title: 'Market Demand Trends', items: ['Positive 6M trend', 'High remote opportunities', 'Cross-industry demand']
    }])
    setLoading(false)
  },[])

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold">AI Results</h1>
        {loading? <p className="mt-6">Loading...</p> : (
          <div className="mt-6 space-y-4">
            {blocks.map((b,i)=> (
              <div key={i} className="p-5 rounded-xl border bg-white">
                <h3 className="font-semibold">{b.title}</h3>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  {b.items.map((it,idx)=> <li key={idx}>{it}</li>)}
                </ul>
              </div>
            ))}
            <p className="font-medium">If you want, I can generate your personalized PDF roadmap.</p>
            <div className="mt-4">
              <Link to={`/roadmap?career=${encodeURIComponent(sp.get('career')||'Software Engineer')}`} className="px-4 py-2 rounded bg-[#2349FF] text-white">View Full Roadmap</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
