import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes";
import { useState, createContext, useEffect } from "react";
import "./css/style.css"
import { FetchData } from "./api/FetchData";


export const dataContext = createContext();

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromServer = await FetchData();
        setData(dataFromServer);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <dataContext.Provider value={{dataBase : [data]}}>
     <RouterProvider router={router} />
    </dataContext.Provider>
  );
}

export default App;
