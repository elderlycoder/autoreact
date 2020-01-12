import React from 'react';
import News from './project/News'

//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
//import {BrowserRouter, Route} from 'react-router-dom';
const myNews = [
   {
     id: 1,
   author: 'Саша Печкин',
   text: 'В четверг, четвертого числа...',
   bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
   },
   {
     id: 2,
   author: 'Просто Вася',
   text: 'Считаю, что $ должен стоить 35 рублей!',
   bigText: 'А евро 42!'
   },
   {
     id: 3,
   author: 'Max Frontend',
   text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
   bigText: 'А евро опять выше 70.'
   },
   { 
     id: 4,
   author: 'Гость',
   text: 'Бесплатно. Без смс, про реакт, заходи -',
   bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!'
   }
   ];

function BigApp() {
  return (
    <div className="app">
      <News  data={myNews} /> {/*добавили св-во дата */}

     
    </div>

    
  );
}

export default BigApp;
