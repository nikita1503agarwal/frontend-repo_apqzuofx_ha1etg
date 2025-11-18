import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  const link = 'text-slate-300 hover:text-white transition'
  const active = 'text-white font-semibold'
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#2349FF]"></div>
          <span className="text-white font-bold">Pathify AI</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {[
            ['Home','/'],
            ['Assessment','/assessment'],
            ['Results','/results'],
            ['Roadmap','/roadmap'],
            ['PDF','/pdf'],
            ['Student','/dashboard/student'],
            ['Parent','/dashboard/parent'],
            ['Admin','/admin'],
            ['Waitlist','/waitlist'],
            ['About','/about'],
            ['Contact','/contact'],
          ].map(([label, to]) => (
            <NavLink key={to} to={to} className={({isActive})=>isActive?active:link}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
