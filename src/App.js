import "./App.css";
import Card from "./componenets/card/Card";
import Carousal from "./componenets/Carousal/Carousal";
import Navbar from "./componenets/Fnav/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Secpage from "./componenets/SecondPage/secjsx/Secpage";
import Secnav from "./componenets/secNav/Secnav.js";
import { Home } from "./componenets/Home";

function App() {
  return (
    <>


  <Navbar />
    <Router>
     <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/restaurants/:productId"  element={<Secpage />} />
     </Routes>
    </Router>
   
    </>
  );
}

export default App;
