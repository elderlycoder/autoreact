import React, {Component} from 'react'

export default class Modal extends Component {
   
render(){
   return(
   
   <div id="popup-search-contact" className="popup hide-popup">
      <div class="popup-content">
         <div class="popup-header">
            <h3 class="modal-h3"> Окно для выбора существующих контактов</h3>
            <span class="close modal-close"> &times;</span>
         </div>
         <div class="row-modal-search">
            <div>
               <label for="name-search">Поиск: </label>
               <input id="name-search" name="title" type="text" placeholder="Начните вводить имя или телефон" />
            </div>
            <hr />
            <table id="result" className="table table-hover table-bordered tb-style items-search hide"></table>
            <div class="row-list"></div>

               <table className="table table-hover table-bordered tb-style items-search">
                  <tr>
                     <th>Имя</th>
                     <th>Телефон</th>
                     <th>Автомобиль</th>
                     <th>Год</th>
                     <th>Примечание</th>
                  </tr>
                  <tr id="result" class="hide"></tr>
                  
                  <tr id="contact-tr" className="row-list">
                     <td scope="row" data-id="{id}">{name}</td>
                     <td>{phone}</td>
                     <td>{model}</td>
                     <td>{year}</td>
                     <td>{descContact}</td>
                  </tr>
                  
               </table>
            </div>
         </div>
      </div>
   

   )
}

}