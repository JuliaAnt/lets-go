import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';
import {CatalogPage} from '../../pages/CatalogPage/CatalogPage';
import {FormPage} from '../../pages/FormPage/FormPage';
import {NotFoundPage} from '../../pages/NotFoundPage/NotFoundPage';

export const RoutesContent = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={AppRoute.Catalog} element={<CatalogPage />} />
        <Route path={AppRoute.Form} element={<FormPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
