import React from 'react';
import {connect} from 'react-redux';
import {selectStatus, selectState} from '../../../redux/actions/add-order'

class StatusState extends React.Component {
  render() {
     return (
   <div>
      <label>
         <span>Статус:  </span>
      <select name="status" onChange={(event) => this.props.selectStatus(event.target.value)}> 
         <option value="Черновик">Черновик</option>
         <option value="В работе">В работе</option>
         <option value="Архив">Архив</option>
         </select>
   </label>
      <label>
         <span>  Состояние:  </span>  
         <select name="state" > 
         <option value="получена заявка">получена заявка</option>
         <option value="подготовить варианты">подготовить варианты</option>
         <option value="отправить черновик">отправить черновик</option>
         <option value="связаться для согласования">связаться для согласования</option>
         <option value="не отвечает, связаться ещё раз">не отвечает, связаться ещё раз</option>
         <option value="принимает решение">принимает решение</option>
         <option value="окончательное согласование">окончательное согласование</option>
         <option value="успешный заказ">успешный заказ</option>
         <option value="отказ">отказ</option>
         </select>
   </label>
</div>
   )
 }
}

function mapDispatchToProps(dispath){
   return{
      selectStatus: (payload) => dispath(selectStatus(payload)),
      selectState: (payload) => dispath(selectState(payload))
   }
}

export default connect (null, mapDispatchToProps) (StatusState)