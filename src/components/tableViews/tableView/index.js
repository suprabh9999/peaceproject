import React from 'react';
import './index.css';
import TableHeader from './markups/tableHeader';
import TableRow from './markups/tableRow';

const TableView = (props) => {
  const tableRows = props.responseData.map((rowData, index) => <TableRow key={index} 
    rowData={rowData} handleRowClick={props.handleRowClick} />);
  return(
    <table>
      <thead>
        <TableHeader handleSorting={props.handleSorting} />
      </thead>
      <tbody>
        { tableRows }
      </tbody>
    </table>
  );
};

export default TableView;