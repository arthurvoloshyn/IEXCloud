import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TableRow from '../TableRow';

class MyTable extends Component {
  onDragEnd = result => {
    const { destination, source } = result;
    const { sortDrag, activePage } = this.props;

    if (!destination) {
      return;
    }

    sortDrag(
      source.index,
      destination.index,
      activePage
    );
  }

  render() {
    const { result, activePage } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Table bordered striped hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Report date</th>
              <th>Total assets</th>
              <th>Total cash</th>
              <th>Total debt</th>
            </tr>
          </thead>
          <Droppable droppableId='column-1'>
            {provided => (
              <tbody
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {result[activePage - 1].map((item, i) =>
                  <TableRow
                    key={i}
                    index={i}
                    item={item}
                    result={result}
                  />
                )}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </Table>
      </DragDropContext>
    );
  }
}

export default MyTable;
