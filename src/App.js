import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Housing from "./pages/Housing/Housing";
import About from "./pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error from "./components/ErrorPage/Error";
import "./css/style.css"

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

const router = createBrowserRouter ( [
  {
    path:"/",
    element:<Layout/>,
    errorElement:<Error/>,
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
    ]
  },
  
])

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
