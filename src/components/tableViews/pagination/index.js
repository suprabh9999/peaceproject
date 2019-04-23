import React from 'react';
import './index.css';

const Pagination = (props) => {
    const { pageSize, data, activePaginationIndex, paginationStartIndex, handlePaginationClickChange } = props;
    const paginationButtons = [];
    let paginationBtn;
    let className;
    let paginationStartIndexIs = paginationStartIndex * 14 + 1;
    let end = paginationStartIndexIs + 14 - 1;
    end  = end > Math.ceil( data.length / pageSize ) ? Math.ceil(data.length / pageSize) : end; 
    for(let index=paginationStartIndexIs; index<=end; index++){
        if(index === activePaginationIndex )
            className = 'activePaginationBtn';
        else
            className = 'paginationBtn';
        paginationBtn = <button key={index} className={className} 
            onClick={() => props.handlePagination(index)}>{ index }</button> ;

            paginationButtons.push(paginationBtn);
    }
    return(
        <h1 style={{clear:'both', textAlign:'center'}}>
            <button className='paginationBtn' onClick={()=>handlePaginationClickChange('-')} > &laquo; </button>
            { paginationButtons }
            <button className='paginationBtn' onClick={()=>handlePaginationClickChange('+')} > &raquo; </button>
        </h1>
    );
};

export default Pagination;