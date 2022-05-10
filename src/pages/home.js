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
        <>
            <NavigationBar />
            <div className="mx-auto w-[98%] sm:max-w-[1200px]">
                <SearchBar />
                <div className='flex flex-wrap mt-2 items-center justify-center w-[98%] mx-auto'>
                    <LaunchStatusFilter />
                    <IsUpcomingFilter />
                    <DateFilter />
                </div>
                {displayFilterData.length ? <p className='text-xl my-3 font-semibold text-gray-500'>Now Displayed Filtered Data </p> :
                    <p className='text-2xl md:text-3 my-3 font-semibold text-red-500'>Filter data not available please search or filter another option</p>}

                <Home displayData={displayData} loading={loading} />
            </div>
        </>
    );
};

export default Index;