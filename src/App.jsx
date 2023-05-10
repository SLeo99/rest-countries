import Header from "./components/Header";
import CountryDetail from "./components/CountryDetail";
import FilterSearch from "./components/FilterSearch";
import CountriesList from "./components/CountriesList";
import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom'
import { useState } from "react";
// useParams

function App() {

  const [array,setArray] = useState(null)
  const [country,setCountry] = useState({})
  const [query, setQuery] = useState('')

  // let { detailed } = useParams()

  // console.log(detailed)

  // console.log(country)

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
            region={array}
            query={query}
            handleCountry={handleCountry}
            />
          </>
        }
        />
        <Route path={`/:countryName`} element=
          {
          <CountryDetail 
          country={country}/>
          } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
