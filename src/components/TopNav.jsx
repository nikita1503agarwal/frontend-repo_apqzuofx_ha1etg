import { Link } from 'react-router-dom'

export default function TopNav(){
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold tracking-tight text-xl">Pathify <span className="text-[#2349FF]">AI</span></Link>
        <nav className="hidden md:flex gap-6 text-sm text-gray-700">
          <Link to="/assessment" className="hover:text-[#2349FF]">Assessment</Link>
          <Link to="/results" className="hover:text-[#2349FF]">AI Results</Link>
          <Link to="/roadmap" className="hover:text-[#2349FF]">Roadmap</Link>
          <Link to="/pdf" className="hover:text-[#2349FF]">PDF</Link>
          <Link to="/student" className="hover:text-[#2349FF]">Student</Link>
          <Link to="/parent" className="hover:text-[#2349FF]">Parent</Link>
          <Link to="/admin" className="hover:text-[#2349FF]">Admin</Link>
          <Link to="/waitlist" className="hover:text-[#2349FF]">Waitlist</Link>
          <Link to="/about" className="hover:text-[#2349FF]">About</Link>
          <Link to="/contact" className="hover:text-[#2349FF]">Contact</Link>
        </nav>
        <Link to="/assessment" className="px-4 py-2 rounded-full bg-[#2349FF] text-white text-sm">Start Assessment</Link>
      </div>
    </header>
  )
}
