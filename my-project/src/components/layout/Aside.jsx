import React from 'react'

const Aside = ({ currentPage, onNavigate }) => {
  const isActive = (page) => currentPage === page;

  return (
    <aside className="w-64 flex flex-col p-6 border-r shrink-0" style={{ backgroundColor: 'var(--bg-secondary)', borderRightColor: 'var(--border-color)' }}>
      <div className="flex items-center gap-3 mb-10">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--accent-primary)' }}>
          <span className="pb-1 text-3xl" style={{ color: 'var(--text-primary)' }}>C</span>
        </div>
        <h1 className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>Contract.io</h1>
      </div>

        <nav className="flex-1 space-y-8">
          <div>
            <p className="px-3 text-[11px] font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--accent-secondary)' }}>Main Menu</p>
            <div className="space-y-1">
            <button 
              onClick={() => onNavigate('dashboard')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-semibold transition" 
              style={{ 
                backgroundColor: isActive('dashboard') ? 'var(--bg-card)' : 'transparent',
                color: isActive('dashboard') ? 'var(--accent-primary)' : 'var(--text-secondary)'
              }}
            >
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => onNavigate('blueprints')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium hover:opacity-80 transition" 
              style={{ color: 'var(--text-secondary)' }}
            >
              <span>Blueprints</span>
            </button>
            <button 
              onClick={() => onNavigate('archive')}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium hover:opacity-80 transition" 
              style={{ color: 'var(--text-secondary)' }}
            >
              <span>Archive</span>
            </button>
            </div>
          </div>
        </nav>

      <div className="mt-auto pt-6 border-t" style={{ borderTopColor: 'var(--border-color)' }}>
        <div className="flex items-center gap-3 p-2 rounded-2xl" style={{ backgroundColor: 'var(--bg-card)' }}>
          <img alt="Profile" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCpr6hKc2Npj-Sw40G5P7_ZqO_sUu75vcEM7GipWHuf2nzvouoFey-vVhvVkx-fB_mPSjDGUYecy_GNI6ZskN20E90RT6Ktt7dAbX9Vmlu0GJhWEX6g6l5Ul8buLrGrnfrohd5bfNi4717Pz1YMIIS-ne_WUcgz01TjDPIZH7qieVpcMpTUS_8ZKwcLyXw6jJMLeWWD4taYALUd0biU8FWdkQZcNqIXhRiQO1-oIAlcni8eydtfm1HnIUPeaqZHsPfwtbRUvkHQV5q" />
          <div className="flex-1">
            <p className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>Alex Manager</p>
            <p className="text-[10px]" style={{ color: 'var(--text-secondary)' }}>Legal Team</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside
