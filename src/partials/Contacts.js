import React, { Component } from "react";
import ContactsServices from "../services/Contacts";
import SearchContact from "./Contacts/SearchContact";
import AddContact from './Contacts/AddContact'
//import Contact from './Contacts/Contact'
import Table from './Contacts/Table'

export default class Contacts extends Component {
  Contacts = new ContactsServices();
  state = {
    // первоначальный state
    contacts: [],
    error: false
  };

  componentDidMount() {
    this.updateContacts();
  }
  // метод для получения всех контактов
  updateContacts() {
    this.Contacts.getAllContacts()
      .then(this.onContactsLoaded)
      .catch();
  }

  onContactsLoaded = contacts => {
    this.setState({
      contacts,
      error: false
    });
  };

  onError = () => {
    this.setState({
      error: true
    });
  };

  // renderItems(arr) {
  //   return arr.map(item => {
  //     const { name, phone, model, _id } = item;

  //     return (
  //       <div key={_id}>
  //         <div>{name}</div>
  //         <div>
  //           {phone} {model}
  //         </div>
  //       </div>
  //     );
  //   });
  // }

  render() {
    const { error, contacts } = this.state;
    return(<div>
    <SearchContact />
    <AddContact />
    <Table contacts={contacts} />
    </div>)
  }
}
