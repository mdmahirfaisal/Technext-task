import React, { useEffect, useState } from 'react';


const Home = () => {
    const [launchData, setLaunchData] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(res => res.json())
            .then(data => setLaunchData(data))
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(launchData);
    return (
        <div>
            <h2 className='text-5xl'>This is home</h2>
        </div>
    );
};

export default Home;