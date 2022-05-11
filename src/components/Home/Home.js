import React from 'react';
import DisplayAllData from '../DisplayAllData/DisplayAllData';
import { CircularProgress } from '@mui/material';

const Home = ({ displayData, loading }) => {

    return (
        <div >
            {loading ?
                <h1 className='mt-12 font-bold'><CircularProgress /> </h1>
                :
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6 my-12">

                    {displayData?.map((launch, index) => <DisplayAllData
                        key={index}
                        launch={launch}
                    />)}

                </div>
            }
        </div>
    );
};

export default Home;