export default function Footer(){
  return (
    <footer className="py-10 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600">© {new Date().getFullYear()} Pathify AI • Founded by Sagar Kushwaha</p>
        <div className="flex gap-4 text-sm text-gray-600">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
