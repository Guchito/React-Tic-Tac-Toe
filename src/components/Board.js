import React from 'react';
import Square from './Square';

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '50px auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}



const Board = ({onClick, squares}) => (
    <div style= {style}>
        {squares.map((square, i)=>( 
            <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div>
)

export default Board