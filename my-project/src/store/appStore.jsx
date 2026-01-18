import { create } from 'zustand';
import { generateId, CONTRACT_STATUS } from '../utils/helpers';
import { DEMO_BLUEPRINTS, DEMO_CONTRACTS } from '../models/demoData';

export const useAppStore = create((set) => {

    const savedBlueprints = localStorage.getItem('blueprints');
    const savedContracts = localStorage.getItem('contracts');

   
    let initialBlueprints = DEMO_BLUEPRINTS;
    let initialContracts = DEMO_CONTRACTS;

    try {
        if (savedBlueprints) {
            const parsed = JSON.parse(savedBlueprints);
            if (Array.isArray(parsed) && parsed.length > 0) {
                initialBlueprints = parsed;
            }
        }
        if (savedContracts) {
            const parsed = JSON.parse(savedContracts);
            if (Array.isArray(parsed) && parsed.length > 0) {
                initialContracts = parsed;
            }
        }
    } catch (error) {
        console.error('Error parsing localStorage:', error);
    }

    return {
        blueprints: initialBlueprints,
        contracts: initialContracts,

        resetToDemo: () => set(() => ({
            blueprints: DEMO_BLUEPRINTS,
            contracts: DEMO_CONTRACTS
        })),

        addBlueprint: (blueprint) => set((state) => {
            const newBlueprints = [
                ...state.blueprints,
                { ...blueprint, id: generateId(), createdAt: new Date() }
            ];
            localStorage.setItem('blueprints', JSON.stringify(newBlueprints));
            return { blueprints: newBlueprints };
        }),

        addContract: (blueprintId, name) => {
            let newContractId = null;
            set((state) => {
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

                newContractId = newContract.id;
                const newContracts = [...state.contracts, newContract];
                localStorage.setItem('contracts', JSON.stringify(newContracts));
                return { contracts: newContracts };
            });
            return newContractId;
        },

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
        }),

        deleteContract: (contractId) => set((state) => {
            const newContracts = state.contracts.filter(c => c.id !== contractId);
            localStorage.setItem('contracts', JSON.stringify(newContracts));
            return { contracts: newContracts };
        }),

        deleteBlueprint: (blueprintId) => set((state) => {
            const newBlueprints = state.blueprints.filter(b => b.id !== blueprintId);
            localStorage.setItem('blueprints', JSON.stringify(newBlueprints));
            return { blueprints: newBlueprints };
        }),

        updateBlueprint: (blueprintId, updatedData) => set((state) => {
            const newBlueprints = state.blueprints.map(b => 
                b.id === blueprintId ? { ...b, ...updatedData } : b
            );
            localStorage.setItem('blueprints', JSON.stringify(newBlueprints));
            return { blueprints: newBlueprints };
        })
    };
});
