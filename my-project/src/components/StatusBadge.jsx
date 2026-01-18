import React from 'react';
import { CONTRACT_STATUS } from '../utils/helpers';

const StatusBadge = ({ status }) => {
    const getStatusClass = (s) => {
        switch (s) {
            case CONTRACT_STATUS.CREATED: return 'status-pending'; // Reuse pending color for created
            case CONTRACT_STATUS.APPROVED: return 'status-active';
            case CONTRACT_STATUS.SENT: return 'status-pending';
            case CONTRACT_STATUS.SIGNED: return 'status-signed';
            case CONTRACT_STATUS.LOCKED: return 'status-locked';
            case CONTRACT_STATUS.REVOKED: return 'status-locked'; // Or red
            default: return 'status-pending';
        }
    };

    // Override specific colors if needed by class
    const className = `status-badge ${getStatusClass(status)}`;

    return (
        <span className={className}>
            {status}
        </span>
    );
};

export default StatusBadge;
