import React, {Component} from 'react';
import {connect} from 'react-redux';
import {onSelectDate, fillDesc} from '../../../redux/actions/add-order'

class InputData extends Component {
   render() {
      
      return (
         <div>
            <label>
               <span>Дата:  </span>
            <input type="date" id="start" name="start" onChange={(event) => this.props.onSelectDate(event.target.value)} />  
         </label>
            <label>
               <span>  Примечание:  </span>  
            <input type="text"  name="desc" onChange={(event) => this.props.fillDesc(event.target.value)} />
         </label>
         <hr />
      </div>
      )
   }
}
function mapStateToProps (state){
   return {desc: state.addorderreducer.desc,
            start: state.addorderreducer.start}
}
function mapDispatchToProps(dispath){
   return{
      //onSelectDate: (date) => dispath({type: 'SELECT_DATE', payload: date})
      onSelectDate: (payload) => dispath(onSelectDate(payload)),
      //onSelectDate: (date) => dispath(onSelectDate(date)),
      fillDesc: (payload) => dispath(fillDesc(payload))
   }
}
export default connect (mapStateToProps, mapDispatchToProps)(InputData)