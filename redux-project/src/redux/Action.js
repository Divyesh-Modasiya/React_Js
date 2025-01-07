export const addTodo = (todoData) =>{
    return{
        type : "add",
        payload : todoData
    }
}
export const editTodo = (id,text) =>{
    return{
        type : "edit",
        payload:{id,text}
    }
}
export const deleteTodo = (id,text) =>{
    return{
        type : "delete",
        id
    }
}