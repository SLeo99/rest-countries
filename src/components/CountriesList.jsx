import CountriesCard from "./CountriesCard";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function CountriesList({countrylink}) {

  const ALL_COUNTRIES = 'https://restcountries.com/v3.1/all'
  const data = useFetch(ALL_COUNTRIES)

  return (
    <main className="w-10/12 sm:w-[70.5%] mx-auto grid gap-[80px] xl:gap-[76px] xl:container lg:grid-cols-fluid xl:w-[88.75%]  2xl:max-w-[91.5%]">
      {data.map((item, i) => (
        <Link 
        key={i} 
        to={item.name.common}
        onClick={() => countrylink(item.name.common)}
        >
          <CountriesCard 
          img={item.flags.svg} 
          country={item.name.common} 
          population={item.population} 
          region={item.region} 
          capital={item.capital}
          />
        </Link>
      ))}
    </main>
  )
}
