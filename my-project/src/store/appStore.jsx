import { create } from 'zustand';
import { generateId, CONTRACT_STATUS } from '../utils/helpers';

export const useAppStore = create((set) => {
    // Initialize from localStorage
    const savedBlueprints = localStorage.getItem('blueprints');
    const savedContracts = localStorage.getItem('contracts');

    return {
        blueprints: savedBlueprints ? JSON.parse(savedBlueprints) : [],
        contracts: savedContracts ? JSON.parse(savedContracts) : [],

        addBlueprint: (blueprint) => set((state) => {
            const newBlueprints = [
                ...state.blueprints,
                { ...blueprint, id: generateId(), createdAt: new Date() }
            ];
            localStorage.setItem('blueprints', JSON.stringify(newBlueprints));
            return { blueprints: newBlueprints };
        }),

        addContract: (blueprintId, name) => set((state) => {
            const blueprint = state.blueprints.find(b => b.id === blueprintId);
            if (!blueprint) return state;

            const newContract = {
                id: generateId(),
                blueprintId,
                blueprintName: blueprint.name,
                name,
                status: CONTRACT_STATUS.CREATED,
                fields: blueprint.fields.map(f => ({ ...f, value: '' })),
                createdAt: new Date(),
                history: [{ status: CONTRACT_STATUS.CREATED, timestamp: new Date() }]
            };

            const newContracts = [...state.contracts, newContract];
            localStorage.setItem('contracts', JSON.stringify(newContracts));
            return { contracts: newContracts };
        }),

        updateContractData: (contractId, fieldId, value) => set((state) => {
            const newContracts = state.contracts.map(c => {
                if (c.id === contractId && c.status !== CONTRACT_STATUS.LOCKED) {
                    const updatedFields = c.fields.map(f => f.id === fieldId ? { ...f, value } : f);
                    return { ...c, fields: updatedFields };
                }
                return c;
            });
            localStorage.setItem('contracts', JSON.stringify(newContracts));
            return { contracts: newContracts };
        }),

        updateContractStatus: (contractId, newStatus) => set((state) => {
            const newContracts = state.contracts.map(c => {
                if (c.id === contractId) {
                    return {
                        ...c,
                        status: newStatus,
                        history: [...c.history, { status: newStatus, timestamp: new Date() }]
                    };
                }
                return c;
            });
            localStorage.setItem('contracts', JSON.stringify(newContracts));
            return { contracts: newContracts };
        })
    };
});
