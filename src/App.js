import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Navbar from "./componentes/Navbar/Narbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./componentes/Card/CardDetails";
import Home from "./componentes/Home/Home"

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
       
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}


export default App;