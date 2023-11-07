import { RouterProvider } from "react-router-dom";
import "./css/style.css"
import { router } from "./router/routes"


function App() {
  return (
    <div className="main-container">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
