import React, {Component} from 'react'
import GetContacts from '../services/getContacts'
//import SearchContact from './Contacts/SearchContact'
//import AddContact from './Contacts/AddContact'
//import Contact from './Contacts/Contact'
//import Table from './Contacts/Table'

export default class Contacts extends Component {
   GetContacts = new GetContacts()
   state = { // перевоначальный state
      contacts: [],
      error: false
   }

   componentDidMount(){
      this.updateContacts()
   }
   // метод для получения всех контактов
   updateContacts(){
      this.GetContacts.getAllContacts()
      .then(this.onContactsLoaded)
      .catch()
   }

   onContactsLoaded = (contacts) => {
      this.setState({
         contacts,
         error: false
      })
      console.log(this.state.contacts)
   }

   onError = () => {
      this.setState({
         error: true
      })
   }

   renderItems(arr) {
      return arr.map(item => {
        const {name, phone, model, _id} = item;

        return(
         <div key={_id}>

         <div>
            {name}
         </div>
         <div>
            {phone}  {model}
         </div>
      </div>
        )
      })
   }
   render(){
      const {error, contacts} = this.state;

      const items = this.renderItems(contacts)
      return(
         <div className="left">
           {items}
         </div>
      )
   }
}


// const Contacts = () => {
//    return (
//       <div>
//    <h1>Контакты</h1>
//    <SearchContact />
//    <AddContact />
//    <Table/>
//    </div>

//    )
// }
