import React from 'react';
import './index.css';

const Navigator = ( props ) => {
    const { handleNextClick, handlePreviousClick } = props;

    return(
        <div className='navigatorContainer'>
            <div className='leftBtn'>
                <button className='navigatorBtn' 
                    onClick={handlePreviousClick}>Previous</button>
            </div>
            <div className='rightBtn'>
                <button className='navigatorBtn' 
                    onClick={handleNextClick}>Next</button>
            </div>
        </div>
    );
};

export default Navigator;