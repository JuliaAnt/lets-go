import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Pagination } from '../../components/Pagination/Pagination'
import { Filter } from '../../components/Filter/Filter'
import { Countries } from '../../components/Countries/Countries'
import { IntroCatalog } from '../../components/IntroForm/IntroCatalog'
import { TravelerList } from '../../components/TravelerList/TravelerList'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { useEffect } from 'react'
import { fetchCatalogData } from '../../store/api-actions'
import { getCards, getReloadStatus } from '../../store/catalogData/catalogDataSelector'
import styles from './CatalogPage.module.scss'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../utils/consts'

export const CatalogPage = () => {
  const dispatch = useAppDispatch()
  const cards = useAppSelector(getCards)
  const reloadStatus = useAppSelector(getReloadStatus)
  const navigate = useNavigate()

  useEffect(() => {
    if (cards.length <= 0) dispatch(fetchCatalogData())
  }, [dispatch, cards])

  useEffect(() => {
    if (reloadStatus) {
      navigate(AppRoute.FORM)
    }
  }, [reloadStatus, navigate])

  return (
    <div className='wrapper'>
      <Header />
      <main className='catalog-page'>
        <IntroCatalog />
        <Countries />
        <div className={styles.cardsFields}>
          <TravelerList />
          <Filter />
        </div>
        <Pagination />
      </main>
      <Footer />
    </div>
  )
}
