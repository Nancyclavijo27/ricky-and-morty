import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import Search from "./componentes/Search/Search";
import Card from "./componentes/Card/Card";
import Pagination from "./componentes/Pagination/Pagination";
import Filter from "./componentes/Filter/Filter";
import Navbar from "./componentes/Navbar/Narbar";

function App() {
  return (
    <div className="App">
  <h1 className="text-center mb-3">Characters</h1>
  <div className="container">
  <div className="row">
    Filter component will be placed here
    <div className="col-lg-8 col-12">
      <div className="row">
        Card component will be placed here
      </div>
    </div>
  </div>
  </div>
</div>
  );
}

export default App;
