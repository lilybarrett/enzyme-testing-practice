import React, { Component } from 'react';
import GameTable from './GameTable';

class RootComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      table: {
        row1: { cell1: '', cell2: '', cell3: '' },
        row2: { cell1: '', cell2: '', cell3: '' },
        row3: { cell1: '', cell2: '', cell3: '' }
      },
      turn: 'X'
    }

    this.selectCell = this.selectCell.bind(this);
  }

  selectCell(event) {
    let row = event.target.dataset.row;
    let cell = event.target.dataset.cell;
    let cellValue = this.state.table[row][cell];

    if (cellValue === '') {
      let newTable = this.state.table
      newTable[row][cell] = this.state.turn;
      let newTurn = this.state.turn === 'X' ? 'O' : 'X'

      this.setState({
        table: newTable,
        turn: newTurn
      })
    } else {
      alert('Please pick a blank cell');
    }
  }


  render() {
    return(
      <div>
        <h3>Tic Tac Toe</h3>
        <GameTable
          table      = {this.state.table}
          turn       = {this.state.turn}
          selectCell = {this.selectCell}
        />
      </div>
    )
  }
}

export default RootComponent;
