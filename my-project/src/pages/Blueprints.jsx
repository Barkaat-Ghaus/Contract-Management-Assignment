import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import BlueprintCard from '../components/cards/BluePrintCard';

const Blueprints = () => {
    const { blueprints, deleteBlueprint } = useAppStore();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(blueprints.map(b => b.category || 'General'))];

    // Filter blueprints by category
    const filteredBlueprints = selectedCategory === 'All'
        ? blueprints
        : blueprints.filter(b => (b.category || 'General') === selectedCategory);

    const handleDeleteBlueprint = (id, name) => {
        if (window.confirm(`Are you sure you want to delete the blueprint "${name}"? This action cannot be undone.`)) {
            deleteBlueprint(id);
        }
    };

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
                        <BlueprintCard
                            key={blueprint.id}
                            blueprint={blueprint}
                            onDelete={handleDeleteBlueprint}
                            getFieldTypeBg={getFieldTypeBg}
                            getFieldTypeText={getFieldTypeText}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Blueprints;
