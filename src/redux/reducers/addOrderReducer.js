const initialState = {
   counter: 100,
   desc: 'Привет',
   start: null,
   status: 'Черновик',
   state: 'Получена заявка',
   example: null,
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
}


export default function addorder (state = initialState, action){
   switch(action.type){
      case 'SELECT_DATE':
         return {...state, start: action.payload}
      case 'FILL_DESC':
         return {...state, desc: action.payload}
      case 'SELECT_STATUS':
         return {...state, status: action.payload}
      case 'SELECT_STATE':
         return {...state, state: action.payload}
      case 'SELECT_PART':
         const part = action.payload.textContent;
         const partId = action.payload.id
         const newItem = {
            partname: part,
            selectside: '',
            selectplace: '',
            countpart: 1,
            optionArray: [],
            id: partId
            };
          return {...state,  partArray: [...state.partArray, newItem]}
      case 'ADD_OPTION':
         

      default:
         return state
   }
  
}
