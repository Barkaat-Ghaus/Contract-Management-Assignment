import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../StatusBadge';
import { formatDate } from '../../utils/helpers';
import { useAppStore } from '../../store/appStore';

const ContractCard = ({ contract }) => {
    const { deleteContract } = useAppStore();

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${contract.name}"? This action cannot be undone.`)) {
            deleteContract(contract.id);
        }
    };

    return (
        <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-lg transition">
            <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-black line-clamp-2">{contract.name}</h3>
                    <StatusBadge status={contract.status} />
                </div>
                <p className="text-sm text-gray-600">
                    {contract.blueprintName}
                </p>
            </div>

            <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="text-sm">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Created</span>
                        <span className="font-medium text-black">{formatDate(contract.createdAt)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Fields</span>
                        <span className="font-medium text-black">{contract.fields.length}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <Link
                    to={`/view-contract/${contract.id}`}
                    className="w-full flex items-center justify-center px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition"
                >
                    View Contract
                </Link>
                <button
                    onClick={handleDelete}
                    className="w-full px-4 py-2 border border-red-500 text-red-600 rounded-lg font-medium hover:bg-red-50 transition"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContractCard;
