import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {Pagination} from "../../components/Pagination/Pagination";
import { Countries } from '../../components/Countries/Countries';

export const CatalogPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='catalog-page'>
        <Countries/>
        <Pagination/>
        
      </main>
      <Footer />
    </div>
  );
};
