type PageNumberProps = {
  pageNumber: number
  className: string
  onClick: (page: number) => void
}

export const PageNumber = ({ pageNumber, className, onClick }: PageNumberProps) => {
  return (
    <li key={pageNumber} className={className} onClick={() => onClick(pageNumber)}>
      <button>
        <span>{pageNumber}</span>
      </button>
    </li>
  )
}
