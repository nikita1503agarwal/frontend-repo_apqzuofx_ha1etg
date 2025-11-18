import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Your Career. Your Roadmap. Perfectly Mapped by AI.</h1>
            <p className="mt-4 text-lg text-slate-300">A clean, premium AI Career GPS for students and parents.</p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link to="/assessment" className="px-6 py-3 rounded-lg bg-[#2349FF] hover:bg-blue-600 transition">Start Assessment</Link>
              <Link to="/waitlist" className="px-6 py-3 rounded-lg bg-[#43FF70] text-black hover:bg-emerald-300 transition">Join Waitlist</Link>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          ['Students Guided', 12480],
          ['Career Roadmaps Generated', 3295],
          ['Schools Using Pathify AI', 74],
        ].map(([label, value])=> (
          <Counter key={label} label={label} value={value} />
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ['Assess', 'Answer a guided assessment (academics, interests, skills).'],
            ['Analyze', 'Our AI maps strengths, gaps, and market demand.'],
            ['Act', 'Get a full roadmap with tasks, courses and PDF.'],
          ].map(([t,d],i)=> (
            <div key={t} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-[#43FF70] text-sm">Step {i+1}</div>
              <div className="text-xl font-semibold mt-1">{t}</div>
              <p className="text-slate-300 mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">What Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            ['Changed my path', 'I finally know what to do next.'],
            ['Crystal clear', 'The roadmap made everything simple.'],
            ['Parents loved it', 'We track progress together.'],
          ].map(([t,d])=> (
            <div key={t} className="p-6 rounded-xl bg-white/5 border border-white/10">
              <div className="text-xl font-semibold">{t}</div>
              <p className="text-slate-300 mt-2">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function Counter({label, value}){
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
      <div className="text-4xl font-bold text-[#43FF70]" data-count={value}>{value.toLocaleString()}</div>
      <div className="text-slate-300 mt-2">{label}</div>
    </div>
  )
}
