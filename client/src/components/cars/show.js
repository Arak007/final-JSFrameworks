import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [car, setCar] = useState({});

  useEffect(() => {
    
    Axios.get(`/api/cars/${props.match.params.id}`)
      .then(result => setCar(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{car.manufacturer}</h1>
      </header>

      <div>{car.model && car.price}</div>
    </div>
  );
}

export default Show;