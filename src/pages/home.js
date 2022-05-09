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
    const [launchStatus, setLaunchStatus] = React.useState("Launch Status")
    const [upcomingStatus, seUpcomingStatus] = React.useState("Upcoming Status")

    //search functionality
    const handleSearch = (e) => {
        let newData = null;
        if (e.target.name === 'search') {
            let searchText = e.target.value;
            newData = launchAllData?.filter(launch => (launch.rocket.rocket_id || launch.rocket.rocket_name || launch.rocket.rocket_type).toLowerCase().includes(searchText.toLowerCase()))
            setMatchedData(newData);
        }
    };

    // Status Filter functionality
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
    // Upcoming Filter functionality
    const handleIsUpcoming = (e) => {
        seUpcomingStatus(e.target.value)
        let newData = null;
        let selectField = e.target.value;
        if (selectField) {
            newData = (matchedData.length === true || launchAllData)?.filter(launch => launch.upcoming === selectField)
        } else {
            newData = (matchedData.length === true || launchAllData)?.filter(launch => launch.upcoming === selectField)
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
                    <p className='text-xl mb-3 font-semibold text-gray-500'>Search data by rocket id, name or type</p>
                    <OutlinedInput
                        placeholder='Search by rocket id, name or type...'
                        name='search'
                        type='text'
                        onChange={handleSearch}
                        startAdornment={<InputAdornment position="start"><SearchIcon fontSize='large' /></InputAdornment>}
                    />
                </FormControl>
            </div>

            {/* --- Launch Status filter field --- */}
            <p className='text-xl my-3 font-semibold text-gray-500'>Filter Data By Launch Status, Upcoming Status and Date</p>
            <div className='flex mt-2 items-center'>
                <div className='mr-2 sm:mr-5'>
                    <InputLabel id="launchStatus">Launch Status</InputLabel>
                    <Select sx={{ width: '200px' }}
                        labelId="launchStatus"
                        id="demo-simple-select"
                        placeholder='Status'
                        value={launchStatus}
                        onChange={handleLaunchStatus}
                    >
                        <MenuItem value={true}>Success</MenuItem>
                        <MenuItem value={false}>Failure</MenuItem>
                    </Select>
                </div>
                {/* --- upcoming filter field --- */}
                <div>
                    <InputLabel id="upcomingStatus">Upcoming Status</InputLabel>

                    <Select sx={{ width: '200px' }}
                        labelId="upcomingStatus"
                        id="demo-simple-select"
                        placeholder='Status'
                        value={upcomingStatus}
                        onChange={handleIsUpcoming}
                    >

                        <MenuItem value={true}>Is it upcoming</MenuItem>
                        <MenuItem value={false}>Is it not upcoming</MenuItem>
                    </Select>
                </div>
            </div>

            <Home displayData={displayData} loading={loading} />
        </div>
    );
};

export default Index;