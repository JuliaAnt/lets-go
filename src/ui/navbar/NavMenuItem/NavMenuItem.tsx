import { Link } from 'react-router-dom'

type NavMenuItemProps = {
  data: {
    id: number
    hoverText: string
    text: string
    url: string
  }
}

export const NavMenuItem = ({ data }: NavMenuItemProps) => {
  return (
    <li>
      <Link to={data.url}>
        <span data-hover={data.hoverText}>{data.text}</span>
      </Link>
    </li>
  )
}
