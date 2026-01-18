import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ pageTitle, showNewButton = true }) => {
  return (
    <header className="h-20 flex items-center justify-between px-8 border-b border-gray-200 shrink-0 bg-white">
      <div className="flex items-center gap-8">
        <h2 className="text-2xl font-bold text-black">{pageTitle || 'Overview'}</h2>
      </div>
      <div className="flex items-center gap-4">
        {showNewButton && (
          <Link 
            to="/create-contract"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all bg-black text-white hover:bg-gray-800" 
          >
            <span>+ New Contract</span>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header