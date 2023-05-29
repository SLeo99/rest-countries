import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function FilterSearch({handleFilter, handleQuery, query}) {

  const [active, setActive] = useState(false)

  return (
    <section className="mx-auto mt-11 sm:mt-[48px] mb-16 xl:w-[97%] xl:my-12">
      <div className="relative w-10/12 mx-auto gap-10 flex flex-col sm:w-11/12 sm:mx-auto sm:gap-20 xl:gap-0 xl:flex-row xl:items-center xl:justify-between">
        <div className="relative flex rounded-md overflow-hidden xl:w-[37.5%] shadow-lightModeText/20 shadow-xl">
          <div className="flex items-center p-6 sm:py-6 sm:pl-16 sm:pr-12 xl:pl-8 xl:pr-5 xl:py-[18px] bg-lightModeBg dark:bg-darkBlue transition-colors xl-w-full">
            <span className="text-xl sm:text-3xl xl:text-base text-lightModeText dark:text-white transition-colors pointer-events-none group-focus/input:text-emerald-300"><BsSearch /></span>
          </div>
          <input type="text" name="search" id="search" placeholder="Search for a country..." className="w-full outline-none border-0 sm:py-8 sm:px-1 sm:text-2xl xl:text-sm xl:py-[18px] sm:text-lightModeText bg-lightModeBg dark:bg-darkBlue dark:text-white transition-colors group/input" 
          onChange={(e) => 
            query === '' ? handleQuery(null) : handleQuery(e.target.value.toLowerCase())
            }/>
        </div>
        <div className="relative w-9/12 sm:w-7/12 xl:w-[15.75%] rounded-md bg-lightModeBg dark:bg-darkBlue transition-colors">
          <div 
          onClick={()=> setActive(active ? false : true)} 
          className="flex justify-between items-center py-5 px-3 sm:py-8 sm:pl-12 sm:pr-10 xl:px-6 xl:py-[18px] cursor-pointer shadow-lightModeText/20 shadow-xl group/filter">
            <span className={active ? 'filterActive' : 'filter'}>Filter by Region</span>
            <div className={!active ? 'unactiveArrow' : 'activeArrow'}></div>
          </div>
          <ul className={!active ? 'collapsed' : 'expanded'}>
              <li className="xl:w-max group/li cursor-pointer"><p className="xl:inline text-lg sm:text-2xl py-6 px-3 lg:py-0 lg:p-0 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors dark:group-hover/li:bg-darkModeBg/30 xl:dark:group-hover/li:bg-transparent dark:group-hover/li:text-emerald-300 cursor-pointer" 
              onClick={(e) => {
                handleFilter(e.target.textContent)
                setActive(false)
                }
              }>Africa</p></li>
              <li className="xl:w-max group/li cursor-pointer"><p className="xl:inline text-lg sm:text-2xl py-6 px-3 lg:py-0 lg:p-0 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors dark:group-hover/li:bg-darkModeBg/30 xl:dark:group-hover/li:bg-transparent dark:group-hover/li:text-emerald-300 cursor-pointer" 
              onClick={(e) => {
                handleFilter(e.target.textContent)
                setActive(false)
                }
              }>Americas</p></li>
              <li className="xl:w-max group/li cursor-pointer"><p className="xl:inline text-lg sm:text-2xl py-6 px-3 lg:py-0 lg:p-0 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors dark:group-hover/li:bg-darkModeBg/30 xl:dark:group-hover/li:bg-transparent dark:group-hover/li:text-emerald-300 cursor-pointer" 
              onClick={(e) => {
                handleFilter(e.target.textContent)
                setActive(false)
                }
              }>Asia</p></li>
              <li className="xl:w-max group/li cursor-pointer"><p className="xl:inline text-lg sm:text-2xl py-6 px-3 lg:py-0 lg:p-0 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors dark:group-hover/li:bg-darkModeBg/30 xl:dark:group-hover/li:bg-transparent dark:group-hover/li:text-emerald-300 cursor-pointer" 
              onClick={(e) => {
                handleFilter(e.target.textContent)
                setActive(false)
                }
              }>Europe</p></li>
              <li className="xl:w-max group/li cursor-pointer"><p className="xl:inline text-lg sm:text-2xl py-6 px-3 lg:py-0 lg:p-0 xl:text-sm text-lightModeText dark:text-white w-full sm:pl-12 transition-colors dark:group-hover/li:bg-darkModeBg/30 xl:dark:group-hover/li:bg-transparent dark:group-hover/li:text-emerald-300 cursor-pointer" 
              onClick={(e) => {
                handleFilter(e.target.textContent)
                setActive(false)
                }
              }>Oceania</p></li>
          </ul>
        </div>
      </div>
    </section>
  )
}
