import { FIELD_TYPES, CONTRACT_STATUS } from '../utils/helpers';

// Demo Blueprints - Different types for contract creation
export const DEMO_BLUEPRINTS = [
  {
    id: 'bp-nda',
    name: 'Non-Disclosure Agreement (NDA)',
    description: 'Standard confidentiality agreement',
    category: 'Legal',
    fields: [
      { id: 'f1', name: 'Disclosing Party', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f2', name: 'Receiving Party', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f3', name: 'Effective Date', type: FIELD_TYPES.DATE, required: true },
      { id: 'f4', name: 'Confidentiality Period (Years)', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f5', name: 'Mutual NDA', type: FIELD_TYPES.CHECKBOX, required: false },
      { id: 'f6', name: 'Authorized Signature', type: FIELD_TYPES.SIGNATURE, required: true },
    ]
  },
  {
    id: 'bp-employment',
    name: 'Employment Agreement',
    description: 'Standard employment contract',
    category: 'HR',
    fields: [
      { id: 'f1', name: 'Employee Name', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f2', name: 'Position', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f3', name: 'Start Date', type: FIELD_TYPES.DATE, required: true },
      { id: 'f4', name: 'Annual Salary', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f5', name: 'Department', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f6', name: 'Full-time Position', type: FIELD_TYPES.CHECKBOX, required: false },
      { id: 'f7', name: 'Employee Signature', type: FIELD_TYPES.SIGNATURE, required: true },
      { id: 'f8', name: 'Employer Signature', type: FIELD_TYPES.SIGNATURE, required: true },
    ]
  },
  {
    id: 'bp-service',
    name: 'Service Agreement',
    description: 'Professional services contract',
    category: 'Business',
    fields: [
      { id: 'f1', name: 'Service Provider', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f2', name: 'Client Name', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f3', name: 'Service Description', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f4', name: 'Start Date', type: FIELD_TYPES.DATE, required: true },
      { id: 'f5', name: 'End Date', type: FIELD_TYPES.DATE, required: true },
      { id: 'f6', name: 'Fee Amount', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f7', name: 'Payment Terms', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f8', name: 'Provider Signature', type: FIELD_TYPES.SIGNATURE, required: true },
      { id: 'f9', name: 'Client Signature', type: FIELD_TYPES.SIGNATURE, required: true },
    ]
  },
  {
    id: 'bp-vendor',
    name: 'Vendor Agreement',
    description: 'Supplier and vendor terms',
    category: 'Procurement',
    fields: [
      { id: 'f1', name: 'Vendor Name', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f2', name: 'Company Name', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f3', name: 'Product/Service', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f4', name: 'Contract Duration (Months)', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f5', name: 'Payment Terms', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f6', name: 'Renewal Terms', type: FIELD_TYPES.CHECKBOX, required: false },
      { id: 'f7', name: 'Authorized Signature', type: FIELD_TYPES.SIGNATURE, required: true },
    ]
  },
  {
    id: 'bp-lease',
    name: 'Lease Agreement',
    description: 'Property lease terms',
    category: 'Real Estate',
    fields: [
      { id: 'f1', name: 'Landlord Name', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f2', name: 'Tenant Name', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f3', name: 'Property Address', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f4', name: 'Lease Start Date', type: FIELD_TYPES.DATE, required: true },
      { id: 'f5', name: 'Lease End Date', type: FIELD_TYPES.DATE, required: true },
      { id: 'f6', name: 'Monthly Rent', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f7', name: 'Security Deposit', type: FIELD_TYPES.TEXT, required: true },
      { id: 'f8', name: 'Landlord Signature', type: FIELD_TYPES.SIGNATURE, required: true },
      { id: 'f9', name: 'Tenant Signature', type: FIELD_TYPES.SIGNATURE, required: true },
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
      { id: 'f1', name: 'Disclosing Party', type: FIELD_TYPES.TEXT, value: 'Acme Corporation', required: true },
      { id: 'f2', name: 'Receiving Party', type: FIELD_TYPES.TEXT, value: 'Tech Solutions Inc.', required: true },
      { id: 'f3', name: 'Effective Date', type: FIELD_TYPES.DATE, value: '2026-01-15', required: true },
      { id: 'f4', name: 'Confidentiality Period (Years)', type: FIELD_TYPES.TEXT, value: '3', required: true },
      { id: 'f5', name: 'Mutual NDA', type: FIELD_TYPES.CHECKBOX, value: 'true', required: false },
      { id: 'f6', name: 'Authorized Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true },
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
      { id: 'f1', name: 'Employee Name', type: FIELD_TYPES.TEXT, value: 'John Smith', required: true },
      { id: 'f2', name: 'Position', type: FIELD_TYPES.TEXT, value: 'Senior Developer', required: true },
      { id: 'f3', name: 'Start Date', type: FIELD_TYPES.DATE, value: '2026-02-01', required: true },
      { id: 'f4', name: 'Annual Salary', type: FIELD_TYPES.TEXT, value: '$120,000', required: true },
      { id: 'f5', name: 'Department', type: FIELD_TYPES.TEXT, value: 'Engineering', required: true },
      { id: 'f6', name: 'Full-time Position', type: FIELD_TYPES.CHECKBOX, value: 'true', required: false },
      { id: 'f7', name: 'Employee Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true },
      { id: 'f8', name: 'Employer Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true },
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
      { id: 'f1', name: 'Service Provider', type: FIELD_TYPES.TEXT, value: 'Digital Marketing Pro', required: true },
      { id: 'f2', name: 'Client Name', type: FIELD_TYPES.TEXT, value: 'Global Retail Corp', required: true },
      { id: 'f3', name: 'Service Description', type: FIELD_TYPES.TEXT, value: 'Social Media & SEO Services', required: true },
      { id: 'f4', name: 'Start Date', type: FIELD_TYPES.DATE, value: '2026-02-01', required: true },
      { id: 'f5', name: 'End Date', type: FIELD_TYPES.DATE, value: '2026-12-31', required: true },
      { id: 'f6', name: 'Fee Amount', type: FIELD_TYPES.TEXT, value: '$5,000/month', required: true },
      { id: 'f7', name: 'Payment Terms', type: FIELD_TYPES.TEXT, value: 'Monthly, due 15th', required: true },
      { id: 'f8', name: 'Provider Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true },
      { id: 'f9', name: 'Client Signature', type: FIELD_TYPES.SIGNATURE, value: '', required: true },
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
      { id: 'f1', name: 'Landlord Name', type: FIELD_TYPES.TEXT, value: 'Property Management LLC', required: true },
      { id: 'f2', name: 'Tenant Name', type: FIELD_TYPES.TEXT, value: 'StartUp Inc.', required: true },
      { id: 'f3', name: 'Property Address', type: FIELD_TYPES.TEXT, value: '123 Main St, Suite 500', required: true },
      { id: 'f4', name: 'Lease Start Date', type: FIELD_TYPES.DATE, value: '2026-02-01', required: true },
      { id: 'f5', name: 'Lease End Date', type: FIELD_TYPES.DATE, value: '2029-01-31', required: true },
      { id: 'f6', name: 'Monthly Rent', type: FIELD_TYPES.TEXT, value: '$8,500', required: true },
      { id: 'f7', name: 'Security Deposit', type: FIELD_TYPES.TEXT, value: '$25,500', required: true },
      { id: 'f8', name: 'Landlord Signature', type: FIELD_TYPES.SIGNATURE, value: 'PM LLC Agent', required: true },
      { id: 'f9', name: 'Tenant Signature', type: FIELD_TYPES.SIGNATURE, value: 'CEO Signature', required: true },
    ],
    history: [
      { status: CONTRACT_STATUS.CREATED, timestamp: new Date('2026-01-01') },
      { status: CONTRACT_STATUS.APPROVED, timestamp: new Date('2026-01-02') },
      { status: CONTRACT_STATUS.SENT, timestamp: new Date('2026-01-03') },
      { status: CONTRACT_STATUS.SIGNED, timestamp: new Date('2026-01-04') }
    ]
  },
];
