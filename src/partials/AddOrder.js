import React, {Component} from "react";
import BtnSearchContact from "./AddOrder/BtnSearchContact";
import BtnNewContact from "./AddOrder/BtnNewContact";
//import Modal from "./AddOrder/Modal"
import ContactResult from "./AddOrder/ContactResult";
import Form from "./AddOrder/Form";
import MenuParts from "./AddOrder/MenuParts";
import PopupSearchContact from "./AddOrder/PopupSearchContact"




export default class AddOrder extends Component {
  optionId = 100;
  partId = 1;
  state = {
    partArray: [{
      partname: 'Деталь',
      selectside: 'Сторона',
      selectplace: 'Расположение',
      countpart: 1,
      id: 17,
      optionArray: [{
        number: 'Номер',
        manufacturer: '',
        provider: '',
        purchaseprice: null,
        sellingprice: null,
        id:1      
      },
      {
        number: 'Номер2',
        manufacturer: '2',
        provider: '',
        purchaseprice: null,
        sellingprice: null,
        id:2      
      }
      ]
    }]
  };
  createPart(label){
    return{
    partname: label,
    selectside: '',
    selectplace: '',
    countpart: 1,
    optionArray: [],
    id: this.partId++
    }
  }
  createOption(key){
    return{
      number: '',
      manufacturer: '',
      provider: '',
      purchaseprice: null,
      sellingprice: null,
      id: this.optionId++
      }
  }
  addOption = (key) =>{ //принимаем клик по ссылке "Добавить вариант"
    //console.log(key)
    const newItem = this.createOption(key); // создали элемент
    this.setState(({partArray}) => {
      const element = partArray.map(function(elem){
        if (elem.id === key){
          const newArr = [...elem.optionArray, newItem]
          return elem.optionArray = newArr
        }
      })
      // console.log(partArray[0].optionArray)
      // console.log(element)
    })
    
  } 
  selectPart = (text) => {
    const newItem = this.createPart(text);
    this.setState(({partArray}) => {
      const newArr = [...partArray, newItem]; //?
      return {partArray: newArr};
    })
  }
  deletedPart = (id) => {
    this.setState (({partArray}) => {
      const idx = partArray.findIndex((el) => el.id === id);
      //todoData.splice(idx, 1)
      const before = partArray.slice(0, idx);
      const after = partArray.slice(idx+1)
      const newArray = [...before, ...after]
      return {partArray: newArray}
    })
  }
  deletedOption = (id) => {
    const copy = this.state.partArray.map(function(elem){
          const idx = elem.optionArray.findIndex((el) => el.id === id);
          if (idx > -1){
            const before = elem.optionArray.slice(0, idx);
          const after = elem.optionArray.slice(idx+1)
          const newArray = [...before, ...after]
          return {...elem, optionArray: newArray}
          }
          return elem
    })
    this.setState({partArray: copy})
}
  render(){
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9">
          <h1>Добавление заказа</h1>
          <div>
            <BtnSearchContact onSearchContact ={()=> console.log('SearchContact')}/>
            <span> или добавить </span>
            <BtnNewContact />
          </div>
          <ContactResult />
          <Form parts={this.state.partArray}
                deletedPart={this.deletedPart}
                addOption={this.addOption}
                deletedOption={this.deletedOption} />
        </div>
        
        <MenuParts 
          selectPart={this.selectPart}
         />
      </div>
      <PopupSearchContact />
      <p> </p>
    </div>
  );
}
}