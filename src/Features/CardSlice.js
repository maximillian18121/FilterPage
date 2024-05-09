import { createSlice } from "@reduxjs/toolkit";
import jobsData from "../db";

const initialState = {
    cardItems:jobsData,
    add:9,
    limit:9,
    read:true,
    id:'',
    filters:{
    roles: [],
    experience: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20],
    location: [],
    minSalary: [],
    },
    filterVal:{
        role:'',
        experience:0,
        location:'',
        minSalary:0
    }
}

const cardSlice = createSlice({
    name:'card',
    initialState,
    reducers:{

    }
})

export default cardSlice.reducer;