import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useAppStore } from '../store/appStore';

const ContractCreator = () => {
    const { blueprints, addContract } = useAppStore();
    const [searchParams] = useSearchParams();
    const [selectedBlueprint, setSelectedBlueprint] = useState('');
    const [contractName, setContractName] = useState('');
    const [createdContractId, setCreatedContractId] = useState(null);

    
    useEffect(() => {
        const blueprintId = searchParams.get('blueprintId');
        if (blueprintId && blueprints.find(b => b.id === blueprintId)) {
            setSelectedBlueprint(blueprintId);
        }
    }, [searchParams, blueprints]);

    const handleCreate = () => {
        if (!selectedBlueprint || !contractName) return;
        const newContractId = addContract(selectedBlueprint, contractName);
        setCreatedContractId(newContractId);
        setSelectedBlueprint('');
        setContractName('');
    };

    if (createdContractId) {
        return (
            <div className="fade-in flex-1 overflow-auto p-8 bg-gray-50">
                <div className="max-w-2xl mx-auto">
                    <div className="border border-gray-200 rounded-lg p-6 bg-white">
                        <h2 className="text-2xl font-bold text-black mb-4">Contract Created!</h2>
                        <p className="text-gray-600 mb-6">Your contract has been created successfully.</p>
                        <Link
                            to={`/view-contract/${createdContractId}`}
                            className="inline-block px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
                        >
                            fill Contract
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fade-in flex-1 overflow-auto p-8 bg-gray-50">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <Link to="/" className="inline-block px-3 py-2 border border-gray-300 rounded-lg text-black font-medium hover:bg-gray-50 transition">&larr; Back</Link>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white">
                    <h2 className="text-2xl font-bold text-black mb-6">Start New Contract</h2>

                    {blueprints.length === 0 ? (
                        <div className="text-center py-4">
                            <p className="mb-4 text-gray-600">No blueprints available.</p>
                            <Link to="/create-blueprint" className="inline-block px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition">Create a Blueprint first</Link>
                        </div>
                    ) : (
                        <>
                            <label className="block mb-2 font-medium text-black">Select Blueprint</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black mb-4 hover:border-gray-400 focus:outline-none focus:border-black"
                                value={selectedBlueprint}
                                onChange={(e) => setSelectedBlueprint(e.target.value)}
                            >
                                <option value="">-- Select a template --</option>
                                {blueprints.map(b => (
                                    <option key={b.id} value={b.id}>{b.name}</option>
                                ))}
                            </select>

                            <label className="block mb-2 font-medium text-black">Contract Name</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black mb-6 focus:outline-none focus:border-black"
                                placeholder="e.g. Acme Corp NDA"
                                value={contractName}
                                onChange={(e) => setContractName(e.target.value)}
                            />

                            <button
                                className="w-full px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
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
