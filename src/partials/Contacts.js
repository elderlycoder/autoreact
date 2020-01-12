import React from 'react'
import SearchContact from './Contacts/SearchContact'
import AddContact from './Contacts/AddContact'
import Contact from './Contacts/Contact'



const Contacts = () => {
   return (
      <div>
   <h1>Контакты</h1>
   <SearchContact />
   <AddContact />
   <Contact name='Антон' phone='111'/>
   <Contact name='Иван' phone='222'/>
   <Contact name='Костя' phone='333'/>
   <Contact name='Роман' phone='444'/>
   <Contact name='Степан' phone='555'/>
   <Contact name='Федор' phone='666'/>
   <Contact name='Яков' phone='777'/>
   </div>
   )
}

export default Contacts