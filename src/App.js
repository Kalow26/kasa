import { RouterProvider } from "react-router-dom";
import "./css/style.css"
import { router } from "./router";


function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}

export default App;
