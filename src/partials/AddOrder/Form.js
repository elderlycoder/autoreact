import React, {Component} from 'react'
import InputData from './Form/InputData'
import StatusState from './Form/StatusState'
import PartsListItem from './Form/PartsListItem'
import BtnForm from './Form/BtnForm'

class Form extends Component {
render(){
   const {parts, deletedPart, addOption, deletedOption} = this.props
   const elements = parts.map((item) => {
      return(<li key={item.id}>
         <PartsListItem
         partname={item.partname} selectside={item.selectside} selectplace={item.selectplace} countpart={item.countpart}
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

export default Form