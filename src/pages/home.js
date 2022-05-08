import * as React from 'react';
import Home from '../components/Home/Home';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { useSelector } from 'react-redux';
import { fetchLaunchData } from '../redux/slices/launchSlice';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

const Index = () => {
    React.useEffect(() => {
        fetchLaunchData();
    }, [])
    const { launchAllData, loading } = useSelector(state => state.launch);
    const [matchedData, setMatchedData] = React.useState(launchAllData)

    //search functionality
    const handleSearch = (e) => {
        let newData = null;
        if (e.target.name === 'search') {
            let searchText = e.target.value;
            newData = launchAllData?.filter(launch => (launch.rocket.rocket_id || launch.rocket.rocket_name || launch.rocket.rocket_type).toLowerCase().includes(searchText.toLowerCase()))
            setMatchedData(newData);
            console.log(newData);
        }
    }
    let displayData = null;
    if (matchedData.length) {
        displayData = matchedData;
    } else {
        displayData = launchAllData;
    }

    return (
        <div>
            <NavigationBar />

            {/* --- search field --- */}

            <div className='w-[300px] sm:w-[60%] mx-auto mt-10' >
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Search by rocket id, name or type</InputLabel>
                    <OutlinedInput
                        placeholder='Search by rocket id, name or type...'
                        name='search'
                        type='text'
                        onChange={handleSearch}
                        startAdornment={<InputAdornment position="start"><SearchIcon fontSize='large' /></InputAdornment>}
                        label="Search by rocket id, name or type"
                    />
                </FormControl>
            </div>
            <Home displayData={displayData} loading={loading} />
        </div>
    );
};

export default Index;