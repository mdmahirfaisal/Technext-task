import React from 'react';
import { CircularProgress } from '@mui/material';
import DisplayAllData from '../DisplayAllData/DisplayAllData';

const Home = ({ displayData, loading }) => {

    return (
        <div data-testid="myhomediv">
            {loading ?
                <h1 className='mt-12 font-bold'><CircularProgress /> </h1>
                :
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 my-12">

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