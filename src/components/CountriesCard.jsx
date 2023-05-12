export default function CountriesCard({ img, country, population, region, capital }) {
  return (
    <div className="flex flex-col rounded-md overflow-hidden w-full group/card shadow-lightModeText/50 shadow-2xl dark:hover:shadow-green-500 duration-500">
      <div className="relative pb-[60.75%] basis-1/2">
        <img src={img} alt={country} className="absolute top-0 left-0 w-full h-full object-cover" />
      </div>
      <div className="px-6 py-8 sm:px-0 sm:py-14 sm:pb-[92px] sm:pl-12 flex flex-col gap-9 sm:gap-10 bg-lightModeBg shadow-xl dark:bg-darkBlue dark:text-white transition-colors xl:p-6 xl:gap-3 xl:pb-11 basis-1/2">
        <p className="text-2xl sm:text-4xl font-extrabold xl:text-lg group-hover/card:text-emerald-700 dark:group-hover/card:text-emerald-300">{country}</p>
        <div className="flex flex-col gap-3 sm:gap-5 xl:gap-1">
          <p className="text-xl sm:text-[25px] font-semibold tracking-wider xl:text-sm">Population: <span className="sm:text-[25px] font-light xl:text-sm">{population}</span></p>
          <p className="text-xl sm:text-[25px] font-semibold tracking-wider xl:text-sm">Region: <span className="sm:text-[25px] font-light xl:text-sm">{region}</span></p>
          <p className="text-xl sm:text-[25px] font-semibold tracking-wider xl:text-sm">Capital: <span className="sm:text-[25px] font-light xl:text-sm">{capital}</span></p>
        </div>
      </div>
    </div>
  )
}
