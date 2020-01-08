import React from 'react';
import Header from './partials/Header'
import AddOrder from './partials/AddOrder'
import UserOrders from './partials/UserOrders'
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Route path="/addorder" component={AddOrder} />
      <Route path="/orders" component={UserOrders} />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
