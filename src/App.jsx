import { useState } from "react";
import { BsMoonFill, BsMoon } from "react-icons/bs";
import FilterSearch from "./components/FilterSearch";
import CountriesCard from "./components/CountriesCard";
import useFetch from "./hooks/useFetch";
import CountryDetail from "./components/CountryDetail";


function App() {
  const [dark, setDark] = useState(false)
  function handleTheme() {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  const ALL_COUNTRIES = 'https://restcountries.com/v3.1/all'
  const data = useFetch(ALL_COUNTRIES)


  return (
    <div className="w-full">
      
      <header className="bg-lightModeBg py-16 flex dark:bg-darkBlue transition-colors xl:py-[24px]">
        <div className="flex justify-between w-full mx-6 sm:w-11/12 sm:mx-auto xl:w-[88.75%]">
          <h2 className="text-lightModeText sm:text-3xl xl:text-2xl xl:font-extrabold tracking-tight xl:tracking-normal font-semibold dark:text-white transition-colors">Where in the world?</h2>
          <section onClick={handleTheme} className="flex items-center gap-2 sm:gap-5 xl:gap-2 cursor-pointer">
            {
            dark ? 
            <span className="text-lightModeText dark:text-white transition-colors sm:text-2xl xl:text-base"><BsMoonFill /></span> 
            : 
            <span className="text-lightModeText dark:text-white transition-colors sm:text-2xl xl:text-base"><BsMoon /></span>
            }
            <span className="text-lightModeText text-md font-semibold sm:text-2xl xl:text-base dark:text-white transition-colors">Dark Mode</span>
          </section>
        </div>
      </header>
      {/* <FilterSearch />
      <main className="w-10/12 sm:w-[70.5%] mx-auto grid gap-[80px] xl:gap-[76px] xl:container lg:grid-cols-fluid xl:w-[88.75%]  2xl:max-w-[91.5%]">
        {data.map((item, i) => (
          <CountriesCard key={i} img={item.flags.svg} country={item.name.common} population={item.population} region={item.region} capital={item.capital}></CountriesCard>
        ))}
      </main> */}
      <CountryDetail />
      
    </div>
  )
}

export default App
