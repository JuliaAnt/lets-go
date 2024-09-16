import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {Pagination} from "../../components/Pagination/Pagination";


export const CatalogPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='catalog-page'>
        <Pagination/>
        
      </main>
      <Footer />
    </div>
  );
};
