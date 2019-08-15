import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleInputChange(event) {
    event.persist();
    const { name, value } = event.target;

    setInputs(inputs => {
      return {
        ...inputs,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/cars/", inputs)
      .then(resp => setRedirect(true))
      .catch(err => console.log(err));
  }

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="container">
      <header>
        <h1>New Car Post</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Manufacturer</label>
            <input
              className="form-control"
              name="manufacturer"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Model</label>
            <input
              className="form-control"
              name="model"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Type</label>
            <select
              className="form-control"
              name="type"
              required
              onChange={handleInputChange}
            >
                <option value="SUV">Suv</option>
                <option value="SEDAN">Sedan</option>
                <option value="COMMERCIAL">Commercial</option>
                <option value="COUPE">Coupe</option>
                <option value="HATCHBACK">Hatchback</option>
                <option value="VAN">Van</option>            
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New;