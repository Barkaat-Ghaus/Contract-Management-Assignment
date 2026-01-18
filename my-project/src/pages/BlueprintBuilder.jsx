import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import {  generateId,FIELD_TYPES } from '../utils/helpers';

const BlueprintBuilder = () => {
    const { addBlueprint } = useAppStore();
    const [name, setName] = useState('');
    const [fields, setFields] = useState([]);

    const [currentLabel, setCurrentLabel] = useState('');
    const [currentType, setCurrentType] = useState(FIELD_TYPES.TEXT);

    const handleAddField = () => {
        const trimmedLabel = currentLabel.trim();
        if (!trimmedLabel) return;
        setFields([...fields, {
            id: generateId(),
            label: trimmedLabel,
            type: currentType,
            required: false
        }]);
        setCurrentLabel('');
        setCurrentType(FIELD_TYPES.TEXT);
    };

    const removeField = (id) => {
        setFields(fields.filter(f => f.id !== id));
    };

    const handleSave = () => {
        if (!name || fields.length === 0) return;
        addBlueprint({ name, fields });
        setName('');
        setFields([]);
        alert('Blueprint created successfully!');
    };

    return (
        <div className="fade-in flex-1 overflow-auto p-8 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <Link to="/" className="inline-block px-3 py-2 border border-gray-300 rounded-lg text-black font-medium hover:bg-gray-50 transition">&larr; Back</Link>
                    <button
                        className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
                        onClick={handleSave}
                        disabled={!name || fields.length === 0}
                    >
                        Save Blueprint
                    </button>
                </div>

                <div className="border border-gray-200 rounded-lg p-6 bg-white mb-8">
                    <label className="block mb-2 font-medium text-black">Blueprint Name</label>
                    <input
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:border-black"
                        placeholder="e.g. Non-Disclosure Agreement"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-black mb-4">Add Field</h3>
                        <div className="border border-gray-200 rounded-lg p-6 bg-white">
                            <label className="block mb-2 font-medium text-black text-sm">Field Label</label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black mb-4 focus:outline-none focus:border-black"
                                placeholder="e.g. Employee Name"
                                value={currentLabel}
                                onChange={(e) => setCurrentLabel(e.target.value)}
                            />

                            <label className="block mb-2 font-medium text-black text-sm">Field Type</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-black mb-4 focus:outline-none focus:border-black"
                                value={currentType}
                                onChange={(e) => setCurrentType(e.target.value)}
                            >
                                {Object.values(FIELD_TYPES).map(t => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>

                            <button 
                                className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg font-medium hover:bg-gray-50 transition disabled:opacity-50 disabled:cursor-not-allowed" 
                                onClick={handleAddField}
                                disabled={!currentLabel.trim()}
                            >
                                Add Field
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-4">Preview</h3>
                        <div className="border border-gray-200 rounded-lg bg-white p-6 min-h-96">
                            {fields.length === 0 ? (
                                <p className="text-center mt-8 text-gray-600">No fields added yet.</p>
                            ) : (
                                <div className="space-y-3">
                                    {fields.map((field, index) => (
                                        <div key={field.id} className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm font-semibold text-gray-900">{index + 1}. {field.label}</span>
                                                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded font-medium">{field.type}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeField(field.id)}
                                                className="text-red-600 hover:text-red-700 font-semibold text-lg leading-none"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlueprintBuilder;
