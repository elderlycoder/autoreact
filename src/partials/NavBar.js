import React from "react";
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-warning">
      <a href="/" className="navbar-brand">
        AutoNotes
      </a>
      <div id="my-nav" className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Главная
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/orders'>
              Заказы
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addorder">
              Добавить заказ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              Контакты
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/store">
              Склад
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/auth/login#login">
              Вход
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
