import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Housing from "../pages/Housing/Housing";
import About from "../pages/About/About";
import Error from "../pages/ErrorPage/Error";
import {Layout} from "./layout"





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
          path:"/error",
          element:<Error/>
        },
        {
          path:"*",
          element:<Error/>
        },
      ]
    },
    
  ])