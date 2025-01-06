import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Boards from './components/Boards';
import SelectedBoard from './components/SelectedBoard';
import NewBoardForm from './components/NewBoardForm';
import Cards from './components/Cards';
import NewCardForm from './components/NewCardForm';
import Footer from './components/Footer';
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

  const handleSelectBoard = async (board) => {
    // Get board cards before setting the selected board
    await axios.get(`${kbaseURL}/boards/${board.id}/cards`)
      .then((result) => {
        board.cards = result.data.cards;
        setBoardData((prev) => ({
          ...prev,
          selectedBoard: board,
        }));
      })
      .catch((error) => {
        console.log('Unable to get cards for board: ', error);
      });
  };

  const handleDeleteCard = (cardId) => {
    axios.delete(`${kbaseURL}/cards/${cardId}`)
      .then(() => {
        setBoardData((prev) => {
          const updatedBoard = { ...prev.selectedBoard };
          updatedBoard.cards = updatedBoard.cards.filter((card) => card.id !== cardId);
          return {
            ...prev,
            selectedBoard: updatedBoard,
          };
        });
       })
      .catch((error) => {
        console.log('Unable to delete card: ', error);
      });
  }

  const handleLikeCard = (cardId) => {
    axios.patch(`${kbaseURL}/cards/${cardId}/like`)
      .then((result) => {
        setBoardData((prev) => {
          const updatedBoard = { ...prev.selectedBoard };
          updatedBoard.cards = updatedBoard.cards.map((card) => {
            return card.id === cardId
              ? { ...card, like_count: result.data.like_count }
              : card;
          });
          return {
            ...prev,
            selectedBoard: updatedBoard,
          };
        })
      })
      .catch((error) => { 
        console.log('Unable to like card', error);
      });
  }
  
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

  const handleAddCard = (data) => {
    if (!boards.selectedBoard) return;
  
    axios.post(`${kbaseURL}/boards/${boards.selectedBoard.id}/cards`, data)
      .then((result) => {
        const newCard = result.data;
        setBoardData((prev) => {
          const updatedBoard = { ...prev.selectedBoard };
          updatedBoard.cards.push(newCard);
          return {
            ...prev,
            selectedBoard: updatedBoard,
          };
        });
      })
      .catch((error) => {
        console.log('Unable to add card: ', error);
      });
  };

  const handleDeleteAll = () => {
    axios.delete(`${kbaseURL}/boards`)
      .then(() => {
        setBoardData((prev) => ({
          ...prev,
          boards: [],
          selectedBoard: null,
        }));
      })
      .catch((error) => {
        console.log('Unable to delete all boards: ', error);
      });
  };

  return (
    <div className='main-container'>
      <div className='content-container'>
        <Header />
        <div className='flex-container' >
          <Boards boards={boards.boards} onSelectBoard={handleSelectBoard} />
          <SelectedBoard board={boards.selectedBoard} />
          <NewBoardForm handleSubmit={handleSubmit} />
        </div>
        {boards.selectedBoard
          ? (
            <div className='flex-container' >
              <Cards
                boardTitle={boards.selectedBoard.title}
                cards={boards.selectedBoard.cards}
                onDelete={handleDeleteCard}
                onLike={handleLikeCard}
              />
              <NewCardForm onCardAdd={handleAddCard}/>
            </div>
          )
          : null
        }
      </div>
      <footer className='footer-container'>
        <Footer onDelete={handleDeleteAll} />
      </footer>
    </div>
  );
};

export default App;
