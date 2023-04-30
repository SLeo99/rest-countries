import { BsSearch } from "react-icons/bs";

export default function FilterSearch() {

  function selectFilterBtn(e) {
    e.target.nextElementSibling.classList.toggle('hidden')
    e.target.nextElementSibling.classList.toggle('flex')
  }

  return (
    <section className="w-full flex flex-col items-center my-11">
      <div className="mx-6 flex flex-col sm:w-11/12 sm:mx-auto space-y-20">
        <div className="relative flex flex-row-reverse rounded-md overflow-hidden">
          <input type="text" name="search" id="search" placeholder="Search for a country..." className="w-full outline-none border-0 py-8 pl-1 text-2xl text-lightModeText bg-lightModeBg dark:bg-darkBlue dark:text-white transition-colors" />
          <div className="flex items-center py-6 pl-16 pr-12 bg-lightModeBg dark:bg-darkBlue transition-colors">
            <span className="text-lightModeText dark:text-white transition-colors"><BsSearch size={32}/></span>
          </div>
        </div>
        <div className="relative w-7/12 rounded-md bg-lightModeBg dark:bg-darkBlue transition-colors">
          <div className="relative z-10 flex justify-between items-center py-8 pl-12 pr-10 cursor-pointer" onClick={(e)=> selectFilterBtn(e)}>
            <span className="text-2xl text-lightModeText dark:text-white pointer-events-none">Filter by Region</span>
            <div className="w-4 h-4 border-t-4 border-r-4 rotate-[135deg] border-lightModeText dark:border-white"></div>
          </div>
          <ul className="hidden flex-col gap-4 py-8 w-full absolute top-full translate-y-2 left-0 bg-lightModeBg dark:bg-darkBlue z-10 rounded-md transition-colors">
            <li><p className="text-2xl text-lightModeText dark:text-white w-full pl-12 transition-colors">Africa</p></li>
            <li><p className="text-2xl text-lightModeText dark:text-white w-full pl-12 transition-colors">America</p></li>
            <li><p className="text-2xl text-lightModeText dark:text-white w-full pl-12 transition-colors">Asia</p></li>
            <li><p className="text-2xl text-lightModeText dark:text-white w-full pl-12 transition-colors">Europe</p></li>
            <li><p className="text-2xl text-lightModeText dark:text-white w-full pl-12 transition-colors">Oceania</p></li>
        </ul>
        </div>
      </div>
    </section>
  )
}
