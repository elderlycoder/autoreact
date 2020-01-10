import React from "react";

const AddContact = () => {
  return (
    <div>
      <h4>Добавить контакт: </h4>
      
      <form action="contacts" method="post">
      <div className="form-row">
         <input type="text" name="name" placeholder="Имя" />
         <input type="text" name="phone" placeholder="Телефон" />
         <input type="text" id="model" name="model" placeholder="Марка и модель" /> 
         <label> Год: <select id="year" name="year">
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                     </select>
            <input type="text" id="vin" name="vin" placeholder="VIN код" />
            <input type="text" name="descContact" placeholder="Примечание" />
            <button>Сохранить</button>
         </label>
         </div>
      </form>
      
    </div>
  );
};

export default AddContact;