export default class GetContacts {
   constructor(){
      this.__apiBase = 'http://localhost:3000';

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

   getAllContacts = async () => {
      const contacts = await this.getResource('/contacts/')
      return contacts;
   }
}