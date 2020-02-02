import React, { Component } from "react";
import ContactsServices from "../../services/Contacts";
export default class AddContact extends Component {
    Contacts = new ContactsServices();
    state = {
        // первоначальный state
        contact: {},
        error: false
      };


    clearRefs() {
        for (const key of Object.keys(this.refs)) {
            if(this.refs[key].tagName !== "SELECT") {
                this.refs[key].value = '';
            }
        }
    }

    AddContact = () => {
        const contact = {};
        for (const key of Object.keys(this.refs)) {
            contact[key] = this.refs[key].value
        }


        this.Contacts.addContact(contact)
          .then(contact =>{
              this.clearRefs();
              this.props.contacts.push(contact);
              this.props.updateContactsState(this.props.contacts)
            })
          .catch(console.log);
      }


    render() {
        return (
            <div>
                <h4>Добавить контакт: </h4>

                <div className="form-row">
                    <input type="text" placeholder="Имя" ref="name"/>
                    <input type="text" name="phone" placeholder="Телефон" ref="phone" />
                    <input type="text" id="model" name="model" placeholder="Марка и модель" ref="car"/>
                    <label> Год: <select id="year" name="year" ref = "year">
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
                        <input type="text" id="vin" name="vin" placeholder="VIN код" ref="vin" />
                        <input type="text" name="descContact" placeholder="Примечание" ref="notes"/>
                        <button onClick={this.AddContact}>Сохранить</button>
                    </label>
                </div>
            </div>
        );
    }
}

