import React from 'react';
import Header from './partials/Header'
import Contacts from './partials/Contacts';
import AddOrder from './partials/AddOrder'
import UserOrders from './partials/UserOrders'
import Footer from './partials/Footer'
//import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Route path="/addorder" component={AddOrder} />
      <Route path="/orders" component={UserOrders} />
      <Route path="/contacts" component={Contacts} />
      <Footer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
