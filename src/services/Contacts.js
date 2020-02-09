export default class Contacts {
   constructor(){
      this.__apiBase = 'http://localhost:4000';
   }
   getResource = async (url) =>{
      const res = await fetch(`${this.__apiBase}${url}`);

      if(!res.ok) {//значит получили ответ со статусом не 200
         throw new Error(`Could not fetch ${url}, received ${res.status}`)
      }
      // в fetch есть встроенный метод преобразования пришедшего в ответе json в объект js ".json()"
      // т.к. метод .json() это асинхронная операция, и возвращает promise, нужно указать return(у) дождаться конца операции
      // с помощью await
      return await res.json();
   }

   postData = async(url, body) => {
      const options = {
         method: 'POST', // *GET, POST, PUT, DELETE, etc.
         headers: {
             'Content-Type': 'application/json',
         },
         body: JSON.stringify(body), // тип данных в body должен соответвовать значению заголовка "Content-Type"
     }

     return fetch(`${this.__apiBase}${url}`, options)
   }

   getAllContacts = async () => {
      const contacts = await this.getResource('/api/v1/contacts')
      return contacts;
   }
   addContact = async (contact) => {
      const response = await this.postData('/api/v1/contacts', contact);

      if (response.status !== 200) {
         throw Error('Ошибка сохранения контакта', response.body);
      }
      return response.json();
   }

}

