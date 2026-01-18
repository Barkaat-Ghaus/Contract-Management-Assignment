import React from 'react';
import { Link } from 'react-router-dom';

const BlueprintCard = ({ blueprint, onDelete, getFieldTypeBg, getFieldTypeText }) => {
    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete the blueprint "${blueprint.name}"? This action cannot be undone.`)) {
            onDelete(blueprint.id, blueprint.name);
        }
    };

    return (
        <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-all duration-200">
            <div className="mb-5">
                <div className="flex justify-between items-start gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-black line-clamp-2">{blueprint.name}</h3>
                    </div>
                    <span className=" text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
                        {blueprint.category || 'General'}
                    </span>
                </div>
                {blueprint.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">
                        {blueprint.description}
                    </p>
                )}
            </div>

            <div className="mb-5 pb-5 border-b border-gray-200">
                <p className="text-xs font-semibold mb-3 uppercase text-gray-500 tracking-wide">
                    Fields ({blueprint.fields.length})
                </p>
                <div className="flex flex-wrap gap-2">
                    {blueprint.fields.map(field => (
    
                        <span 
                            key={field.id} 
                            className={`text-xs px-2.5 py-1 rounded font-medium ${getFieldTypeBg(field.label)} ${getFieldTypeText(field.type)}`}
                        >
                            {field.type}
                        </span>
                    ))}
                </div>
            </div>

            <div className="space-y-2.5">
                <Link
                    to={`/create-contract?blueprintId=${blueprint.id}`}
                    className="block w-full px-4 py-2.5 bg-black text-white text-sm rounded-lg text-center font-medium hover:bg-gray-800 transition-colors duration-150"
                >
                    Create Contract
                </Link>
                <button
                    className="w-full px-4 py-2.5 border border-gray-300 text-black text-sm rounded-lg font-medium hover:bg-gray-50 transition-colors duration-150"
                    onClick={() => {
                        const details = blueprint.fields.map(f => `${f.label || f.name} (${f.type})`).join(', ');
                        alert(`Blueprint Details:\n\n${details}`);
                    }}
                >
                    View Details
                </button>
                <button
                    className="w-full px-4 py-2.5 border border-red-300 bg-red-50 text-red-600 text-sm rounded-lg font-medium hover:bg-red-100 transition-colors duration-150"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BlueprintCard;
