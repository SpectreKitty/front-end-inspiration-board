import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Boards from './components/Boards'
import SelectedBoard from './components/SelectedBoard'
import NewBoardForm from './components/NewBoardForm'
import Cards from './components/Cards'
import NewCard from './components/NewCard'
import axios from 'axios';

const kbaseURL = 'http://localhost:5000';

const convertFromApi = (apiBoard) => {
  const newBoard = {
    ...apiBoard,
  };
  return newBoard;
};

function App() {
  const [boards, setBoardData] = useState([]);

  const handleSubmit = (data) => {
    axios.post(`${kbaseURL}/boards`, data)
      .then((result) => {
        const boardData = result.data.board;
        setBoardData((prevBoards) => [convertFromApi(boardData), ...prevBoards]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='flex-container' >
        <Boards />
        <SelectedBoard />
        <NewBoardForm handleSubmit={handleSubmit}/>
      </div>
      <div className='flex-container' >
        <Cards />
        <NewCard />
      </div>
    </div>
  )
}

export default App
