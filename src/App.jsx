import './App.css'
import Header from './components/Header'
import Boards from './components/Boards'
import SelectedBoard from './components/SelectedBoard'
import NewBoard from './components/NewBoard'
import Cards from './components/Cards'
import NewCard from './components/NewCard'

function App() {

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='flex-container' >
        <Boards />
        <SelectedBoard />
        <NewBoard />
      </div>
      <div className='flex-container' >
        <Cards />
        <NewCard />
      </div>
    </div>
  )
}

export default App
