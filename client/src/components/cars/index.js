import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    Axios.get("/api/cars/")
      .then(result => setCars(result.data)) // Our Cars are under the property .data
      .catch(err => console.error(err));
  }, []);

  console.log(cars);

  return (
    <div className="container">
      <header>
        <h1>All Cars</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {cars.map(car => (
              <tr key={car._id}>
                <td>
                  <Link to={`/${car._id}`}>{car.manufacturer}</Link>
                </td>
                <td>
                  {car.model}
                </td>
                <td>
                  {car.price}
                </td>
                <td>
                  {car.type}
                </td>

                <td>
                  <Link to={`/${car._id}/edit`}>edit</Link>|
                  <Link to={`/${car._id}/destroy`}>delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;