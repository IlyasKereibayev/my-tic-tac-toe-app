import React, {useState} from 'react'
import GameStatus from "./GameStatus";
import GameBoard from "./GameBoard";

const App = () => {
	const [winner, setWinner] = useState(null)
  const [currentMove, setCurrentMove] = useState('X')
  const [boardState, setBoardState] = useState(new Array(9).fill(null))
	const toggleMove = () => {
  	setCurrentMove(currentMove === 'X' ? 'O' : 'X')
	}
	const handleClick = (index) => {
		if(winner) {
			return;
		}
 		const newBoardState = boardState.map((item, i) => {
 			if(index === i) {
 				item = currentMove
			}
 			return item
		})
		
		
		let winnerFound = findWinner(newBoardState)
		if(winnerFound) {
			setBoardState(newBoardState)
			setWinner(winnerFound)
		} else {
			if(isGameFinished(newBoardState)) {
				setBoardState(newBoardState)
				setWinner('draw')
			} else {
				setBoardState(newBoardState)
				toggleMove()
			}
		}
	}
	const winLines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]
	const findWinner = (boardState) => {
		for(let i=0; i<winLines.length; i++) {
			let line = winLines[i]
			if(boardState[line[0]]
					&& boardState[line[0]] === boardState[line[1]]
						&& boardState[line[1]] === boardState[line[2]]) {
				return boardState[line[0]]
			}
		}
		return null
	}
	const isGameFinished = (boardState) => {
		return boardState.every((item) => !!item)
	}
  return (
	<div className="container-fluid">
	  <div className="wrapper">
		<header>
		  <h1>Tic Tac Toe game</h1>
		</header>
		<div className="game">
		  <GameStatus currentMove={currentMove} winner={winner}/>
		  <GameBoard boardState={boardState} handleClick={handleClick}/>
		</div>
	  </div>
	
	</div>
  );
}

export default App;
