import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const News = () => {
  const [newss, setNewss] = useState([]);

  useEffect(() => {
    loadNewss();
  }, []);

  const loadNewss = async () => {
    const result = await axios.get("http://localhost:3001/News");
    setNewss(result.data.reverse());
  };

  const deletePetrol = async (id) => {
    if (window.confirm("Вы уверены?")) {
      await axios.delete(`http://localhost:3001/News/${id}`);
      loadNewss();
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Новости</h1>
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
            {newss.map((newss, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{newss.title}</td>
                <td>{newss.description}</td>
                <td>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/AI/edit/${newss.id}`}
                  >
                    Изменить
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deletePetrol(newss.id)}
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

export default News;
