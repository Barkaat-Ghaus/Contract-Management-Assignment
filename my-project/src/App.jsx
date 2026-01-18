import React, { useState } from "react";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashboard";
import ContractView from "./pages/ContractView";
import ContractCreator from "./pages/ContractCreator";
import BlueprintBuilder from "./pages/BlueprintBuilder";
import Aside from "./components/layout/Aside";

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedContractId, setSelectedContractId] = useState(null);

  const handleNavigate = (page, id) => {
    setCurrentPage(page);
    if (id) setSelectedContractId(id);
  };

  const getPageConfig = () => {
    const config = {
      'dashboard': { title: 'Contracts', showButton: true },
      'create-contract': { title: 'New Contract', showButton: false },
      'create-blueprint': { title: 'Create Blueprint', showButton: false },
      'view-contract': { title: 'Contract Details', showButton: false },
      'blueprints': { title: 'Blueprints', showButton: true },
      'archive': { title: 'Archive', showButton: false }
    };
    return config[currentPage] || { title: 'Overview', showButton: true };
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'view-contract':
        return <ContractView contractId={selectedContractId} onNavigate={handleNavigate} />;
      case 'create-contract':
        return <ContractCreator onNavigate={handleNavigate} />;
      case 'create-blueprint':
        return <BlueprintBuilder onNavigate={handleNavigate} />;
      case 'blueprints':
        return <Dashboard onNavigate={handleNavigate} />;
      case 'archive':
        return <div className="fade-in p-8">Archive page coming soon</div>;
      default:
        return <Dashboard onNavigate={handleNavigate} />;
    }
  };

  const pageConfig = getPageConfig();

  return (
    <div className="flex h-screen overflow-hidden">
      <Aside currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header 
          pageTitle={pageConfig.title} 
          onNewContract={() => handleNavigate('create-contract')}
          showNewButton={pageConfig.showButton}
        />
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
