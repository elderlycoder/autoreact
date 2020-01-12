import React from 'react'
import InputData from './Form/InputData'
import StatusState from './Form/StatusState'
import PartsList from './Form/PartsList'
import BtnForm from './Form/BtnForm'

const Form = () => {
   return (
   <form action="/addorder" method="POST" id="myForm">
      <InputData />
      <StatusState />
      <PartsList />
      <BtnForm />
   </form>
   )
}

export default Form