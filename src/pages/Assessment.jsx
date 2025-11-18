import { useState } from 'react'
import { apiPost } from '../utils/api'

const Q = [
  'I enjoy solving complex problems', 'I like working with data', 'I prefer creative tasks',
  'I love building things', 'I enjoy helping others', 'I am detail-oriented',
  'I like leadership roles', 'I enjoy math', 'I like designing interfaces', 'I am curious about security',
]

export default function Assessment(){
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ academic_performance:'', interests:'', skills:'', preferences:'', language:'en' })
  const [answers, setAnswers] = useState(Array(10).fill(3))
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState(null)

  const next = ()=> setStep(s=> Math.min(4, s+1))
  const back = ()=> setStep(s=> Math.max(1, s-1))

  const handleSubmit = async()=>{
    setLoading(true)
    try{
      const payload = {
        academic_performance: form.academic_performance,
        interests: form.interests.split(',').map(s=>s.trim()).filter(Boolean),
        skills: form.skills.split(',').map(s=>s.trim()).filter(Boolean),
        preferences: form.preferences.split(',').map(s=>s.trim()).filter(Boolean),
        personality_answers: answers,
        uploaded_docs: [],
        language: form.language,
      }
      const res = await apiPost('/api/assessment', payload)
      setPreview(res)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold">Career Assessment</h1>
        <div className="mt-6 h-2 w-full bg-gray-100 rounded">
          <div className="h-2 bg-[#2349FF] rounded" style={{width: `${(step/4)*100}%`}} />
        </div>

        {step===1 && (
          <div className="mt-8 grid gap-4">
            <input className="border p-3 rounded" placeholder="Academic performance (e.g., 85% in Class 10)" value={form.academic_performance} onChange={e=>setForm({...form, academic_performance:e.target.value})} />
            <input className="border p-3 rounded" placeholder="Interests (comma separated)" value={form.interests} onChange={e=>setForm({...form, interests:e.target.value})} />
            <input className="border p-3 rounded" placeholder="Skills (comma separated)" value={form.skills} onChange={e=>setForm({...form, skills:e.target.value})} />
            <input className="border p-3 rounded" placeholder="Future preferences (comma separated)" value={form.preferences} onChange={e=>setForm({...form, preferences:e.target.value})} />
            <div className="flex gap-3">
              <button onClick={next} className="px-4 py-2 bg-[#2349FF] text-white rounded">Next</button>
            </div>
          </div>
        )}

        {step===2 && (
          <div className="mt-8 space-y-4">
            {Q.map((q,i)=> (
              <div key={i} className="p-4 border rounded">
                <p className="font-medium">{q}</p>
                <input type="range" min="1" max="5" value={answers[i]} onChange={e=>{
                  const val = Number(e.target.value); const arr=[...answers]; arr[i]=val; setAnswers(arr)
                }} className="w-full" />
              </div>
            ))}
            <div className="flex gap-3">
              <button onClick={back} className="px-4 py-2 border rounded">Back</button>
              <button onClick={next} className="px-4 py-2 bg-[#2349FF] text-white rounded">Next</button>
            </div>
          </div>
        )}

        {step===3 && (
          <div className="mt-8 grid gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">Upload documents</label>
              <input type="file" multiple onChange={e=> setDocs(Array.from(e.target.files||[]))} />
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm">Language</label>
              <select className="border p-2 rounded" value={form.language} onChange={e=>setForm({...form, language:e.target.value})}>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
              </select>
            </div>
            <div className="flex gap-3">
              <button onClick={back} className="px-4 py-2 border rounded">Back</button>
              <button onClick={next} className="px-4 py-2 bg-[#2349FF] text-white rounded">Next</button>
            </div>
          </div>
        )}

        {step===4 && (
          <div className="mt-8">
            <h3 className="font-semibold text-lg">AI Preview Summary</h3>
            <p className="text-gray-600">Review before submitting.</p>
            <div className="mt-4 p-4 rounded border bg-gray-50">
              <pre className="whitespace-pre-wrap text-sm">{JSON.stringify({form, answers}, null, 2)}</pre>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={back} className="px-4 py-2 border rounded">Back</button>
              <button onClick={handleSubmit} disabled={loading} className="px-4 py-2 bg-[#2349FF] text-white rounded">{loading? 'Processing...' : 'Submit'}</button>
            </div>

            {preview && (
              <div className="mt-8">
                <h3 className="text-xl font-bold">Top Matches</h3>
                <div className="mt-4 space-y-4">
                  {preview.matches.map((m,i)=> (
                    <div key={i} className="p-5 rounded-xl border bg-white">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">{m.career}</h4>
                        <span className="text-[#43FF70] font-bold">{m.match_percent}%</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">Why matched: {m.why_match.join(', ')}</p>
                      <p className="mt-1 text-sm text-gray-600">Strengths: {m.strengths.join(', ')}</p>
                      <p className="mt-1 text-sm text-gray-600">Skill Gap: {m.skill_gap.join(', ')}</p>
                      <div className="mt-3 flex gap-3">
                        <a className="px-3 py-2 rounded bg-black text-white text-sm" href={`/results?career=${encodeURIComponent(m.career)}`}>Open in AI Results</a>
                        <a className="px-3 py-2 rounded border text-sm" href={`/roadmap?career=${encodeURIComponent(m.career)}`}>View Full Roadmap</a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 border rounded bg-white">
                  <h4 className="font-semibold mb-2">Preview Summary</h4>
                  <pre className="text-sm whitespace-pre-wrap">{JSON.stringify(preview.preview_summary, null, 2)}</pre>
                  <p className="mt-3 font-medium">If you want, I can generate your personalized PDF roadmap.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
