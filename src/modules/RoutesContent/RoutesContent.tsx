import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppRoute } from '../../utils/consts'
import { CatalogPage } from '../../pages/CatalogPage/CatalogPage'
import { FormPage } from '../../pages/FormPage/FormPage'
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage'
import { LandingPage } from '../../pages/LandingPage/LandingPage'

// const basename = process.env.NODE_ENV === 'production' ? '/lets-go' : '/'

export const RoutesContent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoute.MAIN} element={<LandingPage />} />
        <Route path={AppRoute.CATALOG} element={<CatalogPage />} />
        <Route path={AppRoute.FORM} element={<FormPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  )
}
