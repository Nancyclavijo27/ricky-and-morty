import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Favorites } from "../Favorites/Favorites";

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image,  species } = fetchedData;
  

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

 
  return (
    <div className="container d-flex justify-content-center mb-5 bg-info">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>

        <img className="img-flui" src={image} alt="" />
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Location: </span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin: </span>
            {origin?.name}
          </div>
          <div className="">
            <span className="fw-bold">Species: </span>
            {species}
          </div>
        </div>
           <Favorites/>
           <Link className="link btn btn-primary fs-5"  to="/">Home</Link>
      </div>
    </div>
  );
};

export default CardDetails;