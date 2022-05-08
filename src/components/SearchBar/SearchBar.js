import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

export default function InputAdornments() {
    const [searchText, setSearchText] = React.useState("");



    return (
        <div className='w-[300px] sm:w-[60%] mx-auto mt-10' >
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Search by rocket name</InputLabel>
                <OutlinedInput
                    placeholder='Search by rocket name...'
                    onChange={(e) => setSearchText(e.target.value)}
                    startAdornment={<InputAdornment position="start"><SearchIcon fontSize='large' /></InputAdornment>}
                    label="Search by rocket name"
                />
            </FormControl>
        </div>
    );
}
