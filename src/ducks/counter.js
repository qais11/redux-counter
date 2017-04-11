// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;
//initial state
// const initialState = {
//   currentValue: 0
// }
//constant (action types)
const INCREMENT = "counter/INCREMENT"
//action creatores (exported function)
export function increment(amount){
   return {
     type: INCREMENT
    ,amount: amount
   }
}
//reducer
const initialState = {
  currentValue:0

}

export default function counter(state = initialState, action ){
  // return state ;
  switch( action.type ){
    case INCREMENT:
      return {currentValue : state.currentValue + action.amount};
    // case:
    //   return {}
 default:
      return state
  }
}
