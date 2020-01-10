import React from "react";
import './PopupSearchContact.css'

function PopupSearchContact() {
  return (
    <div id="popup-search-contact" className="popup hide-popup">
      <div className="popup-content">
        <div className="popup-header">
        <h3 className="modal-h3"> Окно для выбора существующих контактов</h3>
        <span className="close modal-close">&times;</span>
        </div>
        <div className="row-modal-search">
           <div>
              <label htmlFor="name-search">Поиск: </label>
              <input id="name-search" name="title" type="text" placeholder="Начните вводить имя или телефон" />
              <hr />
              <table id="result" className="table table-hover table-bordered tb-style items-search hide"></table>
              <div className="row-list">
               <table className="table table-hover table-bordered tb-style items-search"></table>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

export default PopupSearchContact;