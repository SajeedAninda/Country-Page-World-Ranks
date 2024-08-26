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

            <div className='lowerDiv pb-20 min-h-[100vh] bg-[#1C1D1F] flex flex-col'>
                <div className="innerDiv w-[92%] mx-auto h-fit rounded-xl bg-[#1C1D1F] relative p-10 border border-[#282b30] mt-[-5rem]">
                    <div className='countryImage w-[320px] mx-auto mt-[-5rem]'>
                        <img className='w-full object-contain rounded-lg' src={countryDetails?.flags.png} alt="" />
                    </div>
                </div>
            </div>
            {countryDetails?.name?.official}
        </div>
    );
};

export default Details;