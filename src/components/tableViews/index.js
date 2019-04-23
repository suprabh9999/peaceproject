import React from 'react';
import NavBar from '../navBar';
import Navigator from './navigator';
import SearchBar from './searchBar';
import TableView from './tableView';
import './index.css';
import Pagination from './pagination';

const TableViews = (props) => {
    const { responseData, activePaginationIndex, duplicateData,
      searchNameHandler, handleNextClick, handlePreviousClick, handleRowClick, 
      handleSorting , handlePagination, pageSize, paginationStartIndex,
      handlePaginationClickChange, searchValue } = props;

    return(
        <>
          <NavBar />
          <div className="appContainer">
            <SearchBar searchNameHandler={searchNameHandler} pageSize={pageSize} 
              value={searchValue}
              activePaginationIndex={activePaginationIndex} duplicateData={duplicateData} />
            <TableView
              responseData={responseData}
              handleRowClick={handleRowClick}
              handleSorting={handleSorting}
            />
            <Navigator handleNextClick={handleNextClick} handlePreviousClick={handlePreviousClick} />
            <Pagination data={ duplicateData } pageSize={pageSize} 
              activePaginationIndex={activePaginationIndex}
              paginationStartIndex={paginationStartIndex}
              handlePagination={handlePagination}
              handlePaginationClickChange={handlePaginationClickChange} />
          </div>
        </>
    );
};
export default TableViews;
