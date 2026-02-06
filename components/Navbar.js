export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold tracking-tight">
          Cashflow<span className="text-blue-600">AI</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-black">Features</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#contact" className="hover:text-black">Contact</a>
        </nav>

        <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
          Start Free
        </button>
      </div>
    </header>
  );
}