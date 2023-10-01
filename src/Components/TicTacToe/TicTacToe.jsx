import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const toggle = (num) => {
    if (lock || data[num] !== "") {
      return;
    }

    const newData = [...data];
    if (count % 2 === 0) {
      newData[num] = 'X';
    } else {
      newData[num] = 'O';
    }

    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const checkWin = (currentData) => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const condition of winningConditions) {
      const [a, b, c] = condition;
      if (currentData[a] && currentData[a] === currentData[b] && currentData[a] === currentData[c]) {
        setLock(true);
        return;
      }
    }

    // Check for a draw (all cells filled)
    if (!currentData.includes("")) {
      setLock(true);
      // Handle the draw scenario here if needed.
    }
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
  };

  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
        <div className="row1">
          {data.slice(0, 3).map((value, index) => (
            <div key={index} className="boxes" onClick={() => toggle(index)}>
              {value === 'X' ? <img src={cross_icon} alt='X' /> : (value === 'O' ? <img src={circle_icon} alt='O' /> : null)}
            </div>
          ))}
        </div>
        <div className="row2">
          {data.slice(3, 6).map((value, index) => (
            <div key={index} className="boxes" onClick={() => toggle(index + 3)}>
              {value === 'X' ? <img src={cross_icon} alt='X' /> : (value === 'O' ? <img src={circle_icon} alt='O' /> : null)}
            </div>
          ))}
        </div>
        <div className="row3">
          {data.slice(6, 9).map((value, index) => (
            <div key={index} className="boxes" onClick={() => toggle(index + 6)}>
              {value === 'X' ? <img src={cross_icon} alt='X' /> : (value === 'O' ? <img src={circle_icon} alt='O' /> : null)}
            </div>
          ))}
        </div>
      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default TicTacToe;
