import React from 'react';
import { CircularProgress } from '@mui/material';
import DisplayAllData from '../DisplayAllData/DisplayAllData';

const Home = ({ launchAllData, loading }) => {

    console.log(launchAllData);
    return (
        <div className='mx-auto w-[98%]'>
            <h2 className='text-3xl md:text-4xl my-9 border-b'>Display Launch Details: ({launchAllData?.length})</h2>
            {loading ?
                <h1 className='mt-12 font-bold'><CircularProgress /> </h1>
                :
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-7 xl:gap-9">

                    {launchAllData.map((launch, index) => <DisplayAllData
                        key={index}
                        launch={launch}
                    />)}

                </div>
            }
        </div>
    );
};

export default Home;