import { TravelForm } from "../../components/TravelForm/TravelForm";
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';

export const FormPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='form-page'>
        <TravelForm/>
      </main>
      <Footer />
    </div>
  );
};
