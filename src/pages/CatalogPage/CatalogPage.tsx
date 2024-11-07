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
import { getFilteredCards } from '../../store/catalogData/catalogDataSelector'
import styles from './CatalogPage.module.scss'
import { CARDS_PER_PAGE } from '../../utils/consts'

export const CatalogPage = () => {
  const dispatch = useAppDispatch()
  const filteredCards = useAppSelector(getFilteredCards)
  // const reloadStatus = useAppSelector(getReloadStatus)
  // const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage, setCardsPerPage] = useState(CARDS_PER_PAGE)

  useEffect(() => {
    if (!filteredCards.length && !loading) {
      setLoading(true)
      dispatch(
        fetchCatalogData({ page: currentPage.toString(), limit: cardsPerPage.toString() }),
      ).finally(() => setLoading(false))

      setLoading(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, cardsPerPage, currentPage])

  // useEffect(() => {
  //   if (reloadStatus) {
  //     navigate(AppRoute.FORM)
  //   }
  // }, [reloadStatus, navigate])

  const firstCardIndex = (currentPage - 1) * CARDS_PER_PAGE
  const lastCardIndex = firstCardIndex + cardsPerPage
  const currentCards = filteredCards.slice(firstCardIndex, lastCardIndex)
  const totalPages = Math.ceil(filteredCards.length / CARDS_PER_PAGE)

  const paginate = (pageNumber: number) => {
    setCardsPerPage(CARDS_PER_PAGE)
    setCurrentPage(pageNumber)
  }
  const nextPage = () => {
    setCardsPerPage(CARDS_PER_PAGE)
    setCurrentPage(() => (totalPages >= currentPage + 1 ? currentPage + 1 : currentPage))
  }
  const prevPage = () => {
    setCardsPerPage(CARDS_PER_PAGE)
    setCurrentPage(() => (currentPage === 1 ? 1 : currentPage - 1))
  }

  const showMoreCards = () => {
    if (lastCardIndex <= filteredCards.length) {
      setCardsPerPage(cardsPerPage + CARDS_PER_PAGE)
    }
  }

  return (
    <div className='wrapper'>
      <Header />
      <main className='catalog-page'>
        <IntroCatalog />
        <div className='catalog-page-wrapper'>
          <Countries />
          <div className={styles.cardsFields}>
            <TravelerList
              cards={currentCards}
              loading={loading}
              isShowMoreDisabled={Boolean(lastCardIndex >= filteredCards.length)}
              showMoreCards={showMoreCards}
            />
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
