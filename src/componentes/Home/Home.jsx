import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Search from "../Search/Search";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";


function Home() {

    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;
    let [pageNumber, updatePageNumber] = useState(1);
    let [search, setSearch] = useState("");
    let [status, updateStatus] = useState("");
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);

    return (
        <div className="container  bg-info">
            <h1 className="text-center mb-3">Ricki and Morty </h1>
            <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
            <Pagination
                info={info}
                pageNumber={pageNumber}
                updatePageNumber={updatePageNumber} />
            <div className="container">
                <div className="row">
                    <Filter
                        pageNumber={pageNumber}
                        status={status}
                        updateStatus={updateStatus}
                        updateGender={updateGender}
                        updateSpecies={updateSpecies}
                        updatePageNumber={updatePageNumber} />
                    <div className="col-lg-8 col-12">
                        <div className="row">
                        <Card page="/" results={results} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Home;