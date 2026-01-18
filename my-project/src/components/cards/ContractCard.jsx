import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../StatusBadge';
import { formatDate, CONTRACT_STATUS } from '../../utils/helpers';

const ContractCard = ({ contract }) => {
    const isBeforeSent = contract.status === CONTRACT_STATUS.CREATED || contract.status === CONTRACT_STATUS.APPROVED;

    return (
        <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-all duration-200 cursor-pointer">
            <div className="mb-5">
                <div className="flex justify-between items-start gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-black line-clamp-2">{contract.name}</h3>
                    </div>
                    <div className="">
                        <StatusBadge status={contract.status} />
                    </div>
                </div>
                <p className="text-sm text-gray-500 truncate">
                    {contract.blueprintName}
                </p>
            </div>

            <div className="mb-5 pb-5 border-b border-gray-200">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 font-medium">Created</span>
                        <span className="text-sm font-semibold text-gray-900">{formatDate(contract.createdAt)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 font-medium">Fields</span>
                        <span className="text-sm font-semibold text-gray-900">{contract.fields.length}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                {isBeforeSent && (
                    <Link
                        to={`/view-contract/${contract.id}`}
                        className="block w-full px-4 py-2.5 bg-gray-100 text-black text-sm rounded-lg text-center font-medium hover:bg-gray-200 transition-colors duration-150"
                    >
                        Edit
                    </Link>
                )}
                <Link
                    to={`/view-contract/${contract.id}`}
                    className="block w-full px-4 py-2.5 bg-black text-white text-sm rounded-lg text-center font-medium hover:bg-gray-800 transition-colors duration-150"
                >
                    View Contract
                </Link>
            </div>
        </div>
    );
};

export default ContractCard;
