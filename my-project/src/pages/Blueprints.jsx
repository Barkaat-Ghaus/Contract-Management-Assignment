import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/appStore';

const Blueprints = () => {
    const { blueprints } = useAppStore();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(blueprints.map(b => b.category || 'General'))];

    // Filter blueprints by category
    const filteredBlueprints = selectedCategory === 'All'
        ? blueprints
        : blueprints.filter(b => (b.category || 'General') === selectedCategory);

    const getFieldTypeBg = (type) => {
        const colors = {
            'Text': 'bg-blue-50',
            'Date': 'bg-green-50',
            'Checkbox': 'bg-amber-50',
            'Signature': 'bg-purple-50',
        };
        return colors[type] || 'bg-gray-50';
    };

    const getFieldTypeText = (type) => {
        const colors = {
            'Text': 'text-blue-700',
            'Date': 'text-green-700',
            'Checkbox': 'text-amber-700',
            'Signature': 'text-purple-700',
        };
        return colors[type] || 'text-gray-700';
    };

    return (
        <div className="fade-in flex-1 overflow-auto p-8 bg-gray-50">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-black">Available Blueprints</h2>
                    <Link 
                        to="/create-blueprint"
                        className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
                    >
                        + Create New Blueprint
                    </Link>
                </div>

                <div className="mb-6">
                    <span className="mr-2 text-gray-600">Filter by:</span>
                    <select
                        className="inline-block px-3 py-2 border border-gray-300 rounded-lg bg-white text-black hover:border-gray-400 focus:outline-none focus:border-black"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(c => (
                            <option key={c} value={c}>{c}</option>
                        ))}
                    </select>
                </div>
            </div>

            {filteredBlueprints.length === 0 ? (
                <div className="border border-gray-200 rounded-lg p-8 text-center bg-white">
                    <p className="text-gray-600">No blueprints available in this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredBlueprints.map(blueprint => (
                        <div key={blueprint.id} className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition">
                            <div className="mb-4">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-semibold text-black">{blueprint.name}</h3>
                                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                        {blueprint.category || 'General'}
                                    </span>
                                </div>
                                {blueprint.description && (
                                    <p className="text-sm text-gray-600">
                                        {blueprint.description}
                                    </p>
                                )}
                            </div>

                            <div className="mb-4 pb-4 border-b border-gray-200">
                                <p className="text-xs font-semibold mb-2 uppercase text-gray-600">
                                    Fields ({blueprint.fields.length})
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {blueprint.fields.map(field => (
                                        <span 
                                            key={field.id} 
                                            className={`text-xs px-2 py-1 rounded ${getFieldTypeBg(field.type)} ${getFieldTypeText(field.type)}`}
                                        >
                                            {field.type}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Link
                                    to="/create-contract"
                                    className="block w-full px-4 py-2 bg-black text-white text-sm rounded-lg text-center font-medium hover:bg-gray-800 transition"
                                >
                                    Create Contract
                                </Link>
                                <button
                                    className="w-full px-4 py-2 border border-gray-300 text-black text-sm rounded-lg font-medium hover:bg-gray-50 transition"
                                    onClick={() => {
                                        const details = blueprint.fields.map(f => `${f.label || f.name} (${f.type})`).join(', ');
                                        alert(`Blueprint Details:\n\n${details}`);
                                    }}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blueprints;
