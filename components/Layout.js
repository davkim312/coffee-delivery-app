import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <> { /* react fragment */ }
        <Navbar />
        {children} {/* 'children' comes from Layout as a pro above */}
        <Footer />
    </>
  );
};

export default Layout;