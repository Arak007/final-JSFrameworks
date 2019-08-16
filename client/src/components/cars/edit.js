import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/cars/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/cars/update", {
      id: props.match.params.id,
        manufacturer: inputs.manufacturer,
        model: inputs.model,
        price: inputs.price,
        type: inputs.type
    })   
      .then(() => setRedirect(true))
      .catch(err => console.error(err))

  }
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

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Car Post</h1>
      </header>
      <div>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Manufacturer</label>
            <input
              className="form-control"
              name="manufacturer"
              defaultValue={inputs.manufacturer}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Model</label>
            <input
              className="form-control"
              name="model"
              defaultValue={inputs.model}
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              defaultValue={inputs.price}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Type</label>
            <select
              className="form-control"
              name="type"
              defaultValue={inputs.type}
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

export default Edit;
