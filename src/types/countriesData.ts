export type CountryData = {
  flags: string
  alt: string
  name: string
  region: string
}

export type CountriesDataType = {
  letter: string
  countries: CountryData[]
}

export type ChangedCountryType = {
  selectedValue: CountryData
  newValue: CountryData
}
