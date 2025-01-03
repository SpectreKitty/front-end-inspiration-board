import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Boards from './components/Boards';
import SelectedBoard from './components/SelectedBoard';
import NewBoardForm from './components/NewBoardForm';
import Cards from './components/Cards';
import NewCard from './components/NewCard';
import axios from 'axios';

const kbaseURL = 'http://localhost:5000';

const convertFromApi = (apiBoard) => {
  const newBoard = {
    ...apiBoard,
  };
  return newBoard;
};

const getAllBoardsApi = () => {
  return axios.get(`${kbaseURL}/boards`)
    .then(response => {
      const allBoards = response.data.map(convertFromApi);
      return allBoards;
    })
    .catch(e => {
      console.log(e);
    });
};

function App() {
  const [boards, setBoardData] = useState({
    boards: [],
    selectedBoard: null,
  });

  const getAllBoards = () => {
    getAllBoardsApi()
      .then(boards => {
        setBoardData(prev => ({
          ...prev,
          boards,
        }));
      })
      .catch(e => {
        console.log(e);
      });
  };  

  useEffect(() => {
    getAllBoards();
  }, []);

  const handleSelectBoard = (board) => {
    setBoardData((prev) => ({
      ...prev,
      selectedBoard: board,
    }));
  };
  
  const handleSubmit = (data) => {
    axios.post(`${kbaseURL}/boards`, data)
      .then((result) => {
        const boardData = result.data.board;
        setBoardData((prev) => ({
          ...prev,
          boards: [convertFromApi(boardData), ...prev.boards],
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cardsTestData = [
    {
      id: 1,
      message: 'This is a card',
      likes: 0,
      onDelete: () => { },
      onLike: () => { },
    },
    {
      id: 2,
      message: 'This is another card',
      likes: 0,
      onDelete: () => { },
      onLike: () => { },
    }
  ];

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='flex-container' >
        <Boards boards={boards.boards} onSelectBoard={handleSelectBoard} />
        <SelectedBoard board={boards.selectedBoard} />
        <NewBoardForm handleSubmit={handleSubmit}/>
      </div>
      <div className='flex-container' >
        <Cards boardTitle='Test Board' cards={cardsTestData}/>
        <NewCard />
      </div>
    </div>
  )
}

export default App
