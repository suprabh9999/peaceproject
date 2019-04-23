import React from 'react';
import './tableRow.css';

const TableRow = (props) => {
  const { rowData } = props;
  return(
      <tr className='tableRow' onClick={()=>props.handleRowClick(props.rowData.id)}>
        <td> { rowData.first_name } </td>
        <td> { rowData.last_name } </td>
        <td> { rowData.company_name } </td>
        <td> { rowData.city } </td>
        <td> { rowData.state } </td>
        <td> { rowData.zip } </td>
        <td> { rowData.email } </td>
        <td style={{color:'#50a4f3'}} > { rowData.web } </td>
        <td> { rowData.age } </td>
      </tr>
    
  );
};


export default TableRow;