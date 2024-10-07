import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import useCart from '../Hooks/useCart';

const Layout = () => {
    const location = useLocation();
    const hide = location.pathname === "/login" || location.pathname === '/signup'
    const cart =useCart();
    return (
        <div>
            {!hide && <Navbar cart={cart} />}
            <Outlet />
            {!hide && <Footer />}
        </div>
    );
};

export default Layout;