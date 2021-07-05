import m from 'mithril';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    return {
        view: ({children}) => (
            <div class="flex flex-col h-screen">
                <Header />
                <main class="p-4 flex-grow">{children}</main>
                <Footer />
            </div>
        )
    }
}

export default Layout;
