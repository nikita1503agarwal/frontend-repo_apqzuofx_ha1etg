export default function StudentDashboard(){
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Career Progress"><ProgressBar value={42} /></Card>
          <Card title="Skill Levels"><div className="space-y-2 text-slate-300"><Level name="Python" v={70}/><Level name="DSA" v={45}/><Level name="Design" v={30}/></div></Card>
          <Card title="Courses Recommended"><ul className="list-disc pl-5 text-slate-300"><li>Python for Everybody</li><li>System Design Basics</li></ul></Card>
        </div>
        <Card title="Saved Roadmaps"><div className="flex gap-3 flex-wrap"><Chip>Software Engineer</Chip><Chip>Data Scientist</Chip></div></Card>
        <Card title="Completed Tasks"><ul className="list-disc pl-5 text-slate-300"><li>Built a portfolio homepage</li><li>Completed DSA arrays</li></ul></Card>
        <p className="text-slate-300">If you want, I can generate your personalized PDF roadmap.</p>
      </div>
    </div>
  )
}

function Card({title, children}){return <div className="bg-white/5 border border-white/10 rounded p-5"><div className="font-semibold">{title}</div><div className="mt-2">{children}</div></div>}
function ProgressBar({value}){return <div className="bg-white/10 h-2 rounded mt-2"><div className="h-2 rounded bg-[#43FF70]" style={{width:`${value}%`}}></div></div>}
function Level({name,v}){return <div><div className="flex justify-between"><span>{name}</span><span>{v}%</span></div><ProgressBar value={v} /></div>}
function Chip({children}){return <span className="px-3 py-1 rounded-full bg-white/10">{children}</span>}
