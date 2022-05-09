import * as React from 'react';
import Home from '../components/Home/Home';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunchData } from '../redux/slices/launchSlice';
import SearchBar from '../components/SearchBar/SearchBar';
import DateFilter from '../components/DateFilter/DateFilter';
import IsUpcomingFilter from '../components/IsUpcomingFilter/IsUpcomingFilter';
import LaunchStatusFilter from '../components/LaunchStatusFilter/LaunchStatusFilter';


const Index = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchLaunchData());
    }, [dispatch])
    const { launchAllData, displayFilterData, loading } = useSelector(state => state.launch);

    let displayData = null;
    if (displayFilterData.length) {
        displayData = displayFilterData;
    } else {
        displayData = launchAllData;
    }

    return (
        <div>
            <NavigationBar />
            <SearchBar />

            <p className='text-xl my-3 font-semibold text-gray-500'>Filter Data By Launch Status, Upcoming Status and Date</p>
            <div className='flex flex-wrap mt-2 sm:items-center w-[98%] sm:w-[96%] mx-auto'>
                <LaunchStatusFilter />
                <IsUpcomingFilter />
                <DateFilter />
            </div>

            <Home displayData={displayData} loading={loading} />
        </div>
    );
};

export default Index;