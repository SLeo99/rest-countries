import { useState } from "react";
import { BsMoonFill, BsMoon } from "react-icons/bs";
import xd from '../xd.json'


function App() {

  const [dark, setDark] = useState(false)

  function handleTheme() {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="w-full">
      <header className="bg-lightModeBg py-16 flex justify-center dark:bg-darkModeBg transition-colors">
        <div className="container mx-6 flex justify-between items-center">
          <h2 className="text-lightModeText- text-lg font-semibold dark:text-white transition-colors">Where in the world?</h2>
          <section onClick={handleTheme} className="flex items-center gap-2 cursor-pointer">
            {
            dark ? 
            <span className="text-lightModeText dark:text-white transition-colors"><BsMoonFill /></span> 
            : 
            <span className="text-lightModeText dark:text-white transition-colors"><BsMoon /></span>
            }
            <span className="text-lightModeText text-md font-semibold dark:text-white transition-colors">Dark Mode</span>
          </section>
        </div>
      </header>
      <section className="w-8/12 mx-auto grid gap-[72px] sm:grid-cols-fluid 2xl:w-10/12">
        {xd.map((item) => 
        <div key={item.name} className="grid grid-rows-[1fr] w-full rounded-md overflow-hidden">
          <div className="relative px-1 pb-[60%]">
            <img src={item.flags.svg} alt="country-flag-img" className="absolute top-0 left-0 w-full h-full object-cover" />
          </div>
          <div className="p-6 pb-11 flex flex-col gap-4 bg-lightModeBg shadow-xl">
            <p className="">{item.name}</p>
            <div className="flex flex-col">
              <p>Population: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </div>
        </div>
        )}
      </section>
      
    </div>
  )
}

export default App
