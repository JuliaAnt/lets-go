import {Header} from '../../components/Header/Header';
import {Footer} from '../../components/Footer/Footer';
import {Pagination} from "../../components/Pagination/Pagination";
import { Countries } from '../../components/Countries/Countries';
import { TravelerCard } from '../../components/TravelerCard/TravelerCard';
import { travelCardData, secondTravelCardData } from '../../data/travelCardData';

export const CatalogPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='catalog-page'>
        <Countries/>
        <Pagination/>
        <TravelerCard data ={travelCardData}/>
        <TravelerCard data ={secondTravelCardData}/>
      </main>
      <Footer />
    </div>
  );
};
