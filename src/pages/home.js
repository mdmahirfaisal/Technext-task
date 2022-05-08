import React from 'react';
import Home from '../components/Home/Home';
import NavigationBar from '../components/NavigationBar/NavigationBar';

const home = () => {
    return (
        <div>
            <NavigationBar />
            <Home />
        </div>
    );
};

export default home;