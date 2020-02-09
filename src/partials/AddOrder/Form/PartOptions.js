import React, {Component} from 'react'


export default class PartOptions extends Component{
render(){
   const {number, manufacturer, provider, purchaseprice, sellingprice} = this.props
   return(
      <div>
      <input type="checkbox" name="check" />
      <input type="text" placeholder={number} name="number" size="15" />
      <input type="text" placeholder="Производитель" name="manufacturer" size="15" />
      <input type="text" placeholder="Поставщик" name="provider" size="15" />
      <input type="number" placeholder="Закупка" name="purchaseprice" min="0" max="1000000" step="1" />
      <input type="text"  name="buy" size="8" />
      <input type="number" placeholder="Продажа" name="sellingprice" min="0" max="1000000" step="1" />
      <input type="text" name="sell" size="8" />
      <button type="button" className="btn btn-outline-danger btn-sm" onClick = {() => this.props.deletedOption()}><i className="fa fa-minus"></i></button>
   </div>
   )
}
}