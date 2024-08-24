import React from 'react';
import topImg from "../../assets/hero-image-wr.jpg";
import logo from "../../assets/Logo.svg"

const MainPage = () => {
    return (
        <div>
            <div className='upperImageDiv relative'>
                <img className='w-full' src={topImg} alt="" />
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' src={logo} alt="" />
            </div>

            <div className='lowerDiv h-screen bg-[#1B1D1F]'>
                <div className="innerDiv w-[92%] mx-auto h-[90vh] rounded-xl bg-[#282B30]">

                </div>
            </div>
        </div>
    );
};

export default MainPage;