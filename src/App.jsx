import './App.css'
import Header from './components/Header'
import Boards from './components/Boards'
import SelectedBoard from './components/SelectedBoard'
import NewBoard from './components/NewBoard'
import Cards from './components/Cards'
import NewCard from './components/NewCard'

function App() {
  const cards = [
    {
      id: 1,
      message: 'This is a card',
      likes: 0,
      onDelete: () => {},
      onLike: () => {},
    },
    {
      id: 2,
      message: 'This is another card',
      likes: 0,
      onDelete: () => {},
      onLike: () => {},
    }
  ]

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
        <Cards boardTitle='Test Board' cards={cards}/>
        <NewCard />
      </div>
    </div>
  )
}

export default App
