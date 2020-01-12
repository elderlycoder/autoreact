import React from 'react'

const InputData = () => {
   return (
   <div>
      <label>
         <span>Дата:  </span>
      <input type="date" id="start" name="start" />  
   </label>
      <label>
         <span>  Примечание:  </span>  
      <input type="text"  name="desc" />
   </label>
   <hr />
</div>
   )
}

export default InputData