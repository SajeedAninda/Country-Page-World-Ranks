import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import topImg from "../../assets/hero-image-wr.jpg";
import logo from "../../assets/Logo.svg";

const Details = () => {
    let [countryDetails] = useLoaderData();
    const [neighboringCountries, setNeighboringCountries] = useState([]);

    useEffect(() => {
        const fetchAllCountries = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const neighbors = data.filter(country =>
                countryDetails.borders.includes(country.cca3)
            );
            setNeighboringCountries(neighbors);
        };
        fetchAllCountries();
    }, [countryDetails]);

    const getCountryNameByCca3 = (cca3) => {
        const country = neighboringCountries?.find(country => country.cca3 === cca3);
        return country ? country.name.common : cca3;
    };

    return (
        <div>
            <div className='upperImageDiv relative z-0'>
                <img className='w-full h-[50vh] object-cover' src={topImg} alt="Top Image" />
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={logo} alt="Logo" />
            </div>

            <div className='lowerDiv pb-20 min-h-[100vh] bg-[#1C1D1F] flex flex-col'>
                <div className="innerDiv lg:w-[70%] mx-auto h-fit rounded-none lg:rounded-xl bg-[#1C1D1F] relative py-10 border border-[#282b30] mt-[-5rem]">
                    <div className='countryImage w-[320px] mx-auto mt-[-5rem]'>
                        <img className='w-full object-contain rounded-lg' src={countryDetails?.flags?.png} alt={countryDetails?.name?.common} />
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
                            <span className='pr-4'>Population</span> {countryDetails?.population?.toLocaleString()}
                        </div>

                        <div className='bg-[#282B30] px-5 py-3 rounded-xl text-[#D2D5DA] font-semibold text-[16px]'>
                            <span className='pr-4'>Area (km<sup>2</sup>)</span> {countryDetails?.area.toLocaleString()}
                        </div>
                    </div>

                    <div className='mt-8'>
                        <div className='w-full border-t border-b border-[#46484d] flex justify-between py-6 px-10'>
                            <div className='text-[#6C727F] text-[16px] font-semibold'>
                                Capital
                            </div>
                            <div className='text-[#D2D5DA] text-[16px] font-semibold'>
                                {countryDetails?.capital?.[0] || "N/A"}
                            </div>
                        </div>

                        <div className='w-full border-b border-[#46484d] flex justify-between py-6 px-10'>
                            <div className='text-[#6C727F] text-[16px] font-semibold'>
                                Sub-Region
                            </div>
                            <div className='text-[#D2D5DA] text-[16px] font-semibold'>
                                {countryDetails?.subregion || "N/A"}
                            </div>
                        </div>

                        <div className='w-full border-b border-[#46484d] flex justify-between py-6 px-10'>
                            <div className='text-[#6C727F] text-[16px] font-semibold'>
                                Language
                            </div>
                            <div className='text-[#D2D5DA] text-[16px] font-semibold'>
                                {Object.values(countryDetails?.languages || {}).join(", ") || "N/A"}
                            </div>
                        </div>

                        <div className='w-full border-b border-[#46484d] flex justify-between py-6 px-10'>
                            <div className='text-[#6C727F] text-[16px] font-semibold'>
                                Currencies
                            </div>
                            <div className='text-[#D2D5DA] text-[16px] font-semibold'>
                                {Object.values(countryDetails?.currencies || {}).map(c => `${c.name} (${c.symbol})`).join(", ") || "N/A"}
                            </div>
                        </div>

                        <div className='w-full border-b border-[#46484d] flex justify-between py-6 px-10'>
                            <div className='text-[#6C727F] text-[16px] font-semibold'>
                                Continent
                            </div>
                            <div className='text-[#D2D5DA] text-[16px] font-semibold'>
                                {countryDetails?.continents?.[0] || "N/A"}
                            </div>
                        </div>
                    </div>

                    {neighboringCountries.length > 0 && (
                        <div className='neighboring-countries mt-10 px-10'>
                            <div className='text-[#6C727F] text-[16px] font-semibold'>
                                Neighbouring Countries
                            </div>
                            <div className='flex justify-start items-center gap-6 mt-2'>
                                {neighboringCountries?.map((neighbor) => (
                                    <div key={neighbor?.cca3} className='neighbor-country'>
                                        <img className='w-[80px] h-[48px] object-contain rounded-lg mb-2' src={neighbor.flags.png} alt={neighbor?.name.common} />
                                        <Link to={`/${neighbor?.name.official}`}>
                                            <p className='text-[#D2D5DA] text-[16px] text-center font-semibold hover:underline'>
                                                {getCountryNameByCca3(neighbor.cca3)}
                                            </p>
                                        </Link>

                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className='flex justify-center mt-6'>
                        <Link to={"/"} className='bg-[#282B30] px-5 py-3 rounded-xl text-[#D2D5DA] font-semibold text-[16px] hover:opacity-55'>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
