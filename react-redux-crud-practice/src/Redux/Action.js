export const addData = (tododata) => {
    return {
      type: 'add',
      payload: tododata
    };
  };

export  const deleteData = (id) =>{
    return {
        type: "delete",
        id
    }
  }

export const editData = (id,text) =>{
    return{
        type: "edit",
        payload:{id,text}

    }
}