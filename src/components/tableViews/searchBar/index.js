import React from 'react';
import './index.css';
const SearchBar = ( props ) => {
    const { activePaginationIndex, duplicateData, pageSize  }  = props;
    const customPage = duplicateData.length < 5  ? duplicateData.length : pageSize; 
    let startNum = ( activePaginationIndex *  customPage ) - customPage + 1;
    startNum = duplicateData.length === 0 ? 0 : startNum; 
    const endNum = startNum + customPage - 1;
    const length = duplicateData.length;
    const searchLabel = duplicateData.length === 0 ? "0-0 of 0" : `${startNum}-${endNum} of ${length}`;
    return(
        <div className='searchContainer row'> 
            <div>
                <input className='searchInput' placeholder='Search by first name' 
                    onChange={props.searchNameHandler} value={props.value}/>
            </div>
            <div className='paginationCount'>
                { searchLabel }
            </div>
        </div>
    );
};

export default SearchBar;