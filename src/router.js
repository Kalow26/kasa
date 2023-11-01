import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Housing from "./pages/Housing/Housing";
import About from "./pages/About/About";
import Error from "./components/ErrorPage/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


const Layout = () => {
    return (
      <>
        <Navbar />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }


export const router = createBrowserRouter ( [
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {
          path:"/housing/:id",
          element:<Housing/>,
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"*",
          element:<Error/>
        },
      ]
    },
    
  ])