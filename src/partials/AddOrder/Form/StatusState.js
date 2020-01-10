import React from 'react'

const StatusState = () => {
   return (
   <div>
      <label>
         <span>Статус:  </span>
      <select name="status"> 
         <option value="Черновик">Черновик</option>
         <option value="В работе">В работе</option>
         <option value="Архив">Архив</option>
         </select>
   </label>
      <label>
         <span>  Состояние:  </span>  
         <select name="status"> 
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

export default StatusState