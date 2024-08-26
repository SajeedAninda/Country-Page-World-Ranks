import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    let countryDetails = useLoaderData();
    console.log(countryDetails);
    
    return (
        <div>
            Country Name
        </div>
    );
};

export default Details;