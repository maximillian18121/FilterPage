import React from 'react'
import { InputLabel,
    Select,
    MenuItem,
    FormControl,
    TextField,
    Button,} from "@mui/material";
import { useSelector } from 'react-redux';
const Filters = () => {
    const {filters} = useSelector((store)=>store.cardState)
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
                      <MenuItem
                        key={index}
                        value={data}
                      >{`${data} yrs`}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl sx={{ minWidth: 140 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Remote
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Remote"
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
                >
                  {filters.minSalary.sort(function(a, b){return a - b}).map((data) => {
                    return <MenuItem value={data}>{`$${data}000`}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <TextField
                id="outlined-basic"
                label="Company Name"
                variant="outlined"
              />
            </div>
          </div>
    </>
  )
}

export default Filters