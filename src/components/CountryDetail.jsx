import { BsArrowLeft } from "react-icons/bs";

export default function CountryDetail() {
  const arg = [
    {
      "name": "Belgium",
      "topLevelDomain": [".be"],
      "alpha2Code": "BE",
      "alpha3Code": "BEL",
      "callingCodes": ["32"],
      "capital": "Brussels",
      "altSpellings": [
        "BE",
        "België",
        "Belgie",
        "Belgien",
        "Belgique",
        "Kingdom of Belgium",
        "Koninkrijk België",
        "Royaume de Belgique",
        "Königreich Belgien"
      ],
      "subregion": "Western Europe",
      "region": "Europe",
      "population": 11555997,
      "latlng": [50.83333333, 4],
      "demonym": "Belgian",
      "area": 30528,
      "gini": 27.2,
      "timezones": ["UTC+01:00"],
      "borders": ["FRA", "DEU", "LUX", "NLD"],
      "nativeName": "België",
      "numericCode": "056",
      "flags": {
        "svg": "https://flagcdn.com/be.svg",
        "png": "https://flagcdn.com/w320/be.png"
      },
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "nl",
          "iso639_2": "nld",
          "name": "Dutch",
          "nativeName": "Nederlands"
        },
        {
          "iso639_1": "fr",
          "iso639_2": "fra",
          "name": "French",
          "nativeName": "français"
        },
        {
          "iso639_1": "de",
          "iso639_2": "deu",
          "name": "German",
          "nativeName": "Deutsch"
        }
      ],
      "translations": {
        "br": "Belgia",
        "pt": "Bélgica",
        "nl": "België",
        "hr": "Belgija",
        "fa": "بلژیک",
        "de": "Belgien",
        "es": "Bélgica",
        "fr": "Belgique",
        "ja": "ベルギー",
        "it": "Belgio",
        "hu": "Belgium"
      },
      "flag": "https://flagcdn.com/be.svg",
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "BEL",
      "independent": true
    }
  ]

  return (
    <section className="w-[89.75%] mx-auto">
        <a href="" className="flex items-center w-min gap-2 py-2 px-8 rounded-md my-20 text-lightModeText dark:text-white bg-lightModeBg dark:bg-darkBlue transition-colors"><span className="text-lg ml-2"><BsArrowLeft /></span><span className="font-semibold">Back</span></a>
        <div className="flex justify-between gap-32">
          <div className="relative basis-1/2 pb-[31.05%]">
            <img src={arg[0].flags.svg} alt="" className="absolute top-0 left-0 w-full h-full object-cover"/>
          </div>
          <div className="flex flex-col justify-center basis-1/2 gap-[74px]">
            <div className="flex flex-col gap-8 text-lightModeText dark:text-white">
              <h1 className="text-4xl font-extrabold tracking-tight">{arg[0].name}</h1>
              <div className="flex justify-between">
                <ul className="flex flex-col gap-2">
                  <li><p className="text-base font-semibold">Native Name: <span>{arg[0].nativeName}</span></p></li>
                  <li><p className="text-base font-semibold">Population: <span>{arg[0].population}</span></p></li>
                  <li><p className="text-base font-semibold">Region: <span>{arg[0].region}</span></p></li>
                  <li><p className="text-base font-semibold">Sub Region: <span>{arg[0].subregion}</span></p></li>
                  <li><p className="text-base font-semibold">Capital: <span>{arg[0].capital}</span></p></li>
                </ul>
                <ul className="flex flex-col gap-2">
                  <li><p className="text-base font-semibold">Top Level Domain: <span>{arg[0].topLevelDomain}</span></p></li>
                  <li><p className="text-base font-semibold">Currencies: {arg[0].currencies.map((item,i) => <span key={i}>{item.name}</span>)}</p></li>
                  <li><p className="text-base font-semibold">Languages: <span>{arg[0].languages.map((item,i) => <span key={i}>{item.name}, </span>)}</span></p></li>
                </ul>                
              </div>
            </div>
            <article className="flex gap-4 text-lightModeText dark:text-white transition-colors">
              <span className="font-semibold">Border Countries: </span>
              <ul className="flex gap-[10px]">{arg[0].borders.map((item,i) => <li key={i} className="w-[96px] bg-lightModeBg dark:bg-darkBlue transition-colors text-center py-[2px] rounded-sm">{item}</li>)}</ul>
            </article>
          </div>
        </div>
    </section>
  )
}
