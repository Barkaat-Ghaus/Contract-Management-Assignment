import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Aside = ({ currentPage }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-64 flex flex-col p-6 border-r border-gray-200 shrink-0 bg-white">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-black">
          <span className="pb-1 text-3xl text-white font-bold">C</span>
        </div>
        <h1 className="text-lg font-bold tracking-tight text-black">Contract Times</h1>
      </div>

        <nav className="flex-1 space-y-8">
          <div>
            <p className="px-3 text-xs font-semibold uppercase tracking-wider mb-4 text-gray-500">Main Menu</p>
            <div className="space-y-1">
            <Link 
              to="/"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-semibold transition" 
              style={{ 
                backgroundColor: isActive('/') ? '#f0f0f0' : 'transparent',
                color: isActive('/') ? '#000000' : '#666666',
                textDecoration: 'none'
              }}
            >
              <span>Dashboard</span>
            </Link>
            <Link 
              to="/blueprints"
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium hover:bg-gray-100 transition" 
              style={{ 
                color: isActive('/blueprints') ? '#000000' : '#666666',
                textDecoration: 'none'
              }}
            >
              <span>Blueprints</span>
            </Link>
            </div>
          </div>
        </nav>

      <div className="mt-auto pt-6 border-t border-gray-200">
        <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50">
          <img  className="w-10 h-10 rounded-full object-cover"  />
          <div className="flex-1">
            <p className="text-xs font-bold text-black">user</p>
            <p className="text-xs text-gray-500">manager</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Aside
