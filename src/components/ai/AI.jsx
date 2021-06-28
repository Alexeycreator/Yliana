import React, { useEffect, useState } from "react";
import axios from "axios";
import AddAI from "./addAI";
import { Link } from "react-router-dom";

const AI = () => {
  const [petrols, setPetrol] = useState([]);

  useEffect(() => {
    loadPetrols();
  }, []);

  const loadPetrols = async () => {
    const result = await axios.get("http://localhost:3001/AI");
    setPetrol(result.data.reverse());
  };

  const deletePetrol = async (id) => {
    if (window.confirm("Вы уверены?")) {
      await axios.delete(`http://localhost:3001/AI/${id}`);
      loadPetrols();
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Бензин</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Марка</th>
              <th scope="col">Цена за литр</th>
              <th scope="col">Опции</th>
            </tr>
          </thead>
          <tbody>
            {petrols.map((petrol, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{petrol.number}</td>
                <td>{petrol.price}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/AI/edit/${petrol.id}`}
                  >
                    Изменить
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deletePetrol(petrol.id)}
                  >
                    Удалить
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddAI />
      </div>
    </div>
  );
};

export default AI;
