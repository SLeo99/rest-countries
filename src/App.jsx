import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";
import FilterSearch from "./components/FilterSearch";
import CountriesList from "./components/CountriesList";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useState } from "react";
import useFetch from "./hooks/useFetch";



function App() {

  const [country,setCountry] = useState(null)

  function handleCountry(e) {
    setCountry(e)
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element=
        { 
          <>
            <FilterSearch />
            <CountriesList 
            countrylink={handleCountry}
            />
          </>
        }
        />
        <Route path={`/:${country}`} element=
          {
          <CountryDetail 
          countrydetails={country}/>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
