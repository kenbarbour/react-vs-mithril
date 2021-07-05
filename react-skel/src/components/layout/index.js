import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({children}) => (
    <div class="flex flex-col h-screen">
        <Header />
        <main class="p-4 flex-grow">{children}</main>
        <Footer />
    </div>
);

export default Layout;
