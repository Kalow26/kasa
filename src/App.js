import { RouterProvider, Routes } from "react-router-dom";
import "./css/style.css"
import { router } from "./router/routes"


function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
