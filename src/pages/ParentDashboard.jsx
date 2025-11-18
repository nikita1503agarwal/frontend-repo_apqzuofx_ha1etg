export default function ParentDashboard(){
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        <h1 className="text-3xl font-bold">Parent Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card title="Student Overview"><ul className="text-slate-300 list-disc pl-5"><li>Career: Software Engineer</li><li>Progress: 42%</li><li>Next milestone: DSA Basics</li></ul></Card>
          <Card title="Recommended Paths"><ul className="text-slate-300 list-disc pl-5"><li>Software Engineer</li><li>Data Scientist</li></ul></Card>
          <Card title="Analytics"><div className="text-slate-300">Strong momentum with consistent weekly learning.</div></Card>
        </div>
        <Card title="Roadmap Summaries">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SummaryCard career="Software Engineer"/>
            <SummaryCard career="Data Scientist"/>
          </div>
        </Card>
        <p className="text-slate-300">If you want, I can generate your personalized PDF roadmap.</p>
      </div>
    </div>
  )
}

function Card({title, children}){return <div className="bg-white/5 border border-white/10 rounded p-5"><div className="font-semibold">{title}</div><div className="mt-2">{children}</div></div>}
function SummaryCard({career}){return <div className="p-4 rounded bg-white/5 border border-white/10"><div className="font-semibold">{career}</div><div className="text-slate-300 text-sm">Clear 3-stage plan with action items.</div></div>}
