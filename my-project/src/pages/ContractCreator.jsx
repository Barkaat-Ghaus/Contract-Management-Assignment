import React, { useState } from 'react';
import { useAppStore } from '../store/appStore';

const ContractCreator = ({ onNavigate }) => {
    const { blueprints, addContract } = useAppStore();
    const [selectedBlueprint, setSelectedBlueprint] = useState('');
    const [contractName, setContractName] = useState('');

    const handleCreate = () => {
        if (!selectedBlueprint || !contractName) return;
        addContract(selectedBlueprint, contractName);
        onNavigate('dashboard');
    };

    return (
        <div className="fade-in flex-1 overflow-auto p-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <button className="btn btn-secondary" onClick={() => onNavigate('dashboard')}>&larr; Back</button>
                </div>

                <div className="card">
                    <h2 className="mb-6">Start New Contract</h2>

                    {blueprints.length === 0 ? (
                        <div className="text-center py-4">
                            <p className="mb-4">No blueprints available.</p>
                            <button className="btn btn-primary" onClick={() => onNavigate('create-blueprint')}>Create a Blueprint first</button>
                        </div>
                    ) : (
                        <>
                            <label className="block mb-2">Select Blueprint</label>
                            <select
                                className="select"
                                value={selectedBlueprint}
                                onChange={(e) => setSelectedBlueprint(e.target.value)}
                            >
                                <option value="">-- Select a template --</option>
                                {blueprints.map(b => (
                                    <option key={b.id} value={b.id}>{b.name}</option>
                                ))}
                            </select>

                            <label className="block mb-2 mt-4">Contract Name</label>
                            <input
                                className="input"
                                placeholder="e.g. Acme Corp NDA"
                                value={contractName}
                                onChange={(e) => setContractName(e.target.value)}
                            />

                            <button
                                className="btn btn-primary w-full mt-4"
                                disabled={!selectedBlueprint || !contractName}
                                onClick={handleCreate}
                            >
                                Create Contract
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContractCreator;
