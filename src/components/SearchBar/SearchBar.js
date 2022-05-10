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
        <div className='w-[98%] md:w-[90%] mx-auto mt-10' >
            <FormControl fullWidth>
                <OutlinedInput sx={{ bgcolor: 'white', borderRadius: 2 }}
                    placeholder='Search by rocket name...'
                    name='search'
                    type='text'
                    onChange={(e) => dispatch(handleSearchByRocket(e.target.value))}
                    startAdornment={<InputAdornment position="start"><SearchIcon sx={{ color: '#fc5c65' }} fontSize='large' /></InputAdornment>}
                />
            </FormControl>
        </div>
    );
}
export default SearchBar;
