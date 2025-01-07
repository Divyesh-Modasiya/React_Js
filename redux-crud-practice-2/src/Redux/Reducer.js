const initialState = {
    task:[]
}

export const Reducer = (state = initialState,action) =>{
    switch (action.type) {
        case "add":
            return{
                ...state,
                task:[...state.task,action.payload]
            }
        
    
        default:
            return state;
    }
}

