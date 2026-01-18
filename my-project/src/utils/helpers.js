export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const CONTRACT_STATUS = {
  CREATED: 'Created',
  APPROVED: 'Approved',
  SENT: 'Sent',
  SIGNED: 'Signed',
  LOCKED: 'Locked',
  REVOKED: 'Revoked',
};

export const FIELD_TYPES = {
  TEXT: 'Text',
  DATE: 'Date',
  SIGNATURE: 'Signature',
  CHECKBOX: 'Checkbox',
};
