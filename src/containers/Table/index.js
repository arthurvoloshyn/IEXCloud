import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TableRow from '../TableRow';

class MyTable extends Component {
  onDragEnd = ({ destination, source: { index } }) => {
    const { sortDrag, activePage } = this.props;

    if (!destination) {
      return;
    }

    sortDrag(
      index,
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
            {({ droppableProps, innerRef, placeholder }) => (
              <tbody
                {...droppableProps}
                ref={innerRef}
              >
                {result[activePage - 1].map((item, i) =>
                  <TableRow
                    key={i}
                    index={i}
                    item={item}
                    result={result}
                  />
                )}
                {placeholder}
              </tbody>
            )}
          </Droppable>
        </Table>
      </DragDropContext>
    );
  }
}

export default MyTable;
