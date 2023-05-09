import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";
import FilterSearch from "./components/FilterSearch";
import CountriesList from "./components/CountriesList";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { useState } from "react";
import useFetch from "./hooks/useFetch";


function App() {

  const [array,setArray] = useState(null)
  const [country,setCountry] = useState([])
  const [query, setQuery] = useState('')

  function handleFilter(e) {
    setArray(e)
  }
  function handleCountry(e) {
    setCountry(e)
  }
  function handleSearch (e) {
    setQuery(e)
    setArray(null)
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element=
        { 
          <>
            <FilterSearch 
            handleFilter={handleFilter}
            handleQuery={handleSearch}
            query={query}
            />
            <CountriesList 
            // countrylink={handleCountry}
            region={array}
            query={query}
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
