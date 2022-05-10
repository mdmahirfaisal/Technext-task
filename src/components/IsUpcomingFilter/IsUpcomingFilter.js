import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterIsUpcomingData } from '../../redux/slices/launchSlice';


const IsUpcomingFilter = () => {
    const dispatch = useDispatch();
    const [upcomingStatus, seUpcomingStatus] = React.useState("")

    // Upcoming Filter functionality
    const handleIsUpcoming = (e) => {
        seUpcomingStatus(e.target.value)
        dispatch(filterIsUpcomingData(e.target.value))
    };

    return (
        <div className='mx-auto sm:mx-0 sm:mr-5 mt-3 sm:mt-0'>
            <FormControl fullWidth>
                <InputLabel id="upcomingStatus">Upcoming Status</InputLabel>
                <Select sx={{ width: '200px', bgcolor: 'white', borderRadius: 2 }}
                    labelId="upcomingStatus"
                    label="Upcoming Status"
                    id="demo-simple-select"
                    value={upcomingStatus}
                    onChange={handleIsUpcoming}
                >

                    <MenuItem value={true}>Is it upcoming</MenuItem>
                    <MenuItem value={false}>Is it not upcoming</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default IsUpcomingFilter;