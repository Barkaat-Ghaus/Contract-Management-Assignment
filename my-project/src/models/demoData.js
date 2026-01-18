import { FIELD_TYPES, CONTRACT_STATUS } from '../utils/helpers';

// Demo Blueprints - Different types for contract creation
export const DEMO_BLUEPRINTS = [
  {
    id: 'bp-nda',
    name: 'Non-Disclosure Agreement (NDA)',
    description: 'Standard confidentiality agreement',
    category: 'Legal',
    fields: [
      { id: 'f1', label: 'Disclosing Party', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Receiving Party', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Effective Date', type: FIELD_TYPES.DATE, required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Confidentiality Period (Years)', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'Mutual NDA', type: FIELD_TYPES.CHECKBOX, required: false, positionX: 20, positionY: 260 },
      { id: 'f6', label: 'Authorized Signature', type: FIELD_TYPES.SIGNATURE, required: true, positionX: 20, positionY: 320 },
    ]
  },
  {
    id: 'bp-employment',
    name: 'Employment Agreement',
    description: 'Standard employment contract',
    category: 'HR',
    fields: [
      { id: 'f1', label: 'Employee Name', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Position', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Start Date', type: FIELD_TYPES.DATE, required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Annual Salary', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'Department', type: FIELD_TYPES.TEXT, required: true, positionX: 300, positionY: 20 },
      { id: 'f6', label: 'Benefits', type: FIELD_TYPES.CHECKBOX, options: ['Health Insurance', 'Dental', '401(k)', 'Paid Time Off'], required: false, positionX: 300, positionY: 80 },
      { id: 'f7', label: 'Employee Signature', type: FIELD_TYPES.SIGNATURE, required: true, positionX: 20, positionY: 260 },
      { id: 'f8', label: 'Employer Signature', type: FIELD_TYPES.SIGNATURE, required: true, positionX: 300, positionY: 260 },
    ]
  },
  {
    id: 'bp-service',
    name: 'Service Agreement',
    description: 'Professional services contract',
    category: 'Business',
    fields: [
      { id: 'f1', label: 'Service Provider', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Client Name', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Service Description', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Start Date', type: FIELD_TYPES.DATE, required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'End Date', type: FIELD_TYPES.DATE, required: true, positionX: 300, positionY: 200 },
      { id: 'f6', label: 'Fee Amount', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 260 },
      { id: 'f7', label: 'Payment Terms', type: FIELD_TYPES.TEXT, required: true, positionX: 300, positionY: 260 },
      { id: 'f8', label: 'Provider Signature', type: FIELD_TYPES.SIGNATURE, required: true, positionX: 20, positionY: 320 },
      { id: 'f9', label: 'Client Signature', type: FIELD_TYPES.SIGNATURE, required: true, positionX: 300, positionY: 320 },
    ]
  },
  {
    id: 'bp-vendor',
    name: 'Vendor Agreement',
    description: 'Supplier and vendor terms',
    category: 'Procurement',
    fields: [
      { id: 'f1', label: 'Vendor Name', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Company Name', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Product/Service', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Contract Duration (Months)', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'Payment Terms', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 260 },
      { id: 'f6', label: 'Renewal Terms', type: FIELD_TYPES.CHECKBOX, required: false, positionX: 300, positionY: 20 },
      { id: 'f7', label: 'Authorized Signature', type: FIELD_TYPES.SIGNATURE, required: true, positionX: 20, positionY: 320 },
    ]
  },
  {
    id: 'bp-lease',
    name: 'Lease Agreement',
    description: 'Property lease terms',
    category: 'Real Estate',
    fields: [
      { id: 'f1', label: 'Landlord Name', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Tenant Name', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Property Address', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Lease Start Date', type: FIELD_TYPES.DATE, required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'Lease End Date', type: FIELD_TYPES.DATE, required: true, positionX: 300, positionY: 200 },
      { id: 'f6', label: 'Monthly Rent', type: FIELD_TYPES.TEXT, required: true, positionX: 20, positionY: 260 },
      { id: 'f7', label: 'Security Deposit', type: FIELD_TYPES.TEXT, required: true, positionX: 300, positionY: 260 },
      { id: 'f8', label: 'Landlord Signature', type: FIELD_TYPES.SIGNATURE, required: true, positionX: 20, positionY: 320 },
      { id: 'f9', label: 'Tenant Signature', type: FIELD_TYPES.SIGNATURE, required: true, positionX: 300, positionY: 320 },
    ]
  },
];

// Demo Contracts - Sample data for dashboard
export const DEMO_CONTRACTS = [
  {
    id: 'contract-1',
    blueprintId: 'bp-nda',
    blueprintName: 'Non-Disclosure Agreement (NDA)',
    name: 'Acme Corp NDA',
    status: CONTRACT_STATUS.CREATED,
    createdAt: new Date('2026-01-10'),
    fields: [
      { id: 'f1', label: 'Disclosing Party', type: FIELD_TYPES.TEXT, value: 'Acme Corporation', required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Receiving Party', type: FIELD_TYPES.TEXT, value: 'Tech Solutions Inc.', required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Effective Date', type: FIELD_TYPES.DATE, value: '2026-01-15', required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Confidentiality Period (Years)', type: FIELD_TYPES.TEXT, value: '3', required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'Mutual NDA', type: FIELD_TYPES.CHECKBOX, value: 'true', required: false, positionX: 20, positionY: 260 },
      { id: 'f6', label: 'Authorized Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true, positionX: 20, positionY: 320 },
    ],
    history: [
      { status: CONTRACT_STATUS.CREATED, timestamp: new Date('2026-01-10') }
    ]
  },
  {
    id: 'contract-2',
    blueprintId: 'bp-employment',
    blueprintName: 'Employment Agreement',
    name: 'John Smith Employment',
    status: CONTRACT_STATUS.APPROVED,
    createdAt: new Date('2026-01-08'),
    fields: [
      { id: 'f1', label: 'Employee Name', type: FIELD_TYPES.TEXT, value: 'John Smith', required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Position', type: FIELD_TYPES.TEXT, value: 'Senior Developer', required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Start Date', type: FIELD_TYPES.DATE, value: '2026-02-01', required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Annual Salary', type: FIELD_TYPES.TEXT, value: '$120,000', required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'Department', type: FIELD_TYPES.TEXT, value: 'Engineering', required: true, positionX: 300, positionY: 20 },
      { id: 'f6', label: 'Benefits', type: FIELD_TYPES.CHECKBOX, options: ['Health Insurance', 'Dental', '401(k)', 'Paid Time Off'], value: 'Health Insurance, 401(k)', required: false, positionX: 300, positionY: 80 },
      { id: 'f7', label: 'Employee Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true, positionX: 20, positionY: 260 },
      { id: 'f8', label: 'Employer Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true, positionX: 300, positionY: 260 },
    ],
    history: [
      { status: CONTRACT_STATUS.CREATED, timestamp: new Date('2026-01-08') },
      { status: CONTRACT_STATUS.APPROVED, timestamp: new Date('2026-01-09') }
    ]
  },
  {
    id: 'contract-3',
    blueprintId: 'bp-service',
    blueprintName: 'Service Agreement',
    name: 'Marketing Agency Contract',
    status: CONTRACT_STATUS.SENT,
    createdAt: new Date('2026-01-05'),
    fields: [
      { id: 'f1', label: 'Service Provider', type: FIELD_TYPES.TEXT, value: 'Digital Marketing Pro', required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Client Name', type: FIELD_TYPES.TEXT, value: 'Global Retail Corp', required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Service Description', type: FIELD_TYPES.TEXT, value: 'Social Media & SEO Services', required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Start Date', type: FIELD_TYPES.DATE, value: '2026-02-01', required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'End Date', type: FIELD_TYPES.DATE, value: '2026-12-31', required: true, positionX: 300, positionY: 200 },
      { id: 'f6', label: 'Fee Amount', type: FIELD_TYPES.TEXT, value: '$5,000/month', required: true, positionX: 20, positionY: 260 },
      { id: 'f7', label: 'Payment Terms', type: FIELD_TYPES.TEXT, value: 'Monthly, due 15th', required: true, positionX: 300, positionY: 260 },
      { id: 'f8', label: 'Provider Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true, positionX: 20, positionY: 320 },
      { id: 'f9', label: 'Client Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true, positionX: 300, positionY: 320 },
    ],
    history: [
      { status: CONTRACT_STATUS.CREATED, timestamp: new Date('2026-01-05') },
      { status: CONTRACT_STATUS.APPROVED, timestamp: new Date('2026-01-06') },
      { status: CONTRACT_STATUS.SENT, timestamp: new Date('2026-01-07') }
    ]
  },
  {
    id: 'contract-4',
    blueprintId: 'bp-lease',
    blueprintName: 'Lease Agreement',
    name: 'Downtown Office Lease',
    status: CONTRACT_STATUS.SIGNED,
    createdAt: new Date('2026-01-01'),
    fields: [
      { id: 'f1', label: 'Landlord Name', type: FIELD_TYPES.TEXT, value: 'Property Management LLC', required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Tenant Name', type: FIELD_TYPES.TEXT, value: 'StartUp Inc.', required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Property Address', type: FIELD_TYPES.TEXT, value: '123 Main St, Suite 500', required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Lease Start Date', type: FIELD_TYPES.DATE, value: '2026-02-01', required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'Lease End Date', type: FIELD_TYPES.DATE, value: '2029-01-31', required: true, positionX: 300, positionY: 200 },
      { id: 'f6', label: 'Monthly Rent', type: FIELD_TYPES.TEXT, value: '$8,500', required: true, positionX: 20, positionY: 260 },
      { id: 'f7', label: 'Security Deposit', type: FIELD_TYPES.TEXT, value: '$25,500', required: true, positionX: 300, positionY: 260 },
      { id: 'f8', label: 'Landlord Signature', type: FIELD_TYPES.SIGNATURE, value: 'PM LLC Agent', required: true, positionX: 20, positionY: 320 },
      { id: 'f9', label: 'Tenant Signature', type: FIELD_TYPES.SIGNATURE, value: 'CEO Signature', required: true, positionX: 300, positionY: 320 },
    ],
    history: [
      { status: CONTRACT_STATUS.CREATED, timestamp: new Date('2026-01-01') },
      { status: CONTRACT_STATUS.APPROVED, timestamp: new Date('2026-01-02') },
      { status: CONTRACT_STATUS.SENT, timestamp: new Date('2026-01-03') },
      { status: CONTRACT_STATUS.SIGNED, timestamp: new Date('2026-01-04') }
    ]
  },
    {
    id: 'contract-1',
    blueprintId: 'bp-nda',
    blueprintName: 'Non-Disclosure Agreement (NDA)',
    name: 'Acme Corp NDA',
    status: CONTRACT_STATUS.CREATED,
    createdAt: new Date('2026-01-10'),
    fields: [
      { id: 'f1', label: 'Disclosing Party', type: FIELD_TYPES.TEXT, value: 'Acme Corporation', required: true, positionX: 20, positionY: 20 },
      { id: 'f2', label: 'Receiving Party', type: FIELD_TYPES.TEXT, value: 'Tech Solutions Inc.', required: true, positionX: 20, positionY: 80 },
      { id: 'f3', label: 'Effective Date', type: FIELD_TYPES.DATE, value: '2026-01-15', required: true, positionX: 20, positionY: 140 },
      { id: 'f4', label: 'Confidentiality Period (Years)', type: FIELD_TYPES.TEXT, value: '3', required: true, positionX: 20, positionY: 200 },
      { id: 'f5', label: 'Mutual NDA', type: FIELD_TYPES.CHECKBOX, value: 'true', required: false, positionX: 20, positionY: 260 },
      { id: 'f6', label: 'Authorized Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true, positionX: 20, positionY: 320 },
    ],
    history: [
      { status: CONTRACT_STATUS.CREATED, timestamp: new Date('2026-01-10') }
    ]
  },
];
