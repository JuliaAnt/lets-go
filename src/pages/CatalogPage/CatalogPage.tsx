import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Pagination } from '../../components/Pagination/Pagination'
import { Filter } from '../../components/Filter/Filter'
import { Countries } from '../../components/Countries/Countries'
import { IntroCatalog } from '../../components/IntroForm/IntroCatalog'
import { TravelerCard } from '../../components/TravelerCard/TravelerCard'
import { travelCardData, secondTravelCardData } from '../../data/travelCardData'

export const CatalogPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='catalog-page'>
        <IntroCatalog />
        <Countries />
        <TravelerCard data={travelCardData} />
        <TravelerCard data={secondTravelCardData} />
        <Filter />
        <Pagination />
      </main>
      <Footer />
    </div>
  )
}
