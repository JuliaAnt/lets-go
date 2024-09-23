export const setRegions = (regions: string[], region: string) => {
  const regionIndex = regions.findIndex((currentRegion) => currentRegion === region)
  let selectedRegions = []
  if (regionIndex === -1) {
    selectedRegions = [...regions, region]
  } else {
    selectedRegions = regions.filter((currentRegion) => currentRegion !== region)
  }
  return selectedRegions
}
