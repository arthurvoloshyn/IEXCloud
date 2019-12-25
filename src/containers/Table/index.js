import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { getIndex } from '../../utils';

import TableRow from '../TableRow';

const MyTable = ({ sortDrag, result, activePage }) => {
  const onDragEnd = ({ destination, source: { index } }) => {
    if (!destination) {
      return;
    }

    const { index: destinationIndex } = destination;

    sortDrag(index, destinationIndex, activePage);
  };

  const currentIndex = activePage - 1;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
        <Droppable droppableId="tbody">
          {({ droppableProps, innerRef, placeholder }) => (
            <tbody {...droppableProps} ref={innerRef}>
              {result[currentIndex].map((item, i) => {
                const { reportDate, totalAssets, totalCash, totalDebt } = item;
                const index = getIndex(result, item);

                return <TableRow key={i} index={index} number={i} reportDate={reportDate} totalAssets={totalAssets} totalCash={totalCash} totalDebt={totalDebt} />;
              })}
              {placeholder}
            </tbody>
          )}
        </Droppable>
      </Table>
    </DragDropContext>
  );
};

MyTable.propTypes = {
  sortDrag: PropTypes.func,
  result: PropTypes.array,
  activePage: PropTypes.number
};

MyTable.defaultProps = {
  sortDrag: () => {},
  result: [],
  activePage: 1
};

export default MyTable;
