import React from 'react';
import { useLoaderData } from 'react-router-dom';
import topImg from "../../assets/hero-image-wr.jpg";
import logo from "../../assets/Logo.svg";

const Details = () => {
    let [countryDetails] = useLoaderData();
    console.log(countryDetails);

    return (
        <div>
            <div className='upperImageDiv relative z-0'>
                <img className='w-full' src={topImg} alt="Top Image" />
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' src={logo} alt="Logo" />
            </div>
            {countryDetails?.name?.official}
        </div>
    );
};

export default Details;