import { BsArrowLeft } from "react-icons/bs";

export default function CountryDetail() {
  const arg = [
    {
      "name": "Argentina",
      "topLevelDomain": [".ar"],
      "alpha2Code": "AR",
      "alpha3Code": "ARG",
      "callingCodes": ["54"],
      "capital": "Buenos Aires",
      "altSpellings": ["AR", "Argentine Republic", "República Argentina"],
      "subregion": "South America",
      "region": "Americas",
      "population": 45376763,
      "latlng": [-34, -64],
      "demonym": "Argentinean",
      "area": 2780400,
      "gini": 42.9,
      "timezones": ["UTC-03:00"],
      "borders": ["BOL", "BRA", "CHL", "PRY", "URY"],
      "nativeName": "Argentina",
      "numericCode": "032",
      "flags": {
        "svg": "https://flagcdn.com/ar.svg",
        "png": "https://flagcdn.com/w320/ar.png"
      },
      "currencies": [
        {
          "code": "ARS",
          "name": "Argentine peso",
          "symbol": "$"
        }
      ],
      "languages": [
        {
          "iso639_1": "es",
          "iso639_2": "spa",
          "name": "Spanish",
          "nativeName": "Español"
        },
        {
          "iso639_1": "gn",
          "iso639_2": "grn",
          "name": "Guaraní",
          "nativeName": "Avañe'ẽ"
        }
      ],
      "translations": {
        "br": "Arc'hantina",
        "pt": "Argentina",
        "nl": "Argentinië",
        "hr": "Argentina",
        "fa": "آرژانتین",
        "de": "Argentinien",
        "es": "Argentina",
        "fr": "Argentine",
        "ja": "アルゼンチン",
        "it": "Argentina",
        "hu": "Argentína"
      },
      "flag": "https://flagcdn.com/ar.svg",
      "regionalBlocs": [
        {
          "acronym": "USAN",
          "name": "Union of South American Nations",
          "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
          "otherNames": [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union"
          ]
        }
      ],
      "cioc": "ARG",
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
              <ul className="flex gap-[10px] flex-wrap">{arg[0].borders.map((item,i) => <li key={i} className="w-16 bg-lightModeBg dark:bg-darkBlue transition-colors text-center py-[2px] rounded-sm">{item}</li>)}</ul>
            </article>
          </div>
        </div>
    </section>
  )
}
