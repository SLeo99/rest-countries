import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CountryDetail({ country }) {

  return (
    <section className="w-[85%] xl:w-[89.75%] mx-auto my-10 sm:my-20 xl:my-20">
      <Link to='/' className="flex items-center w-min gap-2 sm:gap-4 py-1 sm:py-[14px] xl:py-2 px-6 sm:px-11 xl:px-8 rounded-md mb-16 sm:mb-32 xl:mb-20 text-lightModeText dark:text-white bg-lightModeBg dark:bg-darkBlue transition-colors group/btn"><span className="text-lg sm:text-4xl xl:ml-2 xl:text-lg dark:group-hover/btn:text-emerald-300"><BsArrowLeft /></span><span className="font-semibold sm:text-3xl xl:text-base dark:group-hover/btn:text-emerald-300">Back</span></Link>
      <div className="flex flex-col gap-11 sm:gap-[102px] xl:gap-32 xl:flex-row xl:justify-between">
        <div className="relative basis-1/2 pb-[72%] xl:pb-[31.05%] shadow-lightModeText/50 shadow-2xl">
            <img src={country.flags.svg} alt="" className="absolute top-0 left-0 w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col justify-center basis-1/2 gap-10 xl:gap-[74px]">
          <div className="flex flex-col gap-6 sm:gap-16 xl:gap-8 text-lightModeText dark:text-white">
            <h1 className="text-xl sm:text-[43px] xl:text-4xl font-extrabold xl:tracking-tight">{country.name.common}</h1>
            <div className="flex flex-col gap-11 sm:gap-24 xl:flex-row xl:gap-0 xl:justify-between">
              <ul className="flex flex-col gap-3 sm:gap-8 xl:gap-2 xl:basis-1/2">
                  <li><p className="text-sm sm:text-[28px] sm:leading-8  xl:text-base font-semibold">Native Name: <span className="font-light">{country.name.common}</span></p></li>
                  <li><p className="text-sm sm:text-[28px] sm:leading-8  xl:text-base font-semibold">Population: <span className="font-light">{country.population}</span></p></li>
                  <li><p className="text-sm sm:text-[28px] sm:leading-8  xl:text-base font-semibold">Region: <span className="font-light">{country.region}</span></p></li>
                  <li><p className="text-sm sm:text-[28px] sm:leading-8  xl:text-base font-semibold">Sub Region: <span className="font-light">{country.subregion}</span></p></li>
                  <li><p className="text-sm sm:text-[28px] sm:leading-8  xl:text-base font-semibold">Capital: <span className="font-light">{country.capital}</span></p></li>
              </ul>
              <ul className="flex flex-col gap-3 sm:gap-8 xl:gap-2 xl:basis-1/2">
                  <li><p className="text-sm sm:text-[28px] sm:leading-8 xl:text-base font-semibold">Top Level Domain: <span className="font-light">{country.tld[0]}</span></p></li>
                  <li><p className="text-sm sm:text-[28px] sm:leading-8 xl:text-base font-semibold">Currencies: {Object.values(country.currencies).map((item,i) => <span className="font-light" key={i}>{item.name}, </span>)}</p></li>
                  <li><p className="text-sm sm:text-[28px] sm:leading-8 xl:text-base font-semibold">Languages: <span>{Object.values(country.languages).map((item,i) => <span className="font-light" key={i}>{item}, </span>)}</span></p></li>
              </ul>                
            </div>
          </div>
          <article className="flex flex-col gap-4 sm:gap-[33px] sm:mt-10 xl:mt-0 xl:flex-row xl:justify-start xl:gap-1 text-lightModeText dark:text-white transition-colors">
              <span className="font-semibold basis-full sm:text-[32px] xl:text-base xl:basis-4/12">Border Countries: </span>
              <ul className="grid grid-cols-3 gap-2 sm:gap-6 xl:grid-cols-fluid-borders xl:gap-[10px] flex-wrap basis-full sm:w-[96.5%] xl:w-full xl:basis-9/12">{country.borders?.map((item,i) => <li key={i} className="basis-1/3 xl:basis-1/6 xl:px-4 bg-lightModeBg dark:bg-darkBlue transition-colors text-center py-[2px] sm:py-4 xl:py-[2px] rounded-sm">{item}</li>)}
              </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
