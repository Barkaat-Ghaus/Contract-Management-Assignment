import React, { useState } from 'react';
import { useAppStore } from '../store/appStore';
import StatusBadge from '../components/StatusBadge';
import { formatDate } from '../utils/helpers';

const Dashboard = ({ onNavigate }) => {
    const { contracts } = useAppStore();
    const [filter, setFilter] = useState('All');

    const filteredContracts = filter === 'All'
        ? contracts
        : contracts.filter(c => c.status === filter);

    const statuses = ['All', ...new Set(contracts.map(c => c.status))];

    return (
        <div className="fade-in flex-1 overflow-auto p-8">
            <div className="mb-4">
                <span className="mr-2" style={{ color: 'var(--text-secondary)' }}>Filter by:</span>
                <select
                    className="select inline-block w-auto"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    {statuses.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            <div className="card p-0 overflow-hidden">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Contract Name</th>
                            <th>Blueprint</th>
                            <th>Status</th>
                            <th>Created Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredContracts.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center py-8" style={{ color: 'var(--text-secondary)' }}>
                                    No contracts found. Create one to get started.
                                </td>
                            </tr>
                        ) : (
                            filteredContracts.map(contract => (
                                <tr key={contract.id}>
                                    <td className="font-medium">{contract.name}</td>
                                    <td>{contract.blueprintName}</td>
                                    <td><StatusBadge status={contract.status} /></td>
                                    <td>{formatDate(contract.createdAt)}</td>
                                    <td>
                                        <button
                                            className="btn btn-secondary text-xs px-2 py-1"
                                            onClick={() => onNavigate('view-contract', contract.id)}
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
