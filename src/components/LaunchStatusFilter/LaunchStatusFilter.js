import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { filterLaunchStatusData } from '../../redux/slices/launchSlice';

const LaunchStatusFilter = () => {
    const dispatch = useDispatch();
    const [launchStatus, setLaunchStatus] = React.useState("")

    const handleLaunchStatus = (e) => {
        setLaunchStatus(e.target.value)
        dispatch(filterLaunchStatusData(e.target.value))
    }

    return (
        <div className='mx-auto sm:mx-0 sm:mr-5 mt-3 sm:mt-0 '>
            <FormControl fullWidth>
                <InputLabel id="launchStatus">Launch Status</InputLabel>
                <Select sx={{ width: '200px', backgroundColor: 'white', borderRadius: 2 }}
                    labelId="launchStatus"
                    label="Launch Status"
                    id="demo-simple-select"
                    placeholder='Status'
                    value={launchStatus}
                    onChange={handleLaunchStatus}
                >
                    <MenuItem value={true}>Success</MenuItem>
                    <MenuItem value={false}>Failure</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default LaunchStatusFilter;