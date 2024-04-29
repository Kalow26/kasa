import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { FetchData } from "./api/FetchData";
import "./css/style.css";
import { router } from "./router/routes";

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
    <>
      <dataContext.Provider value={{ allLodges: data }}>
        <RouterProvider router={router} />
      </dataContext.Provider>
    </>
  );
}

export default App;
