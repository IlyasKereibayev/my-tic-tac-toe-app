import React from 'react';

function GameStatus(props) {
  const {currentMove, winner} = props
  return (
	<div className="game-status">
	  {!winner &&
	  <span>Player <strong>{currentMove}</strong>'s turn to move</span>}
	  {winner && winner !== 'draw' &&
	  <span>Player <strong>{winner}</strong> is winner!</span>}
		{winner && winner === 'draw' &&
		<span>This is draw!</span>}
	</div>
  );
}

export default GameStatus;