import React, { useState, useEffect } from 'react';
import topImg from "../../assets/hero-image-wr.jpg";
import logo from "../../assets/Logo.svg";
import searchLogo from "../../assets/Search.svg";

const MainPage = () => {
    const initialRegions = {
        Americas: true,
        Antarctica: true,
        Africa: true,
        Asia: true,
        Europe: true,
        Oceania: true,
    };

    const [selectedRegions, setSelectedRegions] = useState(initialRegions);
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortOption, setSortOption] = useState('population');
    const [isUnMember, setIsUnMember] = useState(false);
    const [isIndependent, setIsIndependent] = useState(false);
    const regions = Object.keys(initialRegions);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setCountries(data);
                setFilteredCountries(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        let filtered = countries.filter((country) => {
            const matchesSearchText = 
                country.name.common.toLowerCase().includes(searchText.toLowerCase()) ||
                country.region.toLowerCase().includes(searchText.toLowerCase()) ||
                (country.subregion && country.subregion.toLowerCase().includes(searchText.toLowerCase()));

            const matchesRegion = selectedRegions[country.region];
            const matchesUnMember = !isUnMember || country.unMember;
            const matchesIndependent = !isIndependent || country.independent;

            return matchesSearchText && matchesRegion && matchesUnMember && matchesIndependent;
        });

        if (sortOption === 'population') {
            filtered = filtered.sort((a, b) => b.population - a.population);
        } else if (sortOption === 'area') {
            filtered = filtered.sort((a, b) => b.area - a.area);
        }

        setFilteredCountries(filtered);
    }, [searchText, sortOption, countries, selectedRegions, isUnMember, isIndependent]);

    const handleRegionClick = (region) => {
        setSelectedRegions((prev) => ({
            ...prev,
            [region]: !prev[region],
        }));
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleUnMemberChange = () => {
        setIsUnMember(!isUnMember);
    };

    const handleIndependentChange = () => {
        setIsIndependent(!isIndependent);
    };

    return (
        <div>
            <div className='upperImageDiv relative z-0'>
                <img className='w-full' src={topImg} alt="Top Image" />
                <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' src={logo} alt="Logo" />
            </div>

            <div className='lowerDiv pb-20 min-h-[100vh] bg-[#1C1D1F] flex flex-col'>
                <div className="innerDiv w-[92%] mx-auto h-fit rounded-xl bg-[#1C1D1F] relative p-10 border border-[#282b30] mt-[-5rem]">
                    <div className='text&inputBox flex justify-between items-center'>
                        <p className='text-[#6C727F] font-semibold text-[16px]'>
                            Found {filteredCountries.length} Countries
                        </p>

                        <div className='w-[25%] searchBox relative'>
                            <input 
                                className='w-full pl-10 pr-2 py-2 rounded-lg text-[#6C727F] bg-[#282b30] placeholder:text-[12px] placeholder:text-[#6C727F] placeholder:font-semibold' 
                                placeholder='Search by Name, Region or Subregion' 
                                type="text" 
                                value={searchText} 
                                onChange={handleSearchChange} 
                            />
                            <img className='absolute top-2 left-3' src={searchLogo} alt="Search Icon" />
                        </div>
                    </div>

                    <div className='mainSegment mt-10 flex gap-12'>
                        <div className='filteringBox w-[22%]'>
                            <div>
                                <label className='text-[#6C727F] font-semibold text-[12px]' htmlFor="selectBox">
                                    Sort By
                                </label>
                                <br />
                                <select 
                                    className='w-full py-3 px-2 border-2 border-[#282B30] rounded-xl bg-transparent text-[#D2D5DA] mt-2' 
                                    name="selectBox" 
                                    id="selectBox" 
                                    value={sortOption} 
                                    onChange={handleSortChange}
                                >
                                    <option className='bg-[#282B30]' value="area">Area</option>
                                    <option className='bg-[#282B30]' value="population">Population</option>
                                </select>
                            </div>

                            <div className='mt-8 regionDiv'>
                                <p className='text-[#6C727F] font-semibold text-[12px]'>
                                    Region
                                </p>

                                <div className='regionButtons flex flex-wrap w-full mt-4 gap-3'>
                                    {regions.map((region) => (
                                        <button
                                            key={region}
                                            className={`px-3 py-1 rounded-lg text-[#6C727F] ${selectedRegions[region] ? 'bg-[#282B30] text-[#D2D5DA]' : 'hover:bg-[#282B30] hover:text-[#D2D5DA]'}`}
                                            onClick={() => handleRegionClick(region)}
                                        >
                                            {region}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className='statusDiv mt-8'>
                                <p className='text-[#6C727F] font-semibold text-[12px]'>
                                    Status
                                </p>
                                <div className='checkBoxDiv mt-4'>
                                    <div>
                                        <div className='flex items-center'>
                                            <input
                                                type="checkbox"
                                                id="unMember"
                                                className="appearance-none h-5 w-5 border border-[#6C727F] rounded-sm bg-[#1C1D1F] checked:bg-[#4E80EE] focus:outline-none transition duration-200 cursor-pointer"
                                                checked={isUnMember}
                                                onChange={handleUnMemberChange}
                                            />
                                            <label
                                                htmlFor="unMember"
                                                className="text-[#D2D5DA] text-[14px] font-semibold pl-3 cursor-pointer"
                                            >
                                                Member of United Nations
                                            </label>
                                        </div>

                                        <div className='flex items-center mt-2'>
                                            <input
                                                type="checkbox"
                                                id="independent"
                                                className="appearance-none h-5 w-5 border border-[#6C727F] rounded-sm bg-[#1C1D1F] checked:bg-[#4E80EE] focus:outline-none transition duration-200 cursor-pointer"
                                                checked={isIndependent}
                                                onChange={handleIndependentChange}
                                            />
                                            <label
                                                htmlFor="independent"
                                                className="text-[#D2D5DA] text-[14px] font-semibold pl-3 cursor-pointer"
                                            >
                                                Independent
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="countryBox w-[78%]">
                            <div className='tableHeader grid items-center grid-cols-4'>
                                <div className='pl-6'>
                                    <p className='text-[12px] font-semibold text-[#6C727F]'>
                                        Flag
                                    </p>
                                </div>
                                <div className=''>
                                    <p className='text-[12px] font-semibold text-[#6C727F]'>
                                        Name
                                    </p>
                                </div>
                                <div className=''>
                                    <p className='text-[12px] font-semibold text-[#6C727F]'>
                                        Population
                                    </p>
                                </div>
                                <div className=''>
                                    <p className='text-[12px] font-semibold text-[#6C727F]'>
                                        Area(km<sup>2</sup>)
                                    </p>
                                </div>
                            </div>

                            <hr className='my-6 border border-[#3d4149]' />

                            {filteredCountries.map((country) => (
                                <div key={country.cca3} className='countryRow grid items-center grid-cols-4 mt-6'>
                                    <div className='pl-6'>
                                        <img className='w-[50px]' src={country.flags.png} alt={`${country.name.common} flag`} />
                                    </div>
                                    <div className=''>
                                        <p className='text-[12px] font-semibold text-[#D2D5DA]'>
                                            {country.name.common}
                                        </p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[12px] font-semibold text-[#D2D5DA]'>
                                            {country.population.toLocaleString()}
                                        </p>
                                    </div>
                                    <div className=''>
                                        <p className='text-[12px] font-semibold text-[#D2D5DA]'>
                                            {country.area.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
