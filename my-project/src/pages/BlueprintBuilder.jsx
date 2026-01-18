import React, { useState } from 'react';
import { useAppStore } from '../store/appStore';
import { generateId, FIELD_TYPES } from '../utils/helpers';

const BlueprintBuilder = ({ onNavigate }) => {
    const { addBlueprint } = useAppStore();
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
        onNavigate('dashboard');
    };

    return (
        <div className="fade-in flex-1 overflow-auto p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <button className="btn btn-secondary" onClick={() => onNavigate('dashboard')}>&larr; Back</button>
                    <button
                        className="btn btn-primary"
                        onClick={handleSave}
                        disabled={!name || fields.length === 0}
                    >
                        Save Blueprint
                    </button>
                </div>

                <div className="card mb-8">
                    <label className="block mb-2 font-medium">Blueprint Name</label>
                    <input
                        className="input"
                        placeholder="e.g. Non-Disclosure Agreement"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="mb-4">Add Field</h3>
                        <div className="card">
                            <label className="block mb-2 text-sm">Field Label</label>
                            <input
                                className="input"
                                placeholder="e.g. Employee Name"
                                value={currentLabel}
                                onChange={(e) => setCurrentLabel(e.target.value)}
                            />

                            <label className="block mb-2 text-sm mt-4">Field Type</label>
                            <select
                                className="select"
                                value={currentType}
                                onChange={(e) => setCurrentType(e.target.value)}
                            >
                                {Object.values(FIELD_TYPES).map(t => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>

                            <button className="btn btn-secondary w-full mt-4" onClick={handleAddField}>
                                Add Field
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4">Preview</h3>
                        <div className="card min-h-96">
                            {fields.length === 0 ? (
                                <p className="text-center mt-8" style={{ color: 'var(--text-secondary)' }}>No fields added yet.</p>
                            ) : (
                                fields.map((field, index) => (
                                    <div key={field.id} className="field-preview">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>{field.type}</span>
                                            <button
                                                onClick={() => removeField(field.id)}
                                                className="bg-none border-none text-xl leading-none cursor-pointer" style={{ color: 'var(--danger)' }}
                                            >
                                                &times;
                                            </button>
                                        </div>
                                        <div className="font-medium">{field.label}</div>
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
