export const onSelectDate = (payload) => {return {type: 'SELECT_DATE', payload}}
export const fillDesc = (payload) => {return {type: 'FILL_DESC', payload}}
export const selectStatus = (payload) => {return {type: 'SELECT_STATUS', payload}}
export const selectState = (payload) => {return {type: 'SELECT_STATE', payload}}
export const selectPart = (payload) => {return {type: 'SELECT_PART', payload}}
export const addOption = (payload) => {return {type: 'ADD_OPTION', payload}}

//можно переписать так
//export const onSelectDate = (payload) => ({type: 'SELECT_DATE', payload})  не используя return
//export const onSelectDate = (date) => ({type: 'SELECT_DATE', payload: date})
