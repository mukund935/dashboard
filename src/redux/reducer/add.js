const initialState = []

const add = (state =initialState,action)=>{

    switch(action.type){
        case "ADDUSER": 
            state=[...state,action.item]
        return state;
        default: return state
    }
}

export default add;