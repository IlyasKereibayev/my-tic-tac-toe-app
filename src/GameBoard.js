import React from 'react';

function GameBoard(props) {
	const {boardState, handleClick} = props
	return (
		<div className="board">
			<div className="column">
				<span className="square" onClick={() => handleClick(0)}>{boardState[0]}</span>
				<span className="square" onClick={() => handleClick(1)}>{boardState[1]}</span>
				<span className="square" onClick={() => handleClick(2)}>{boardState[2]}</span>
			</div>
			<div className="column">
				<span className="square" onClick={() => handleClick(3)}>{boardState[3]}</span>
				<span className="square" onClick={() => handleClick(4)}>{boardState[4]}</span>
				<span className="square" onClick={() => handleClick(5)}>{boardState[5]}</span>
			</div>
			<div className="column">
				<span className="square" onClick={() => handleClick(6)}>{boardState[6]}</span>
				<span className="square" onClick={() => handleClick(7)}>{boardState[7]}</span>
				<span className="square" onClick={() => handleClick(8)}>{boardState[8]}</span>
			</div>
		</div>
	);
}

export default GameBoard;