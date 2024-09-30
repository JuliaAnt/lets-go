import { Link } from 'react-router-dom'

type NavMenuItemProps = {
  data: {
    id: number
    hoverText: string
    text: string
    url: string
  }
  onNavItemClick: (url: string) => void
}

export const NavMenuItem = ({ data, onNavItemClick }: NavMenuItemProps) => {
  return (
    <li>
      <Link to={data.url} onClick={() => onNavItemClick(data.url)}>
        <span data-hover={data.hoverText}>{data.text}</span>
      </Link>
    </li>
  )
}
