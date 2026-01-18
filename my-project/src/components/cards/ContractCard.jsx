import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../StatusBadge';
import { formatDate } from '../../utils/helpers';

const ContractCard = ({ contract }) => {

    return (
        <div className="card hover:shadow-lg transition cursor-pointer">
            <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-wrap">{contract.name}</h3>
                    <StatusBadge status={contract.status} />
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {contract.blueprintName}
                </p>
            </div>

            <div className="mb-4 pb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <div className="text-sm">
                    <div className="flex justify-between mb-2">
                        <span style={{ color: 'var(--text-secondary)' }}>Created</span>
                        <span className="font-medium">{formatDate(contract.createdAt)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span style={{ color: 'var(--text-secondary)' }}>Fields</span>
                        <span className="font-medium">{contract.fields.length}</span>
                    </div>
                </div>
            </div>

            <Link
                to={`/view-contract/${contract.id}`}
                className="btn btn-primary w-full text-center block"
            >
                View Contract
            </Link>
        </div>
    );
};

export default ContractCard;
