import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <p>
      If you are not redirected, <Link to='/'>click here</Link>.
    </p>
  );
};
