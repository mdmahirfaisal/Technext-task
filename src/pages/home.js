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
    const [upcomingStatus, seUpcomingStatus] = React.useState("")
    const [filterDate, setFilterDate] = React.useState("")

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
        console.log(e.target.value);
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

    // Filter date 
    const handleDateFilter = (e) => {
        setFilterDate(e.target.value)
        let dateValue = e.target.value;

        /// get last week, month, year
        const getLastWeeksDate = (date) => {
            const now = new Date();

            return new Date(now.getFullYear(), now.getMonth(), now.getDate() - date);
        }


        let startDate = null;
        let endDate = null; new Date("2020-09-25")
        if (dateValue === "week") {
            startDate = new Date(getLastWeeksDate(7))
            endDate = new Date()
        }
        else if (dateValue === "month") {
            startDate = new Date(getLastWeeksDate(30))
            endDate = new Date()
        }
        else if (dateValue === "year") {
            startDate = new Date(getLastWeeksDate(365))
            endDate = new Date()
        }
        else if (dateValue === "2year") {
            startDate = new Date(getLastWeeksDate(730))
            endDate = new Date()
        }
        else if (dateValue === "3year") {
            startDate = new Date(getLastWeeksDate(1095))
            endDate = new Date()
        }
        else if (dateValue === "4year") {
            startDate = new Date(getLastWeeksDate(1460))
            endDate = new Date()
        }
        else if (dateValue === "5year") {
            startDate = new Date(getLastWeeksDate(1825))
            endDate = new Date()
        }
        else if (dateValue === "6year") {
            startDate = new Date(getLastWeeksDate(2190))
            endDate = new Date()
        }

        const resultLaunchDate = launchAllData?.filter(a => {
            let date = new Date(a.launch_date_local);
            return (date >= startDate && date <= endDate);
        })
        console.log(startDate)
        console.log(endDate)
        setMatchedData(resultLaunchDate)
    }


    // end filer functionality

    let displayData = null;
    // if (matchedData.length) {
    displayData = matchedData;
    // } else {
    //     displayData = launchAllData;
    // }

    return (
        <div>
            <NavigationBar />

            {/* --- search field --- */}
            <div className='w-[280px] sm:w-[60%] mx-auto mt-10' >
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
            <div className='flex flex-wrap mt-2 sm:items-center w-[98%] sm:w-[96%] mx-auto'>
                <div className='mx-auto sm:mx-0 sm:mr-5'>
                    <FormControl fullWidth>
                        <InputLabel id="launchStatus">Launch Status</InputLabel>
                        <Select sx={{ width: '200px' }}
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
                {/* --- upcoming filter field --- */}
                <div className='mx-auto sm:mx-0 sm:mr-5'>
                    <FormControl fullWidth>
                        <InputLabel id="upcomingStatus">Upcoming Status</InputLabel>
                        <Select sx={{ width: '200px' }}
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

                {/* --- Date filter field --- */}
                <div className='mx-auto sm:mx-0'>
                    <FormControl fullWidth>
                        <InputLabel id="filter-date">Filter by date</InputLabel>
                        <Select sx={{ width: '200px' }}
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
                        </Select>
                    </FormControl>
                </div>
            </div>

            <Home displayData={displayData} loading={loading} />
        </div>
    );
};

export default Index;