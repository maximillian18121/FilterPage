import { createSlice } from "@reduxjs/toolkit";
import jobsData from "../db";

const initialState = {
    cardItems:jobsData?.slice(0,9),
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
        jobRole:'',
        minExp:0,
        location:'',
        minJdSalary:0,
        companyName:'',
    }
}

const cardSlice = createSlice({
    name:'card',
    initialState,
    reducers:{
       toggleRead:(state)=>{
        state.read = !state.read;
       },
       setId:(state,{payload})=>{
        const id = payload;
        state.id = id;
       },
       setCards:(state,{payload})=>{
        state.cardItems = payload;
       },
       setLimit:(state,{payload})=>{
        state.limit = payload;
       },
       setFilters:(state,action)=>{
        state.cardItems.forEach((data)=>{
            const { jobRole, location, minJdSalary } = data;
            if (!state.filters.roles.includes(jobRole)) {
              if (jobRole === null) {
                return;
              }
              state.filters.roles.push(jobRole);
            }
            if (!state.filters.location.includes(location)) {
              if (location === null) {
                return;
              }
              state.filters.location.push(location);
            }
            if (!state.filters.minSalary.includes(minJdSalary)) {
              if (minJdSalary === null) {
                return;
              }
              state.filters.minSalary.push(minJdSalary);
            }
        })
        state.filters.minSalary = state.filters.minSalary.sort(function(a,b){return a-b});
       },
       setFilterVal:(state,{payload})=>{
        state.filterVal = payload;
       }
    }
});

export const {toggleRead,setId,setLimit, setCards, setFilters,setFilterVal} = cardSlice.actions;
export default cardSlice.reducer;