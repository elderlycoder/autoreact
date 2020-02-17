import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addOption} from '../../../redux/actions/add-order';
import PartOptions from './PartOptions';
import {partArray} from '../../../redux/reducers/addOrderReducer'


class PartsListItem extends Component{

   // addOption = () => {
   //    this.props.addOption()
   //  }

render(){
   //const {partname, selectside, selectplace, countpart, options, deletedOption, addOption} = this.props
   
   const elements = this.props.options.map((item) => {
      return(<li key={item.id}>
         <PartOptions
         number={item.number} manufacturer={item.manufacturer} provider={item.provider} purchaseprice={item.purchaseprice}
         sellingprice={item.sellingprice}
         //deletedOption={() => deletedOption(item.id)}
         />
      </li>

      )
   }

   )
   return (
      <div>
         <input type="text" defaultValue={this.props.partname} name="partname" />
   <select name="selectside"><option>Сторона</option><option value="Передн.">Передн.</option><option value="Задн.">Задн.</option><option value="Слева">Слева</option><option value="Справа">Справа</option><option value="Передн. слева">Передн. слева</option><option value="Передн. справа">Передн. справа</option><option value="Передн. слева и справа">Передн. слева и справа</option><option value="Задн. слева">Задн. слева</option><option value="Задн. справа">Задн. справа</option><option value="Задн. слева и справа">Задн. слева и справа</option></select>
   <select name="selectplace"><option>Расположение</option><option value="Сверху">Сверху</option><option value="Снизу">Снизу</option><option value="Внутри">Внутри</option><option value="Снаружи">Снаружи</option></select>
   <input type="number" name="countpart" defaultValue={this.props.countpart} className="dva pyat" min="1" max="900" step="1" />
   <button type="button" className="btn btn-outline-danger btn-sm" onClick = {() => this.props.deletedPart()}><i className="fa fa-trash-o" /></button>
   <ul className="list-option" >
      {elements}
      <a href="#" className="add-option" data-listoption onClick={this.addOption}>Добавить вариант</a>
      <div className="parent"><ul></ul></div>
   </ul> 
      <hr />   
</div>
   )
}    
}
function mapStateToProps(state){
   return{
      keyProps: state.partArray,
      partname: state.addorderreducer.partArray.partname,
      countpart: state.addorderreducer.partArray.countpart,
      options1: state.addorderreducer.partArray.options
   }

}
function mapDispatchToProps(dispatch, ownProps){
   console.log(ownProps)
   return {
      addOption: (payload) => {dispatch(addOption(payload))} 
   } 
}
export default connect (mapStateToProps, mapDispatchToProps)(PartsListItem) 