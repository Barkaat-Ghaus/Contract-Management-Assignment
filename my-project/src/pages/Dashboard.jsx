import React, { useState } from 'react';
import { useAppStore } from '../store/appStore';
import ContractCard from '../components/cards/ContractCard';

const Dashboard = () => {
    const { contracts } = useAppStore();
    const [filter, setFilter] = useState('All');

 
    const allContracts = Array.isArray(contracts) ? contracts : [];

    const filteredContracts = filter === 'All'
        ? allContracts
        : allContracts.filter(c => c.status === filter);

    const statuses = ['All', ...new Set(allContracts.map(c => c.status))];

    return (
        <div className="fade-in flex-1 overflow-auto p-8 bg-gray-50">
            <div className="mb-6 flex justify-between items-center">
                <div>
                    <span className="mr-2 text-gray-600">Filter by:</span>
                    <select
                        className="inline-block px-3 py-2 border border-gray-300 rounded-lg bg-white text-black hover:border-gray-400 focus:outline-none focus:border-black"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        {statuses.map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <span className="text-sm text-gray-600">
                    {filteredContracts.length} contract{filteredContracts.length !== 1 ? 's' : ''}
                </span>
            </div>

            {filteredContracts.length === 0 ? (
                <div className="border border-gray-200 rounded-lg p-8 text-center bg-white">
                    <p className="text-gray-600">No contracts found. Create one to get started.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredContracts.map(contract => (
                        <ContractCard key={contract.id} contract={contract} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
