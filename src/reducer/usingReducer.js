function usingReducer(state,action){
    switch (action.type) {
      case 'changeCount':
        return {
          ...state,
          count:state.count+action.payload
        }
  
        case 'changeColor':
          return {
            ...state,
            isColor:action.payload
          }
    
      default:
        return state
    }
  }

  export default usingReducer