import {Link} from 'react-router-dom';

type NavMenuItemProps = {
  hoverText: string;
  text: string;
};

export const NavMenuItem = ({hoverText, text}: NavMenuItemProps) => {
  return (
    <li>
      <Link to="#">
        <span data-hover={hoverText}>{text}</span>
      </Link>
    </li>
  );
};
