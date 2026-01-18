import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import Aside from "./components/layout/Aside";

const PAGE_CONFIG = {
  '/': { title: 'Contracts', showButton: true, page: 'dashboard' },
  '/create-contract': { title: 'New Contract', showButton: false, page: 'create-contract' },
  '/create-blueprint': { title: 'Create Blueprint', showButton: false, page: 'create-blueprint' },
  '/blueprints': { title: 'Blueprints', showButton: true, page: 'blueprints' },
  '/archive': { title: 'Archive', showButton: false, page: 'archive' },
  '/view-contract': { title: 'Contract Details', showButton: false, page: 'view-contract' },
};

const getPageConfig = (pathname) => {
  if (pathname.startsWith('/view-contract/')) {
    return PAGE_CONFIG['/view-contract'];
  }
  
  return PAGE_CONFIG[pathname] || { title: 'Overview', showButton: true, page: 'dashboard' };
};

const App = () => {
  const location = useLocation();
  const pageConfig = getPageConfig(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      <Aside currentPage={pageConfig.page} />
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
