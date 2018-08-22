

const initialState = {
    count: 0
}    


const Increment =  function(state=initialState , action){
    switch(action.type){
        case 'INCREMENT_COUNT' :
        return {
            ...state,
            count: state.count + action.payload
        };
        case 'DECREMENT_COUNT':
         return { ...state, 
            count: state.count - action.payload };
        default: return state;
    }
   

}

export default Increment;