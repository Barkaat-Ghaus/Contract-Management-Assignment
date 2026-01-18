import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Aside from "./components/layout/Aside";

const App = () => {
  const location = useLocation();

  const getPageConfig = () => {
    const config = {
      '/': { title: 'Contracts', showButton: true },
      '/create-contract': { title: 'New Contract', showButton: false },
      '/create-blueprint': { title: 'Create Blueprint', showButton: false },
      '/blueprints': { title: 'Blueprints', showButton: true },
      '/archive': { title: 'Archive', showButton: false }
    };
    
    // Check if it's a view-contract route
    if (location.pathname.startsWith('/view-contract/')) {
      return { title: 'Contract Details', showButton: false };
    }
    
    return config[location.pathname] || { title: 'Overview', showButton: true };
  };

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'dashboard';
    if (path === '/create-contract') return 'create-contract';
    if (path === '/create-blueprint') return 'create-blueprint';
    if (path.startsWith('/view-contract/')) return 'view-contract';
    if (path === '/blueprints') return 'blueprints';
    if (path === '/archive') return 'archive';
    return 'dashboard';
  };

  const pageConfig = getPageConfig();
  const currentPage = getCurrentPage();

  return (
    <div className="flex h-screen overflow-hidden">
      <Aside currentPage={currentPage} />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header 
          pageTitle={pageConfig.title}
          showNewButton={pageConfig.showButton}
        />
        <Outlet />
      </main>
    </div>
  );
};

export default App;
