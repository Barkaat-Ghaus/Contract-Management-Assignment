import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import { generateId, FIELD_TYPES } from '../utils/helpers';

const BlueprintBuilder = () => {
    const { addBlueprint } = useAppStore();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [fields, setFields] = useState([]);

    // Field creation state
    const [currentLabel, setCurrentLabel] = useState('');
    const [currentType, setCurrentType] = useState(FIELD_TYPES.TEXT);

    const handleAddField = () => {
        if (!currentLabel) return;
        setFields([...fields, {
            id: generateId(),
            label: currentLabel,
            type: currentType,
            position: fields.length + 1 // Simple ordering
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
        navigate('/');
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

                            <button className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg font-medium hover:bg-gray-50 transition" onClick={handleAddField}>
                                Add Field
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-black mb-4">Preview</h3>
                        <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-96">
                            {fields.length === 0 ? (
                                <p className="text-center mt-8 text-gray-600">No fields added yet.</p>
                            ) : (
                                fields.map((field, index) => (
                                    <div key={field.id} className="pb-4 mb-4 border-b border-gray-200 last:border-b-0">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs text-gray-600">{field.type}</span>
                                            <button
                                                onClick={() => removeField(field.id)}
                                                className="bg-none border-none text-xl leading-none cursor-pointer text-red-600 hover:text-red-700"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className="font-medium text-black">{field.label}</div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlueprintBuilder;
