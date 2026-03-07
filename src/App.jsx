// import Navbar from "./Component/Navbar/Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from"./Component/Footer/Footer";


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Outlet />
//       <Footer /> 
//     </div>
//   );
// }


// export default App;


  import Navbar from "./Component/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="maincontent">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default App;


 
