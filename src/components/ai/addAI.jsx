import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const AddAI = () => {
  let history = useHistory();
  const [petrolsAdd, setPetrolsAdd] = useState({
    number: "",
    price: "",
  });

  const { number, price } = petrolsAdd;
  const ouInputChange = (e) => {
    setPetrolsAdd({ ...petrolsAdd, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/AI", petrolsAdd);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 ms-auto shadow p-5">
        <h2 className="text-center mb-4">Добавить бензин</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Введите название или номер бензина"
              name="number"
              value={number}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Введите цену за литр"
              name="price"
              value={price}
              onChange={(e) => ouInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default AddAI;
