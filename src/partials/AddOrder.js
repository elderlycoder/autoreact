import React from "react";
import BtnSearchContact from "./AddOrder/BtnSearchContact";
import BtnNewContact from "./AddOrder/BtnNewContact";
import ContactResult from "./AddOrder/ContactResult";
import Form from "./AddOrder/Form";
import MenuParts from "./AddOrder/MenuParts";
import PopupSearchContact from "./AddOrder/PopupSearchContact"




function AddOrder() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9">
          <h1>Добавление заказа</h1>
          <div>
            <BtnSearchContact />
            <span> или добавить </span>
            <BtnNewContact />
          </div>
          <ContactResult />
          <Form />
        </div>
        
        <MenuParts/>
      </div>
      <PopupSearchContact />
    </div>
  );
}

export default AddOrder;