import React from "react";
import { Link } from "react-router-dom";
import { NavLink as RouterNavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          МТК-33
        </Link>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
{/*         <li className="nav-item">
            <RouterNavLink className="nav-link" exact to="/">
              Главная
            </RouterNavLink>
          </li> */}
          <li className="nav-item">
            <RouterNavLink className="nav-link" exact to="/news">
              Новости
            </RouterNavLink>
          </li>
          <li>
            <RouterNavLink className="nav-link" exact to="/AI">
              Бензин
            </RouterNavLink>
          </li>
          <li>
            <RouterNavLink className="nav-link" exact to="/promotions">
              Акции
            </RouterNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
