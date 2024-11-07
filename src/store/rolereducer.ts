//FILL HERE 3.2
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const rolesArr = ["Unknown Personnel" , "Guest" , "Student" , "Developer" , "Executive Personnel"]


const initialState = {
    role : "Unknown Personnel"
}


const roleSlice = createSlice({
    initialState,
    name:"role",
    reducers:{
        setRole:(state,action:PayloadAction<number>)=>{
            console.log("change role");
            console.log(action.payload);
            
            
            const newRole = rolesArr[action.payload]
            state.role = newRole
            console.log(state.role);
        },
    }
})

export const {setRole} = roleSlice.actions;
export default roleSlice.reducer;