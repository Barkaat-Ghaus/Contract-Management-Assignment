import React, { useMemo } from 'react';
import { useAppStore } from '../store/appStore';
import { CONTRACT_STATUS, FIELD_TYPES } from '../utils/helpers';
import StatusBadge from '../components/StatusBadge';

const ContractView = ({ contractId, onNavigate }) => {
    const { contracts, updateContractData, updateContractStatus } = useAppStore();
    const contract = contracts.find(c => c.id === contractId);

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
                        className="input disabled:opacity-50 disabled:cursor-not-allowed"
                        value={field.value}
                        disabled={isLocked}
                        onChange={(e) => updateContractData(contract.id, field.id, e.target.value)}
                    />
                );
            case FIELD_TYPES.DATE:
                return (
                    <input
                        type="date"
                        className="input disabled:opacity-50 disabled:cursor-not-allowed"
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
                            className="w-5 h-5 disabled:opacity-50 disabled:cursor-not-allowed"
                            checked={field.value === 'true'}
                            disabled={isLocked}
                            onChange={(e) => updateContractData(contract.id, field.id, e.target.checked ? 'true' : 'false')}
                        />
                    </div>
                );
            case FIELD_TYPES.SIGNATURE:
                return (
                    <div className="border-b-2 pb-2">
                        <input
                            className="input border-none bg-transparent italic text-2xl font-cursive disabled:opacity-50 disabled:cursor-not-allowed"
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
        <div className="fade-in flex-1 overflow-auto p-8">
            <div className="mb-6">
                <button className="btn btn-secondary mb-4" onClick={() => onNavigate('dashboard')}>&larr; Back to Contracts</button>
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="mb-1">{contract.name}</h2>
                        <div className="flex gap-2 items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <span>Template: {contract.blueprintName}</span>
                            <span>&bull;</span>
                            <StatusBadge status={contract.status} />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {getNextActions().map(action => (
                            <button
                                key={action.status}
                                className={`btn btn-${action.type === 'danger' ? 'danger' : 'primary'}`}
                                onClick={() => updateContractStatus(contract.id, action.status)}
                            >
                                {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2 card">
                    <h3 className="mb-6 pb-4 border-b">Contract Details</h3>
                    {contract.fields.map(field => (
                        <div key={field.id} className="mb-6">
                            <label className="block mb-2 font-medium">{field.label}</label>
                            {renderFieldInput(field)}
                        </div>
                    ))}
                </div>

                <div>
                    <div className="card mb-4">
                        <h4 className="mb-4">History</h4>
                        <ul className="list-none">
                            {contract.history.slice().reverse().map((h, i) => (
                                <li key={i} className="flex justify-between mb-2 text-sm">
                                    <StatusBadge status={h.status} />
                                    <span style={{ color: 'var(--text-secondary)' }}>
                                        {new Date(h.timestamp).toLocaleTimeString()}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {isLocked && (
                        <div className="card" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'var(--accent-primary)' }}>
                            <h4 className="mb-2" style={{ color: 'var(--accent-primary)' }}>Read Only</h4>
                            <p className="text-sm">This contract is {contract.status.toLowerCase()} and cannot be edited.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContractView;
