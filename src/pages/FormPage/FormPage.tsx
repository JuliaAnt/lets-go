import { TravelForm } from '../../components/TravelForm/TravelForm'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { IntroForm } from '../../components/IntroForm/IntroForm'
import { useAppDispatch } from '../../hooks/redux-hooks'
import { useEffect } from 'react'
import { addUuid } from '../../store/formData/formDataSlice'

export const FormPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(addUuid())
  }, [dispatch])

  return (
    <div className='wrapper'>
      <Header />
      <main className='form-page'>
        <IntroForm />
        <TravelForm />
      </main>
      <Footer />
    </div>
  )
}
