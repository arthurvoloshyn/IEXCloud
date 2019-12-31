import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const TableRow = ({ index, number, reportDate, totalAssets, totalCash, totalDebt }) => (
  <Draggable draggableId={`${number}`} index={number}>
    {({ draggableProps, innerRef, dragHandleProps }) => (
      <tr {...draggableProps} ref={innerRef} {...dragHandleProps}>
        <th scope="row">{index}</th>
        <td>{reportDate}</td>
        <td>{totalAssets}</td>
        <td>{totalCash}</td>
        <td>{totalDebt}</td>
      </tr>
    )}
  </Draggable>
);

TableRow.propTypes = {
  reportDate: PropTypes.string,
  totalAssets: PropTypes.number,
  totalCash: PropTypes.number,
  totalDebt: PropTypes.number,
  number: PropTypes.number,
  index: PropTypes.number
};

TableRow.defaultProps = {
  reportDate: '',
  totalAssets: 0,
  totalCash: 0,
  totalDebt: 0,
  number: 0,
  index: 1
};

export default TableRow;
