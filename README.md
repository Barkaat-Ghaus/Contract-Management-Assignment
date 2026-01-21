# Contract Management Platform

## Overview
This is a frontend-only Contract Management Platform built as part of a frontend assignment.  
The application allows users to create reusable contract blueprints, generate contracts from those blueprints, manage contract lifecycles, and view contracts in a dashboard.

## Why I Chose This Tech Stack
I chose this tech stack because I have hands-on experience with these tools. I am comfortable using them and possess the knowledge required to build a web application confidently. Additionally, this stack is highly efficient, making the development and design process seamles

## Tech Stack
- React (Vite) npm i create Vite@latest
- JavaScript
- Tailwind CSS (styling) npm install tailwindcss @tailwindcss/vite
- Zustand (state management) npm i Zustand
- React-Router-Dom npm i react-router-dom

Note:- Leveraged online tools for gathering demo data and  building UI/UX .

---

## Features Implemented

### 1. Blueprint Management
- Create reusable contract blueprints
- Add configurable fields to a blueprint
- Supported field types:
  - Text
  - Date
  - Checkbox
  - Signature (basic placeholder)
- Store field metadata:
  - Type
  - Label
  - Position (basic)

---

### 2. Contract Creation from Blueprint
- Select an existing blueprint
- Generate a contract from the selected blueprint
- Contract inherits all fields from the blueprint
- Users can fill values for contract fields
- Blueprint structure remains unchanged

---

### 3. Contract Lifecycle Management
Each contract follows a controlled lifecycle:

Created → Approved → Sent → Signed → Locked  
Revoked (can occur after creation or sending)

Rules enforced:
- Lifecycle steps cannot be skipped
- Locked contracts cannot be edited
- Revoked contracts cannot proceed further
- UI clearly shows current status and allowed actions

---

### 4. Contract Dashboard
- Display contracts in a table view
- Show:
  - Contract name
  - Blueprint name
  - Status
  - Created date
- Filter contracts by status
- Perform lifecycle actions from the dashboard

---

## Application Flow
1. User creates a blueprint with fields
2. User selects a blueprint to create a contract
3. Contract is generated with status `Created`
4. User fills values for contract fields
5. Contract progresses through lifecycle states
6. All contracts are visible and manageable in the dashboard

---

## State Management
- Zustand is used for global state management
- The store handles:
  - Blueprints
  - Contracts
  - Contract lifecycle status
- Lifecycle transition rules are centralized to prevent invalid state changes





