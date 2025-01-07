const initalstate = {
    task : []
}
export const reducer = (state=initalstate,action)=>{

    switch (action.type) {
        case "add":
            return {
                ...state,
                task: [...state.task,action.payload]
            }
    
        case "edit":
            return {
                ...state,
                task: state.task.map((el)=>el.id==action.payload.id?{...el,name:action.payload.text}:el)
            }

        case "delete":
            return{
                ...state,
                task: state.task.filter((el)=>el.id!==action.id)
            }    
    
        default:
            return state
    }
}