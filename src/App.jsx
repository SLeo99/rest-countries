import { useState } from "react";
import { BsMoonFill, BsMoon } from "react-icons/bs";


function App() {

  const [dark, setDark] = useState(false)

  function handleTheme() {
    setDark(!dark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <>
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
    </>
  )
}

export default App
