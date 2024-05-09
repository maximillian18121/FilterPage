import React, { useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setFilterVal, setCards } from "../Features/CardSlice";
import jobsData from "../db";
const Filters = () => {
  const dispatch = useDispatch();
  const { filters, limit } = useSelector((store) => store.cardState);
  const [val, setVal] = useState({
    jobRole: "",
    minExp: 0,
    location: "",
    minJdSalary: 0,
    companyName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal((prev) => {
      return { ...prev, [name]: value };
    });
  };

  dispatch(setFilterVal(val));

  const handleRefresh = () => {
    dispatch(setCards(jobsData.slice(0,limit)));
  }

  return (
    <>
      <div className="filter-section">
        <div className="select-input">
          <FormControl className="form-components" sx={{ minWidth: 140 }}>
            <InputLabel
              sx={{ height: 20 }}
              id="demo-simple-select-helper-label"
            >
              Roles
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Roles"
              name="jobRole"
              value={val.jobRole}
              onChange={handleChange}
            >
              {filters.roles.map((role, index) => {
                return (
                  <MenuItem key={index} value={role}>
                    {role}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 180 }}>
            <InputLabel id="demo-simple-select-helper-label">
              No. of Employees
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="No. of Employees"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 140 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Experience
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Experience"
              name="minExp"
              value={val.minExp}
              onChange={handleChange}
            >
              {filters.experience.map((data, index) => {
                if (data === 0) {
                  return (
                    <MenuItem key={index} value={data}>
                      Fresher
                    </MenuItem>
                  );
                }
                return (
                  <MenuItem key={index} value={data}>{`${data} yrs`}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 140 }}>
            <InputLabel id="demo-simple-select-helper-label">Remote</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Remote"
              name="location"
              value={val.location}
              onChange={handleChange}
            >
              {filters.location.map((data, index) => {
                return <MenuItem value={data}>{data}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Minimum Base Salary
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Minimum Base Salary"
              name="minJdSalary"
              value={val.minJdSalary}
              onChange={handleChange}
            >
              {filters.minSalary.map((data) => {
                return <MenuItem value={data}>{`$${data}000`}</MenuItem>;
              })}
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
            name="companyName"
            value={val.companyName}
            onChange={handleChange}
          />
        </div>
        <Button onClick={handleRefresh} className="refresh-button" variant="contained" color="primary">Refresh Filters</Button>
      </div>
    </>
  );
};

export default Filters;
