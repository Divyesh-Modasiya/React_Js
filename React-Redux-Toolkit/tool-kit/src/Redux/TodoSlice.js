import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchData = createAsyncThunk("fetchData",async()=>{
//     const fetchRecord = fetch("")
//     const res = await fetchRecord.json();
//     return res
// })

const Todo =createSlice({   // create slice
    name : "Todo",    // provide name
    initialState : {data:[]},  
    reducers : {     // create reduce
        addData : (state,action)=>{  // first add data function 
           state.data.push(action.payload) // push data in empty array ( action.paylod take data from add task file dispatchdata )
        },
        deleteData : (state,action)=>{
            console.log(action.payload);
    state.data =  state.data.filter(item => item.id !== action.payload);
            
        },
        editData : (state,action)=>{
            let info = state.data.find((i)=>i.id==action.payload.id)
            if(info){
                info.title = action.payload.title
            } 
        },
    },
    // extraReducers : (builder)=>{
    //     builder.addCase(fetchData.fulfilled,(state,action)=>{
    //         state.data= action.payload
    //     })
    // }
});

export const {addData, deleteData,editData} = Todo.actions 
export default Todo.reducer;


