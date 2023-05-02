import { useState } from "react";
import { BsMoonFill, BsMoon } from "react-icons/bs";
import FilterSearch from "./components/FilterSearch";
import CountriesCard from "./components/CountriesCard";
import useFetch from "./hooks/useFetch";


function App() {
  const [dark, setDark] = useState(false)
  function handleTheme() {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  const ALL_COUNTRIES = 'https://restcountries.com/v3.1/all'
  const data = useFetch(ALL_COUNTRIES)


  return (
    <div className="w-full dark:bg-darkModeBg transition-colors">
      
      <header className="bg-lightModeBg py-16 flex justify-center dark:bg-darkBlue transition-colors">
        <div className="mx-6 flex justify-between sm:w-11/12 sm:mx-auto">
          <h2 className="text-lightModeText sm:text-3xl tracking-tight font-semibold dark:text-white transition-colors">Where in the world?</h2>
          <section onClick={handleTheme} className="flex items-center gap-2 sm:gap-5 cursor-pointer">
            {
            dark ? 
            <span className="text-lightModeText dark:text-white transition-colors sm:text-2xl"><BsMoonFill /></span> 
            : 
            <span className="text-lightModeText dark:text-white transition-colors sm:text-2xl"><BsMoon /></span>
            }
            <span className="text-lightModeText text-md font-semibold sm:text-2xl dark:text-white transition-colors">Dark Mode</span>
          </section>
        </div>
      </header>
      <FilterSearch />
      <main className="w-8/12 mx-auto grid gap-[72px] md:container md:grid-cols-fluid md:w-full 2xl:max-w-[91.5%]">
        {data.map((item, i) => (
          <CountriesCard key={i} img={item.flags.svg} country={item.name.common} population={item.population} region={item.region} capital={item.capital}></CountriesCard>
        ))}
      </main>
      
    </div>
  )
}

export default App
