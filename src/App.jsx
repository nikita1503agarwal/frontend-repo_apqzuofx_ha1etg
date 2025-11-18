import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import { Star, Rocket, Users, LineChart } from 'lucide-react'

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-[#2349FF]">{value}</div>
      <div className="mt-2 text-gray-600">{label}</div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <TopNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Your Career. Your Roadmap. <span className="text-[#43FF70]">Perfectly Mapped</span> by AI.</h1>
            <p className="mt-5 text-gray-600 text-lg">A clean, premium platform that analyzes your profile, recommends best-fit careers, and gives you a step-by-step roadmap to get there.</p>
            <div className="mt-8 flex gap-3">
              <Link to="/assessment" className="px-5 py-3 rounded-full bg-[#2349FF] text-white font-semibold">Start Assessment</Link>
              <Link to="/waitlist" className="px-5 py-3 rounded-full border border-gray-300 hover:bg-gray-50">Join Waitlist</Link>
            </div>
          </div>
          <div className="h-[360px] md:h-[480px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-3 gap-6">
          <Stat label="Students Guided" value="12,540" />
          <Stat label="Roadmaps Generated" value="34,118" />
          <Stat label="Schools Using" value="182" />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[{
              icon: <Users className="text-[#2349FF]" />, title: 'Assess', desc: 'Tell us your academics, interests, skills and preferences.'
            },{
              icon: <LineChart className="text-[#2349FF]" />, title: 'Analyze', desc: 'AI evaluates fit, gaps, salary and market demand.'
            },{
              icon: <Rocket className="text-[#2349FF]" />, title: 'Act', desc: 'Get a clear roadmap with tasks and resources.'
            }].map((s,i)=> (
              <div key={i} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="w-10 h-10 grid place-items-center rounded-full bg-[#2349FF]/10">{s.icon}</div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Loved by students</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {['Helped me pick CS', 'Crystal clear roadmap', 'Best UI ever'].map((q,i)=> (
              <div key={i} className="p-6 rounded-xl border border-gray-100 bg-white shadow-sm">
                <Star className="text-yellow-500" />
                <p className="mt-4 text-gray-700">“{q}”</p>
                <p className="mt-4 text-sm text-gray-500">— Student #{i+1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
