export default function Parent(){
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="text-3xl font-bold">Parent Dashboard</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold">Overview</h3>
            <p className="text-gray-600">Track your child's progress and recommended paths in one place.</p>
          </div>
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold">Recommended Paths</h3>
            <ul className="list-disc pl-5 mt-2 text-gray-700">
              <li>Software Engineer</li>
              <li>Data Scientist</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border bg-white">
            <h3 className="font-semibold">Progress Analytics</h3>
            <p className="text-gray-600">Overall completion: 62% (last week +6%).</p>
          </div>
        </div>
        <div className="mt-6 p-5 rounded-xl border bg-white">
          <h3 className="font-semibold">Roadmap Summaries</h3>
          <div className="mt-2 grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded border"><h4 className="font-semibold">Software Engineer</h4><p className="text-sm text-gray-600">Strong fit with growing skills.</p></div>
            <div className="p-4 rounded border"><h4 className="font-semibold">Data Scientist</h4><p className="text-sm text-gray-600">Good analytical base; build statistics.</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
