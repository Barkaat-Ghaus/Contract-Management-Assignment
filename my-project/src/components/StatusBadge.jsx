import React from 'react';
import { CONTRACT_STATUS } from '../utils/helpers';

const StatusBadge = ({ status }) => {
    const getStatusStyles = (s) => {
        switch (s) {
            case CONTRACT_STATUS.CREATED:
                return 'bg-gray-100 text-gray-800';
            case CONTRACT_STATUS.APPROVED:
                return 'bg-blue-100 text-blue-800';
            case CONTRACT_STATUS.SENT:
                return 'bg-amber-100 text-amber-800';
            case CONTRACT_STATUS.SIGNED:
                return 'bg-green-100 text-green-800';
            case CONTRACT_STATUS.LOCKED:
                return 'bg-red-100 text-red-800';
            case CONTRACT_STATUS.REVOKED:
                return 'bg-gray-100 text-gray-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusStyles(status)}`}>
            {status}
        </span>
    );
};

export default StatusBadge;
