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
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';


const Index = () => {
    React.useEffect(() => {
        fetchLaunchData();
    }, [])
    const { launchAllData, loading } = useSelector(state => state.launch);
    const [matchedData, setMatchedData] = React.useState(launchAllData)
    const [launchStatus, setLaunchStatus] = React.useState("")

    //search functionality
    const handleSearch = (e) => {
        let newData = null;
        if (e.target.name === 'search') {
            let searchText = e.target.value;
            newData = launchAllData?.filter(launch => (launch.rocket.rocket_id || launch.rocket.rocket_name || launch.rocket.rocket_type).toLowerCase().includes(searchText.toLowerCase()))
            setMatchedData(newData);
        }
    };

    // Filter functionality
    const handleLaunchStatus = (e) => {
        setLaunchStatus(e.target.value)
        let newData = null;
        let selectField = e.target.value;
        if (selectField) {
            newData = (matchedData.length === true || launchAllData)?.filter(launch => launch.launch_success === selectField)
        } else {
            newData = (matchedData.length === true || launchAllData)?.filter(launch => launch.launch_success === selectField)
        }
        setMatchedData(newData)
        console.log(newData);
    };



    // end filer functionality

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

            {/* --- filter field --- */}
            <div className='flex mt-2'>
                <div>
                    <InputLabel id="demo-simple-select-label">Launch Status</InputLabel>
                    <Select sx={{ width: '200px' }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        placeholder='Status'
                        value={launchStatus}
                        onChange={handleLaunchStatus}
                    >
                        <MenuItem value={true}>Success</MenuItem>
                        <MenuItem value={false}>Failure</MenuItem>
                    </Select>
                </div>
            </div>

            <Home displayData={displayData} loading={loading} />
        </div>
    );
};

export default Index;