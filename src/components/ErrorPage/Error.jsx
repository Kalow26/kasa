import { useRouteError } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Error = () => {
    const error = useRouteError();
   
  return (
    <>
        <Navbar/>
        <div id="error-page">
            <h1>Oops</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
        <Footer/>
    </>
  )
}

export default Error