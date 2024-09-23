import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';
import {CatalogPage} from '../../pages/CatalogPage/CatalogPage';
import {FormPage} from '../../pages/FormPage/FormPage';
import {NotFoundPage} from '../../pages/NotFoundPage/NotFoundPage';

const basename =
  process.env.NODE_ENV === 'production' ? '/intern-pognali-3-1' : '/';

export const RoutesContent = () => {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path={AppRoute.CATALOG} element={<CatalogPage />} />
        <Route path={AppRoute.FORM} element={<FormPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
