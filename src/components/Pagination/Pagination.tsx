import styles from './Pagination.module.scss'
import pageArrow from '../../assets/icons/pagination/page-arrow.svg'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks'
import { getCurrentPageNumber, getFilteredCards } from '../../store/catalogData/catalogDataSelector'
import { PageNumber } from './PageNumber/PageNumber'
import { CARDS_PER_PAGE } from '../../utils/consts'
import { changePageNumber } from '../../store/catalogData/catalogDataSlice'

export const Pagination = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(getCurrentPageNumber)
  const cardsAmount = useAppSelector(getFilteredCards).length
  const maxPagesAmount = 10
  const pagesAmount =
    Math.ceil(cardsAmount / CARDS_PER_PAGE) >= maxPagesAmount
      ? maxPagesAmount
      : Math.ceil(cardsAmount / CARDS_PER_PAGE)
  const pagesAmountArray: number[] = [...Array(pagesAmount).keys()].map((i) => i + 1)

  const handleNextPage = () => {
    if (currentPage === pagesAmount) return
    else {
      dispatch(changePageNumber(currentPage + 1))
    }
  }

  const handlePrevPage = () => {
    if (currentPage === 1) return
    else {
      dispatch(changePageNumber(currentPage - 1))
    }
  }

  const handlePageSelect = (page: number) => {
    dispatch(changePageNumber(page))
  }

  return (
    <section className={`${styles.wrapper}`}>
      <ul className={`${styles.pageList}`}>
        {pagesAmountArray.map((pageNumber) => (
          <PageNumber
            key={pageNumber}
            pageNumber={pageNumber}
            className={`${pageNumber === currentPage ? styles.activePage : ''}`}
            onClick={handlePageSelect}
          />
        ))}
      </ul>
      <div className={`${styles.arrows}`}>
        <button
          className={`${styles.arrowLeft}`}
          disabled={Boolean(currentPage === 1)}
          onClick={handlePrevPage}
        >
          <img src={pageArrow} width={10} height={17} alt='phone_img' />
        </button>
        <button
          className={`${styles.arrowRight}`}
          disabled={Boolean(currentPage === pagesAmount)}
          onClick={handleNextPage}
        >
          <img src={pageArrow} width={10} height={17} alt='phone_img' />
        </button>
      </div>
    </section>
  )
}
