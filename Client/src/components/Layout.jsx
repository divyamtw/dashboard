import React from 'react';
import Aside from "./Aside.jsx";
import Dashboard from "../features/dashboard/Dashboard.jsx";

const Layout = () => {
    return (
        <div className="flex">
            <Aside/>
            <Dashboard/>
        </div>
    );
};

export default Layout;