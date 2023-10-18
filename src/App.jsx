import './App.scss'
import ContentWeather from './components/ContentWeather/ContentWeather'
import SearchWeather from './components/SearchWeather/SearchWeather'

function App() {

  return (
    <div className='wrapper flex'>
      <SearchWeather />
      <ContentWeather />
    </div>
  )
}

export default App
