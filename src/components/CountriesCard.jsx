export default function CountriesCard({ img, country, population, region, capital }) {
  return (
    <div className="flex flex-col rounded-md overflow-hidden">
      <div className="relative pb-[60.5%]">
        <img src={img} alt={country} className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      <div className="pl-6 py-8 sm:px-0 sm:py-14 sm:pb-[92px] sm:pl-12 flex flex-col gap-9 sm:gap-10 bg-lightModeBg shadow-xl dark:bg-darkBlue dark:text-white transition-colors xl:p-6 xl:gap-3 xl:pb-11">
        <p className="text-2xl sm:text-4xl font-extrabold xl:text-lg">{country}</p>
        <div className="flex flex-col gap-3 sm:gap-5 xl:gap-1">
          <p className="text-xl sm:text-[25px] font-semibold tracking-wider xl:text-sm">Population: <span className="sm:text-[25px] font-light xl:text-sm">{population}</span></p>
          <p className="text-xl sm:text-[25px] font-semibold tracking-wider xl:text-sm">Region: <span className="sm:text-[25px] font-light xl:text-sm">{region}</span></p>
          <p className="text-xl sm:text-[25px] font-semibold tracking-wider xl:text-sm">Capital: <span className="sm:text-[25px] font-light xl:text-sm">{capital}</span></p>
        </div>
      </div>
    </div>
  )
}
