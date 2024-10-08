import { Link } from 'react-router-dom'
import styles from './Pagination.module.scss'
import pageArrow from '../../assets/icons/pagination/page-arrow.svg'

export const Pagination = ({
  currentPage,
  totalPages,
  paginate,
  nextPage,
  prevPage,
}: {
  currentPage: number
  totalPages: number
  paginate: (pageNumber: number) => void
  nextPage: () => void
  prevPage: () => void
}) => {
  const pageNumbers = []

  for (let index = 1; index < totalPages; index++) {
    pageNumbers.push(index)
  }

  return (
    <section className={`${styles.wrapper}`}>
      <ul className={`${styles.pageList}`}>
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? `${styles.activePage}` : ``}>
            <Link to='#' onClick={() => paginate(number)}>
              <span>{number}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className={`${styles.arrows}`}>
        <button className={`${styles.arrowLeft}`} onClick={prevPage}>
          <img src={pageArrow} width={10} height={17} alt='phone_img' />
        </button>
        <button className={`${styles.arrowRight}`} onClick={nextPage}>
          <img src={pageArrow} width={10} height={17} alt='phone_img' />
        </button>
      </div>
    </section>
  )
}
