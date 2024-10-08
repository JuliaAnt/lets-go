import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Pagination } from '../../components/Pagination/Pagination'
import { Filter } from '../../components/Filter/Filter'
import { Countries } from '../../components/Countries/Countries'
import { IntroCatalog } from '../../components/IntroForm/IntroCatalog'
import { TravelerList } from '../../components/TravelerList/TravelerList'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { useEffect, useState } from 'react'
import { fetchCatalogData } from '../../store/api-actions'
import {
  getCards,
  getCountries,
  getRegions,
  getReloadStatus,
} from '../../store/catalogData/catalogDataSelector'
import styles from './CatalogPage.module.scss'
import { useNavigate } from 'react-router-dom'
import { AppRoute, CARDS_PER_PAGE } from '../../utils/consts'

export const CatalogPage = () => {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(getCards)
  const reloadStatus = useAppSelector(getReloadStatus)
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(CARDS_PER_PAGE)

  useEffect(() => {
    if (cards.length <= 0) {
      setLoading(true)
      dispatch(fetchCatalogData({ page: currentPage.toString(), limit: cardsPerPage.toString() }))
      setLoading(false)
    }
  }, [dispatch, cardsPerPage, currentPage, cards])

  useEffect(() => {
    if (reloadStatus) {
      navigate(AppRoute.FORM)
    }
  }, [reloadStatus, navigate])

  const selectedRegionsState = useAppSelector(getRegions)
  const selectedCountriesState = useAppSelector(getCountries)

  const filteredCards = cards.filter((card) => {
    const regionMatch =
      selectedRegionsState.length > 0
        ? card.countries.some((country) => selectedRegionsState.includes(country.region))
        : true

    const countryMatch =
      selectedCountriesState.length > 0
        ? card.countries.some((country) =>
            selectedCountriesState.some((selectedCountry) => selectedCountry.name === country.name),
          )
        : true

    return regionMatch && countryMatch
  })

  const lastCardIndex = currentPage * cardsPerPage
  const firstCardIndex = lastCardIndex - cardsPerPage
  const currentCards = filteredCards.slice(firstCardIndex, lastCardIndex)
  const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const nextPage = () =>
    setCurrentPage(() => (totalPages > currentPage + 1 ? currentPage + 1 : currentPage))
  const prevPage = () => setCurrentPage(() => (currentPage === 1 ? 1 : currentPage - 1))

  return (
    <div className='wrapper'>
      <Header />
      <main className='catalog-page'>
        <IntroCatalog />
        <div className='catalog-page-wrapper'>
          <Countries />
          <div className={styles.cardsFields}>
            <TravelerList cards={currentCards} loading={loading} />
            <Filter />
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}
