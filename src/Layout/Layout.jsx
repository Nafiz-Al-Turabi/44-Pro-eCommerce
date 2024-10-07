import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Layout = () => {
    const location = useLocation();
    const hide = location.pathname === "/login" || location.pathname === '/signup' || location.pathname === '/checkout'
    return (
        <div>
            {!hide && <Navbar />}
            <Outlet />
            {!hide && <Footer />}
        </div>
    );
};

export default Layout;