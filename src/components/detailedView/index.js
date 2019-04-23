import React from 'react';
import NavBar from '../navBar';
import './index.css';

const DetailedView = (props) => {
    const { age, city, company_name, email, first_name,
        last_name, state, web, zip } = props.detailedObj;

    const arr = [ ['Company', company_name ], ['City', city] ,['State', state],
        ['Zip', zip], ['Email', email], ['Web', web], ['Age', age] ];

    return(
        <>
            <NavBar showBackBtn handleBackClick={ props.handleBackClick } />
            <div className='detailedViewContainer'>
                <h2 className='nameField'>{`${first_name} ${last_name}`}</h2>
            
            { personalDetails (arr) }
                
            </div>
        </>
    );
};

const personalDetails = (arr) => {
    const markup = arr.map((data, index) => {
        return(
            <div key={index}>
                <div className='personalDetail'>
                    <div> { data[0] } </div>
                    <div className='valueField'>{ data[1] }</div>
                </div>
                <div className='seperator' />
            </div>
        );
    });
    return markup;
    
}

export default DetailedView;