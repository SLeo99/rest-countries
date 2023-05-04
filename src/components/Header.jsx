import { useState } from "react";
import { BsMoonFill, BsMoon } from "react-icons/bs";

export default function Header() {
  const [dark, setDark] = useState(false)
  
  function handleTheme() {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
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
    </>
  )
}
