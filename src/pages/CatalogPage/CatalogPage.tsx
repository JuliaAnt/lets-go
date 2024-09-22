import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {Pagination} from "../../components/Pagination/Pagination";
import {Filter} from "../../components/Filter/Filter";


export const CatalogPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='catalog-page'>
        <Filter/>
        <Pagination/>
        
      </main>
      <Footer />
    </div>
  );
};
