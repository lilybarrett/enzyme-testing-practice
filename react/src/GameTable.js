import React from 'react';

const GameTable = ({table, turn, selectCell}) => {
  return(
    <div>
      <p>
        { `${turn}'s turn to go!` }
      </p>
      <table>
        <tbody>
          <tr>
            <td data-row="row1" data-cell="cell1" onClick={ selectCell }>
              { table.row1.cell1 }
            </td>
            <td data-row="row1" data-cell="cell2" onClick={ selectCell }>
              { table.row1.cell2 }
            </td>
            <td data-row="row1" data-cell="cell3" onClick={ selectCell }>
              { table.row1.cell3 }
            </td>
          </tr>
          <tr>
            <td data-row="row2" data-cell="cell1" onClick={ selectCell }>
              { table.row2.cell1 }
            </td>
            <td data-row="row2" data-cell="cell2" onClick={ selectCell }>
              { table.row2.cell2 }
            </td>
            <td data-row="row2" data-cell="cell3" onClick={ selectCell }>
              { table.row2.cell3 }
            </td>
          </tr>
          <tr>
            <td data-row="row3" data-cell="cell1" onClick={ selectCell }>
              { table.row3.cell1 }
            </td>
            <td data-row="row3" data-cell="cell2" onClick={ selectCell }>
              { table.row3.cell2 }
            </td>
            <td data-row="row3" data-cell="cell3" onClick={ selectCell }>
              { table.row3.cell3 }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default GameTable;
