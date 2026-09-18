// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0f1117]/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO AREA */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            {/* Aquí irá tu logo en el futuro. Por ahora es un icono de bisturí improvisado */}
            <span className="text-white font-bold text-xl leading-none">P</span>
          </div>
          <span className="font-extrabold text-lg tracking-tight text-white">
            Precon<span className="text-blue-500">Surgeon</span>
          </span>
        </div>

        {/* MENÚ DERECHO */}
        <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
          <button className="hover:text-white transition-colors">Mazos</button>
          <button className="hover:text-white transition-colors">ES / EN</button>
        </div>
      </div>
    </nav>
  );
}