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
    <section className="w-[88.75%] mx-auto">
      <a href="">BACK</a>
      <div className="flex justify-between gap-32">
        <div className="basis-1/2">
          <img src={arg[0].flags.svg} alt="" />
        </div>
        <div className="flex flex-col basis-1/2 gap-[74px]">
          <div className="flex flex-col gap-7">
            <h1 className="text-4xl font-extrabold">{arg[0].name}</h1>
            <div className="grid gap-2 grid-cols-2">
              <p className="text-base font-semibold order-1">Native name: <span>{arg[0].nativeName}</span></p>
              <p className="text-base font-semibold order-3">Population: <span>{arg[0].population}</span></p>
              <p className="text-base font-semibold order-5">Region: <span>{arg[0].region}</span></p>
              <p className="text-base font-semibold order-7 col-span-2">Sub Region: <span>{arg[0].subregion}</span></p>
              <p className="text-base font-semibold order-8">Capital: <span>{arg[0].capital}</span></p>
              <p className="text-base font-semibold order-2">Top Level Domain: <span>{arg[0].topLevelDomain}</span></p>
              <p className="text-base font-semibold order-4">Currencies: {arg[0].currencies.map((item,i) => <span key={i}>{item.name}</span>)}</p>
              <p className="text-base font-semibold order-6">Languages: <span>{arg[0].languages.map((item,i) => <span key={i}>{item.name}, </span>)}</span></p>
            </div>
          </div>
          <article className="flex gap-2">
            <span className="font-semibold">Border Countries: </span>
            <ul className="flex gap-4">{arg[0].borders.map((item,i) => <li key={i} className="w-12 bg-darkBlue text-center">{item}</li>)}</ul>
          </article>
        </div>
      </div>
    </section>
  )
}
