import './App.scss'
import './components/Filter/SliderNoUI/nouislider.scss'
import { RoutesContent } from './modules/RoutesContent/RoutesContent'

function App(): JSX.Element {
  return (
    <div className='app'>
      <div className='routesContent'>
        <RoutesContent />
      </div>
    </div>
  )
}

export default App
