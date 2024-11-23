import { Footer } from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { IntroLanding } from '../../components/landingPageComponents/IntroLanding/IntroLanding'
// import styles from './LandingPage.module.scss'

export const LandingPage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='landing-page'>
        <IntroLanding />
      </main>
      <Footer bgColor='#AED0EB' />
    </div>
  )
}
