import React from 'react'

const Header = ({ pageTitle, onNewContract, showNewButton = true }) => {
  return (
    <header className="h-20 flex items-center justify-between px-8 border-b shrink-0" style={{ backgroundColor: 'var(--bg-secondary)', borderBottomColor: 'var(--border-color)' }}>
      <div className="flex items-center gap-8">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{pageTitle || 'Overview'}</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2">
          <img alt="avatar" className="w-8 h-8 rounded-full border-2" style={{ borderColor: 'var(--border-color)' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoJqk7BQZoww1XmdI1jSQLn7NzuM-SO67KALz3xGi3bFQ2vvQBPWf3xEgrRuPHCPHirnsTTp2BYFjMEiHhm6TPQPHT2ohkMrnvqFCcsM6nDfDQ90uFs0uK2Kl9mXW_a7rW3kqupNdwGiRhjE2U4KLnfBueU2goeHCE5lIPx0PqXFoHcjyBE8JltD-_YQKxeyLMz9rH9a5XgVGF08GjTZ6zjz5zsPg4q-Xyo5Ri2_MLiYONdaYeyIxk1B6jxinmfDmGHrwVykatgkmK" />
          <img alt="avatar" className="w-8 h-8 rounded-full border-2" style={{ borderColor: 'var(--border-color)' }} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFc1gdsLtomtKJwBEqFUL7CdzxlwI_paG4nwirx9mkmzR9o9sDDGhgdsoecNJq6-yik7SWpCEEjy6SLDdZKlD-kuDqzFmvQQQO_Ei5lvBnbo0jm2xoGZk3uMW4nQ6vmHkG_NfuIN3yaNJspcqo1yDYTrELLthdrjDQT2draHjOcLZmj1L4wt38HWPlhnsDy96UhT-C54bLTszBd1-AXOhGmkhfhErZr6jMmy3S2SuSvx4i-cSkiwBeQsAIp71oG1MZd68F4DR09xLZ" />
        </div>
        {showNewButton && (
          <button 
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all" 
            style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--text-primary)' }} 
            onClick={onNewContract}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-hover)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--accent-primary)'}
          >
            <span className="material-symbols-outlined text-lg!">add</span>
            New Contract
          </button>
        )}
      </div>
    </header>
  )
}

export default Header