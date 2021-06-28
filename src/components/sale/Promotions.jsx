import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Promotions = () => {
  const [promotionss, setPromotionss] = useState([]);

  useEffect(() => {
    loadPromotionss();
  }, []);

  const loadPromotionss = async () => {
    const result = await axios.get("http://localhost:3001/Promotions");
    setPromotionss(result.data.reverse());
  };

  const deletePetrol = async (id) => {
    if (window.confirm("Вы уверены?")) {
      await axios.delete(`http://localhost:3001/Promotions/${id}`);
      loadPromotionss();
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Акции</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Описание</th>
              <th scope="col">Опции</th>
            </tr>
          </thead>
          <tbody>
            {promotionss.map((promotions, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{promotions.name}</td>
                <td>{promotions.description}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/AI/edit/${promotions.id}`}
                  >
                    Изменить
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deletePetrol(promotions.id)}
                  >
                    Удалить
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Promotions;
