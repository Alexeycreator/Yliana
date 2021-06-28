import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditAI = () => {
  let history = useHistory();
  const { id } = useParams();
  const [petrol, setPetrol] = useState({
    price: ""
  });

  const { price } = petrol;
  const onInputChange = (e) => {
    setPetrol({ ...petrol, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPetrol();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/AI/${id}`, petrol);
    history.push("/");
  };

  const loadPetrol = async () => {
    const result = await axios.get(`http://localhost:3001/AI/${id}`);
    setPetrol(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Изменить цену бензина</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Введите новую цену"
              name="price"
              value={price}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Обновить данные</button>
        </form>
      </div>
    </div>
  );
};

export default EditAI;