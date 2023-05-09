import CountriesCard from "./CountriesCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
useState

export default function CountriesList({region}) {

  const data = useFetch(`https://restcountries.com/v3.1/all`)
  const filteredCountries = data.filter(item => item.region === region)
  
  const renderAll = (arr) => {
    return(
      arr.map((item, i) => (
        <Link 
        key={i} 
        to={item.name.common}
        >
          <CountriesCard 
          img={item.flags.svg} 
          country={item.name.common} 
          population={item.population} 
          region={item.region} 
          capital={item.capital}
          />
        </Link>
      ))
    )
  }
  const renderFilter = (filter) => {
    return(
      filter.map((item, i) => (
        <Link 
        key={i} 
        to={item.name.common}
        >
          <CountriesCard 
          img={item.flags.svg} 
          country={item.name.common} 
          population={item.population} 
          region={item.region} 
          capital={item.capital}
          />
        </Link>
      ))
    )
  }

  return (
    <main className="w-10/12 sm:w-[70.5%] mx-auto grid gap-[80px] xl:gap-[4.75rem] xl:container lg:grid-cols-fluid xl:w-[88.75%]  2xl:max-w-[91.5%]">
      {region === '' ? (
        renderAll(data)
      ) : (
        renderFilter(filteredCountries)
      )}
    </main>
  )
}
