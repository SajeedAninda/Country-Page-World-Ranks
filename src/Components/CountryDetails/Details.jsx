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
                <div className="innerDiv w-[70%] mx-auto h-fit rounded-xl bg-[#1C1D1F] relative p-10 border border-[#282b30] mt-[-5rem]">
                    <div className='countryImage w-[320px] mx-auto mt-[-5rem]'>
                        <img className='w-full object-contain rounded-lg' src={countryDetails?.flags?.png} alt="" />
                    </div>
                    <div>
                        <p className='text-[30px] font-bold text-[#D2D5DA] text-center mt-4'>
                            {countryDetails?.name?.common}
                        </p>

                        <p className='text-[16px] font-semibold text-[#D2D5DA] mt-1 text-center'>
                            {countryDetails?.name?.official}
                        </p>
                    </div>

                    <div className='flex justify-center items-center gap-4 mt-4'>
                        <div className='bg-[#282B30] px-5 py-3 rounded-xl text-[#D2D5DA] font-semibold text-[16px]'>
                            <span className='pr-4'> Population</span> {countryDetails?.population?.toLocaleString()}
                        </div>

                        <div className='bg-[#282B30] px-5 py-3 rounded-xl text-[#D2D5DA] font-semibold text-[16px]'>
                            <span className='pr-4'>Area (km<sup>2</sup>)</span> {countryDetails?.area.toLocaleString()}
                        </div>
                    </div>
                </div>
            </div>
            {countryDetails?.name?.official}
        </div>
    );
};

export default Details;