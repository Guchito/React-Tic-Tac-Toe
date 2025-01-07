import React, {useState} from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board'
import Header from './Header';

const style = {
    width: '200px',
    margin: '20px auto',
    textAlign: 'center',
    color: 'darkblue',
}

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = i =>{
        const boardCopy = [...board]
        // si el usuario toca un cuadrado ya ocupado, o si alguien gano, return
        if(winner || boardCopy[i]) return
        //coloca una X o una O en el cuadrado clickeado
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const renderMoves = () => {
        return <button onClick= {() => setBoard(Array(9).fill(null))}> Start game </button>
    }

    return(
        <>
            <Header />
            <Board squares={board} onClick={handleClick} />
            <div style={style}>
                <p> { winner ? 'Winner: ' + winner : (xIsNext ? 'X' : 'O') + ' Turn' }</p>
                {renderMoves()}
            </div>
        </>
    )
}

export default Game;