import React from 'react';
import './index.css';

const NavBar = (props) => {
    const { handleBackClick } = props;
    return (
        <div className='navBar'>
            { props.showBackBtn ? 
            <button style={{border:'none',cursor:'pointer', backgroundColor:'transparent',
             color:'white'}} onClick={ handleBackClick }>
                <i className="fas fa-arrow-left fa-lg"></i>
                <span style={{marginLeft:'20px'}}>Data Peace</span>
            </button>
            :
            <span className='burgerMenu'>
                <i className="fas fa-bars"></i>
                <span style={{marginLeft:'20px'}}>Data Peace</span>
            </span> }
            
        </div>
    );
};


export default NavBar;