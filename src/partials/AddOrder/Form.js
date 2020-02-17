import React, {Component} from 'react'
import {connect} from 'react-redux';
import InputData from './Form/InputData'
import StatusState from './Form/StatusState'
import PartsListItem from './Form/PartsListItem'
import BtnForm from './Form/BtnForm'
import {partArray} from '../../redux/reducers/addOrderReducer'

class Form extends Component {
   
render(){
   console.log(this.props.partname) 
   const { deletedPart, addOption, deletedOption} = this.props
   const elements = this.props.parts.map((item) => {
      return(<li key={item.id}> 
         <PartsListItem
         partname={this.props.partname} selectside={item.selectside} selectplace={item.selectplace} countpart={item.countpart}
         options={item.optionArray}
         deletedPart={() => deletedPart(item.id)}
         addOption={() => addOption(item.id)}
         deletedOption={deletedOption}
         />
      </li>

      )
   }

   )

   return (
   <form action="/addorder" method="POST" id="myForm">
      <InputData />
      <StatusState />
      <ol id="parts-list">{elements}</ol>
      <BtnForm />
   </form>
   )
}
}

function mapStateToProps (state){
   return {parts: state.addorderreducer.partArray,
            partname: state.addorderreducer.partArray.partname
}
}
function mapDispatchToProps(dispath){
   return{
      // onSelectDate: (payload) => dispath(onSelectDate(payload)),
      // fillDesc: (payload) => dispath(fillDesc(payload))
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Form)