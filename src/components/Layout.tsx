// components/Layout.jsx

import Navbar from './Navbar';
import Footer from './Foo';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;