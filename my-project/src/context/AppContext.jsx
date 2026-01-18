import React, { createContext, useState, useContext, useEffect } from 'react';
import { generateId, CONTRACT_STATUS } from '../utils/helpers';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [blueprints, setBlueprints] = useState(() => {
        const saved = localStorage.getItem('blueprints');
        return saved ? JSON.parse(saved) : [];
    });

    const [contracts, setContracts] = useState(() => {
        const saved = localStorage.getItem('contracts');
        return saved ? JSON.parse(saved) : [];
    });

    // Persistence
    useEffect(() => {
        localStorage.setItem('blueprints', JSON.stringify(blueprints));
    }, [blueprints]);

    useEffect(() => {
        localStorage.setItem('contracts', JSON.stringify(contracts));
    }, [contracts]);

    const addBlueprint = (blueprint) => {
        setBlueprints([...blueprints, { ...blueprint, id: generateId(), createdAt: new Date() }]);
    };

    const addContract = (blueprintId, name) => {
        const blueprint = blueprints.find(b => b.id === blueprintId);
        if (!blueprint) return;

        const newContract = {
            id: generateId(),
            blueprintId,
            blueprintName: blueprint.name,
            name,
            status: CONTRACT_STATUS.CREATED, // Initial status
            fields: blueprint.fields.map(f => ({ ...f, value: '' })), // Inherit fields
            createdAt: new Date(),
            history: [{ status: CONTRACT_STATUS.CREATED, timestamp: new Date() }]
        };
        setContracts([...contracts, newContract]);
    };

    const updateContractData = (contractId, fieldId, value) => {
        setContracts(contracts.map(c => {
            if (c.id === contractId && c.status !== CONTRACT_STATUS.LOCKED) {
                const updatedFields = c.fields.map(f => f.id === fieldId ? { ...f, value } : f);
                return { ...c, fields: updatedFields };
            }
            return c;
        }));
    };

    const updateContractStatus = (contractId, newStatus) => {
        setContracts(contracts.map(c => {
            if (c.id === contractId) {
               
                return {
                    ...c,
                    status: newStatus,
                    history: [...c.history, { status: newStatus, timestamp: new Date() }]
                };
            }
            return c;
        }));
    };

    return (
        <AppContext.Provider value={{
            blueprints,
            contracts,
            addBlueprint,
            addContract,
            updateContractData,
            updateContractStatus
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);
