import React from 'react'

const Aside = () => {
  return (
    <aside className="w-64 flex flex-col p-6 bg-white border-r border-slate-100 shrink-0">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center">
          <span className="pb-1 text-3xl text-blue-200">C</span>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-slate-900">Contract.io</h1>
      </div>

        <nav className="flex-1 space-y-8">
          <div>
            <p className="px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-4">Main Menu</p>
            <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 text-indigo-600 font-semibold">
              <span>Dashboard</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 font-medium">
              <span>Blueprints</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 font-medium">
              <span>Archive</span>
            </div>
            </div>
          </div>
        </nav>

      <div className="mt-auto pt-6 border-t border-slate-50">
        <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-2xl">
          <img alt="Profile" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCpr6hKc2Npj-Sw40G5P7_ZqO_sUu75vcEM7GipWHuf2nzvouoFey-vVhvVkx-fB_mPSjDGUYecy_GNI6ZskN20E90RT6Ktt7dAbX9Vmlu0GJhWEX6g6l5Ul8buLrGrnfrohd5bfNi4717Pz1YMIIS-ne_WUcgz01TjDPIZH7qieVpcMpTUS_8ZKwcLyXw6jJMLeWWD4taYALUd0biU8FWdkQZcNqIXhRiQO1-oIAlcni8eydtfm1HnIUPeaqZHsPfwtbRUvkHQV5q" />
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-900">Alex Manager</p>
            <p className="text-[10px] text-slate-500">Legal Team</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside
