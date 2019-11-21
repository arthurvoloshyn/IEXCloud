import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

class TableRow extends Component {
  render() {
    const { result, item, index } = this.props;
    const { reportDate, totalAssets, totalCash, totalDebt } = item;
    let number;

    result[0].indexOf(item) !== -1 ? number = result[0].indexOf(item) + 1 :
      number = result[1].indexOf(item) + 11;

    return (
      <Draggable draggableId={String(index)} index={index}>
        {provided => (
          <tr
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
          >
            <th scope='row'>{number}</th>
            <td>{reportDate}</td>
            <td>{totalAssets}</td>
            <td>{totalCash}</td>
            <td>{totalDebt}</td>
          </tr>
        )}
      </Draggable>
    );
  }
}

export default TableRow;
