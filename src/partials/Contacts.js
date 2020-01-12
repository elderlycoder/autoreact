import React from 'react'
import SearchContact from './Contacts/SearchContact'
import AddContact from './Contacts/AddContact'
//import Contact from './Contacts/Contact'
import Table from './Contacts/Table'



const Contacts = () => {
   return (
      <div>
   <h1>Контакты</h1>
   <SearchContact />
   <AddContact />
   <Table/>
   </div>
   
   )
}

export default Contacts