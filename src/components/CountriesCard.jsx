export default function CountriesCard({ img, country, population, region, capital }) {
  return (
    <div className="grid grid-rows-[1fr] w-full rounded-md overflow-hidden">
      <div className="relative px-1 pb-[60%]">
        <img src={img} alt={country} className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      <div className="p-6 py-11 flex flex-col gap-9 bg-lightModeBg shadow-xl dark:bg-darkBlue dark:text-white transition-colors lg:p-6 lg:pb-[46px] lg:gap-3">
        <p className="text-4xl font-extrabold xl:text-lg">{country}</p>
        <div className="flex flex-col gap-3 lg:gap-1">
          <p className="text-[25px] font-semibold tracking-wider xl:text-sm">Population: <span className="font-light">{population}</span></p>
          <p className="text-[25px] font-semibold tracking-wider xl:text-sm">Region: <span className="font-light">{region}</span></p>
          <p className="text-[25px] font-semibold tracking-wider xl:text-sm">Capital: <span className="font-light">{capital}</span></p>
        </div>
      </div>
    </div>
  )
}
