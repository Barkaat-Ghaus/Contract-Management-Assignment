import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import { CONTRACT_STATUS, FIELD_TYPES } from '../utils/helpers';
import StatusBadge from '../components/StatusBadge';

const ContractView = () => {
    const { id } = useParams();
    const { contracts, updateContractData, updateContractStatus } = useAppStore();
    const contract = contracts.find(c => c.id === id);

    if (!contract) return <div>Contract not found</div>;

    const isLocked = contract.status === CONTRACT_STATUS.LOCKED || contract.status === CONTRACT_STATUS.REVOKED;

    const getNextActions = () => {
        if (contract.status === CONTRACT_STATUS.REVOKED) return [];
        if (contract.status === CONTRACT_STATUS.LOCKED) return [];

        const actions = [];

        // Sequential State Transitions
        switch (contract.status) {
            case CONTRACT_STATUS.CREATED:
                actions.push({ label: 'Approve', status: CONTRACT_STATUS.APPROVED, type: 'primary' });
                break;
            case CONTRACT_STATUS.APPROVED:
                actions.push({ label: 'Send', status: CONTRACT_STATUS.SENT, type: 'primary' });
                break;
            case CONTRACT_STATUS.SENT:
                actions.push({ label: 'Sign', status: CONTRACT_STATUS.SIGNED, type: 'primary' });
                break;
            case CONTRACT_STATUS.SIGNED:
                actions.push({ label: 'Lock', status: CONTRACT_STATUS.LOCKED, type: 'primary' });
                break;
            default: break;
        }

        // Revoke is always available unless locked
        if (contract.status !== CONTRACT_STATUS.LOCKED) {
            actions.push({ label: 'Revoke', status: CONTRACT_STATUS.REVOKED, type: 'danger' });
        }

        return actions;
    };

    const renderFieldInput = (field) => {
        switch (field.type) {
            case FIELD_TYPES.TEXT:
                return (
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:border-black"
                        value={field.value}
                        disabled={isLocked}
                        onChange={(e) => updateContractData(contract.id, field.id, e.target.value)}
                    />
                );
            case FIELD_TYPES.DATE:
                return (
                    <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:border-black"
                        value={field.value}
                        disabled={isLocked}
                        onChange={(e) => updateContractData(contract.id, field.id, e.target.value)}
                    />
                );
            case FIELD_TYPES.CHECKBOX:
                return (
                    <div>
                        <input
                            type="checkbox"
                            className="w-5 h-5 rounded border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            checked={field.value === 'true'}
                            disabled={isLocked}
                            onChange={(e) => updateContractData(contract.id, field.id, e.target.checked ? 'true' : 'false')}
                        />
                    </div>
                );
            case FIELD_TYPES.SIGNATURE:
                return (
                    <div className="border-b-2 border-black pb-2">
                        <input
                            className="w-full px-0 py-2 border-none bg-transparent italic text-2xl font-cursive disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none"
                            placeholder={isLocked ? "" : "Type to sign..."}
                            value={field.value}
                            disabled={isLocked}
                            onChange={(e) => updateContractData(contract.id, field.id, e.target.value)}
                        />
                    </div>
                );
            default: return null;
        }
    };

    return (
        <div className="fade-in flex-1 overflow-auto p-8 bg-gray-50">
            <div className="mb-6">
                <Link to="/" className="inline-block px-3 py-2 border border-gray-300 rounded-lg text-black font-medium hover:bg-gray-50 transition mb-4">&larr; Back to Contracts</Link>
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-black mb-1">{contract.name}</h2>
                        <div className="flex gap-2 items-center text-sm text-gray-600">
                            <span>Template: {contract.blueprintName}</span>
                            <span>&bull;</span>
                            <StatusBadge status={contract.status} />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {getNextActions().map(action => (
                            <button
                                key={action.status}
                                className={`px-4 py-2 rounded-lg font-medium transition ${action.type === 'danger' 
                                    ? 'bg-red-500 text-white hover:bg-red-600' 
                                    : 'bg-black text-white hover:bg-gray-800'}`}
                                onClick={() => updateContractStatus(contract.id, action.status)}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 border border-gray-200 rounded-lg p-6 bg-white">
                    <h3 className="text-lg font-bold text-black mb-6 pb-4 border-b border-gray-200">Contract Details</h3>
                    {contract.fields.map(field => (
                        <div key={field.id} className="mb-6">
                            <label className="block mb-2 font-medium text-black">{field.label}</label>
                            {renderFieldInput(field)}
                        </div>
                    ))}
                </div>

                <div>
                    <div className="border border-gray-200 rounded-lg p-6 bg-white mb-4">
                        <h4 className="text-lg font-bold text-black mb-4">History</h4>
                        <ul className="list-none">
                            {contract.history.slice().reverse().map((h, i) => (
                                <li key={i} className="flex justify-between mb-2 text-sm items-center">
                                    <StatusBadge status={h.status} />
                                    <span className="text-gray-600">
                                        {new Date(h.timestamp).toLocaleTimeString()}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {isLocked && (
                        <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
                            <h4 className="text-lg font-bold text-black mb-2">Read Only</h4>
                            <p className="text-sm text-gray-600">This contract is {contract.status.toLowerCase()} and cannot be edited.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContractView;
