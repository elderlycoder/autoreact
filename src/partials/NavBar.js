import React from 'react'

function NavBar () {
   return (
       <nav className="navbar navbar-light navbar-expand-lg bg-warning">
          <a href="#" className="navbar-brand">AutoNotes</a>
          <div id="my-nav" className="collapse navbar-collapse">
             <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                   <a className="nav-link" href="/">Главная</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="/orders">Заказы</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="/addorder">Добавить заказ</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="/contacts">Контакты</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="/store">Склад</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link" href="/auth/login#login">Вход</a>
                </li>
             </ul>
          </div>
       </nav>
   )
}

export default NavBar