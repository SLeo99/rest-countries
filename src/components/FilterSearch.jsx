import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function FilterSearch({handleFilter, handleQuery, query}) {

  const [active, setActive] = useState(false)

  const expandedStyles = "hidden flex-col sm:gap-4 sm:py-8 w-full xl:gap-2 xl:py-4 absolute top-full translate-y-1 left-0 bg-lightModeBg dark:bg-darkBlue z-50 rounded-md transition-colors"

  return (
    <section className="mx-auto mt-11 sm:mt-[48px] mb-16 xl:w-[97%] xl:my-12">
      <div className="w-10/12 mx-auto gap-10 flex flex-col sm:w-11/12 sm:mx-auto sm:gap-20 xl:gap-0 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative flex rounded-md overflow-hidden xl:w-[37.5%]">
          <div className="flex items-center p-6 sm:py-6 sm:pl-16 sm:pr-12 xl:pl-8 xl:pr-5 xl:py-[18px] bg-lightModeBg dark:bg-darkBlue transition-colors xl-w-full">
            <span className="text-xl sm:text-3xl xl:text-base text-lightModeText dark:text-white transition-colors pointer-events-none"><BsSearch /></span>
          </div>
          <input type="text" name="search" id="search" placeholder="Search for a country..." className="w-full outline-none border-0 sm:py-8 sm:pl-1 sm:text-2xl xl:text-sm xl:py-[18px] sm:text-lightModeText bg-lightModeBg dark:bg-darkBlue dark:text-white transition-colors" 
          onChange={(e) => 
            query === '' ? handleQuery(null) : handleQuery(e.target.value)
            }/>
        </div>
        <div className="relative w-9/12 sm:w-7/12 xl:w-[15.75%] rounded-md bg-lightModeBg dark:bg-darkBlue transition-colors">
          <div className="relative z-10 flex justify-between items-center py-5 px-3 sm:py-8 sm:pl-12 sm:pr-10 xl:px-6 xl:py-[18px] cursor-pointer" 
          onClick={()=> setActive(!active)}>
            <span className="text-lg sm:text-2xl xl:text-sm xl:font-semibold text-lightModeText dark:text-white pointer-events-none">Filter by Region</span>
            <div className="w-3 h-3 border-t-2 border-r-2 sm:w-4 sm:h-4 xl:w-2 xl:h-2 sm:border-t-4 sm:border-r-4 xl:border-t-2 xl:border-r-2 rotate-[135deg] border-lightModeText dark:border-white pointer-events-none -z-0"></div>
          </div>
          <ul id="dropdown" className={!active ? expandedStyles : expandedStyles.replace('hidden', 'flex')}>
            <li><p className="text-lg sm:text-2xl py-4 px-3 lg:py-0 lg:p-0 lg:pl-6 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors" 
            onClick={(e) => handleFilter(e.target.textContent)}>Africa</p></li>
            <li><p className="text-lg sm:text-2xl py-4 px-3 lg:py-0 lg:p-0 lg:pl-6 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors" 
            onClick={(e) => handleFilter(e.target.textContent)}>Americas</p></li>
            <li><p className="text-lg sm:text-2xl py-4 px-3 lg:py-0 lg:p-0 lg:pl-6 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors" 
            onClick={(e) => handleFilter(e.target.textContent)}>Asia</p></li>
            <li><p className="text-lg sm:text-2xl py-4 px-3 lg:py-0 lg:p-0 lg:pl-6 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors" 
            onClick={(e) => handleFilter(e.target.textContent)}>Europe</p></li>
            <li><p className="text-lg sm:text-2xl py-4 px-3 lg:py-0 lg:p-0 lg:pl-6 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors" 
            onClick={(e) => handleFilter(e.target.textContent)}>Oceania</p></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
