import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export const Layout = () => {
  return (
    <Wrapper>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Wrapper>
  );
};
