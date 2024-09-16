import { TravelForm } from "../../components/TravelForm/TravelForm";
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import {IntroForm} from "../../components/IntroForm/IntroForm";


export const FormPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='form-page'>
        <IntroForm/>
        <TravelForm/>        
      </main>
      <Footer />
    </div>
  );
};
