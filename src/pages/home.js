import React, { useEffect } from 'react';
import Home from '../components/Home/Home';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import SearchBar from '../components/SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import { fetchLaunchData } from '../redux/slices/launchSlice';

const Index = () => {
    useEffect(() => {
        fetchLaunchData();
    }, [])

    const { launchAllData, loading } = useSelector(state => state.launch);
    return (
        <div>
            <NavigationBar />
            <SearchBar launchAllData={launchAllData} loading={loading} />
            <Home launchAllData={launchAllData} loading={loading} />
        </div>
    );
};

export default Index;