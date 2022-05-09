import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { handleSearchByRocket } from '../../redux/slices/launchSlice';

const SearchBar = () => {
    const dispatch = useDispatch();

    return (
        <div className='w-[280px] sm:w-[60%] mx-auto mt-10' >
            <FormControl fullWidth sx={{ m: 1 }}>
                <p className='text-xl mb-3 font-semibold text-gray-500'>Search data by rocket id, name or type</p>
                <OutlinedInput
                    placeholder='Search by rocket id, name or type...'
                    name='search'
                    type='text'
                    onChange={(e) => dispatch(handleSearchByRocket(e.target.value))}
                    startAdornment={<InputAdornment position="start"><SearchIcon fontSize='large' /></InputAdornment>}
                />
            </FormControl>
        </div>
    );
}
export default SearchBar;
