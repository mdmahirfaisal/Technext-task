import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterLastTimeData } from '../../redux/slices/launchSlice';

const DateFilter = () => {
    const dispatch = useDispatch();
    const [filterDate, setFilterDate] = React.useState("")

    // Filter date 
    const handleDateFilter = (e) => {
        setFilterDate(e.target.value)
        dispatch(filterLastTimeData(e.target.value));
    }
    return (
        <div className='mx-auto sm:mx-0 mt-3 sm:mt-0'>
            <FormControl fullWidth>
                <InputLabel id="filter-date">Filter by date</InputLabel>
                <Select sx={{ width: '200px', bgcolor: 'white', borderRadius: 2 }}
                    labelId="filter-date"
                    label="Filter by date"
                    id="demo-simple-select"
                    value={filterDate}
                    onChange={handleDateFilter}
                >
                    <MenuItem value={"week"}>Last Week</MenuItem>
                    <MenuItem value={"month"}>Last Month</MenuItem>
                    <MenuItem value={"year"}>Last Year</MenuItem>
                    <MenuItem value={"2year"}>Last 2 Year</MenuItem>
                    <MenuItem value={"3year"}>Last 3 Year</MenuItem>
                    <MenuItem value={"4year"}>Last 4 Year</MenuItem>
                    <MenuItem value={"5year"}>Last 5 Year</MenuItem>
                    <MenuItem value={"6year"}>Last 6 Year</MenuItem>
                    <MenuItem value={"7year"}>Last 7 Year</MenuItem>
                    <MenuItem value={"8year"}>Last 8 Year</MenuItem>
                    <MenuItem value={"9year"}>Last 9 Year</MenuItem>
                    <MenuItem value={"10year"}>Last 10 Year</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default DateFilter;