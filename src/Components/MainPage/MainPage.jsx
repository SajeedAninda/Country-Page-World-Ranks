import React from 'react';
import topImg from "../../assets/hero-image-wr.jpg";
import logo from "../../assets/Logo.svg"
import searchLogo from "../../assets/Search.svg"

const MainPage = () => {
    return (
        <div>
            <div className='upperImageDiv relative z-0'>
                <img className='w-full' src={topImg} alt="" />
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' src={logo} alt="" />
            </div>

            <div className='lowerDiv h-screen bg-[#1C1D1F] relative'>
                <div className="innerDiv w-[92%] mx-auto h-[90vh] rounded-xl bg-[#1C1D1F] absolute -top-16 left-1/2 transform -translate-x-1/2 p-10 border border-[#282b30]">
                    <div className='text&inputBox flex justify-between items-center'>
                        <p className='text-[#6C727F] font-semibold text-[16px]'>
                            Found 223 Countries
                        </p>

                        <div className='w-[25%] searchBox relative'>
                            <input className='w-full pl-10 pr-2 py-2 rounded-lg text-[#6C727F] bg-[#282b30] placeholder:text-[12px] placeholder:text-[#6C727F] placeholder:font-semibold' placeholder='Search by Name, Region or Subregion' type="text" />

                            <img className='absolute top-2 left-3' src={searchLogo} alt="" />
                        </div>
                    </div>

                    <div className='mainSegment mt-10'>
                        <div className='filteringBox w-[22%]'>
                            <div>
                                <label className='text-[#6C727F] font-semibold text-[12px]' htmlFor="selectBox">
                                    Sort By
                                </label>
                                <br />
                                <select className='w-full py-3 px-2 border-2 border-[#282B30] rounded-xl bg-transparent text-[#D2D5DA] mt-2' name="selectBox" id="selectBox">
                                    <option className='bg-[#282B30]' value="area">Area</option>
                                    <option className='bg-[#282B30]' value="population" selected>Population</option>
                                </select>
                            </div>

                            <div className='mt-8'>
                                <p className='text-[#6C727F] font-semibold text-[12px]'>
                                    Region
                                </p>

                                <div className='flex flex-wrap w-full mt-4 gap-3'>
                                    <button className='text-[#6C727F] px-3 py-1 rounded-lg hover:bg-[#282B30] hover:text-[#D2D5DA]'>Americas</button>
                                    <button className='text-[#6C727F] px-3 py-1 rounded-lg hover:bg-[#282B30] hover:text-[#D2D5DA]'>Antarctica</button>
                                    <button className='text-[#6C727F] px-3 py-1 rounded-lg hover:bg-[#282B30] hover:text-[#D2D5DA]'>Africa</button>
                                    <button className='text-[#6C727F] px-3 py-1 rounded-lg hover:bg-[#282B30] hover:text-[#D2D5DA]'>Asia</button>
                                    <button className='text-[#6C727F] px-3 py-1 rounded-lg hover:bg-[#282B30] hover:text-[#D2D5DA]'>Europe</button>
                                    <button className='text-[#6C727F] px-3 py-1 rounded-lg hover:bg-[#282B30] hover:text-[#D2D5DA]'>Oceania</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;