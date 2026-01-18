import React from "react";
import Header from "./components/layout/Header";
import Dashboard from "./pages/Dashbord";
import Aside from "./components/layout/Aside";

const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Aside />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
};

export default App;
