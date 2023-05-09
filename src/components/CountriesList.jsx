import CountriesCard from "./CountriesCard";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function CountriesList({region, query}) {

  const data = useFetch(`https://restcountries.com/v3.1/all`)
  const regionFilter = data.filter(item => item.region === region)
  const searchedCountries = data.filter(item => item.name.common.toLowerCase().includes(query))

  console.log(query)

  const renderCountries = (arr) => {
    return(
      arr.map((item, i) => (
        <Link 
        key={i} 
        to={item.name.common.toLowerCase().replace(/\s/g, '')}
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
    <main className="w-10/12 sm:w-[70.5%] mb-16 xl:mb-12 auto-rows-fr mx-auto grid place-content-center gap-[80px] xl:gap-[4.75rem] xl:container xl:grid-cols-fluid xl:w-[88.75%] 2xl:max-w-[91.5%]">
      {region !== null ? 
        (
          renderCountries(regionFilter)
        ) : 
        (
          query !== '' ? (
            renderCountries(searchedCountries)
            ) : (
            renderCountries(data)
           )
        )
      }
    </main>
  )
}
