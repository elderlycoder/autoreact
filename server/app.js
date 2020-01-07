const express = require('express'); // подключаем модуль express
const app = express(); // создаем объект приложения
const mongoose = require('mongoose');
const config = require("./config/default"); // файл с настройками подключения к бд

const PORT = process.env.PORT || 4000;
const User = require('./model/user')

async function start(){
   try{
      console.log(config.dbUri)
   const url = config.dbUri;
      await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
      const candidate = await User.findOne(); // метод findone что-то вернет если в базе есть хотябы один пользователь
      if (!candidate) { // если в переменной candidate  ничего нет то создадим нового пользователя
         const user = new User({
            email: 'ryocka@gmail.com',
            name: 'Dmitriy',
            contactId: {}
           // contacts: {items: []}
         })
         await user.save();
      }

   app.listen(PORT, function () { // с помощью метода listen передаем номер порта на котором мы хотим слушать наше приложение app
      console.log(`Server is running on port: ${PORT}`);
   });
   } catch(e) {
      console.log(e)
   }
}
start();