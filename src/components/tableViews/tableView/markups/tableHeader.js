import React from 'react';
import './tableHeader.css';

class TableHeader extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sortingState : { 'First Name': 'asc', 'Last Name' :  'asc', 'Company Name' : 'asc',
      'City' : 'asc', 'State' : 'asc', 'Zip' : 'asc', 'Email' : 'asc', 'Web' : 'asc', 'Age' : 'asc'  }
    }
    this.HEADINGS = ['First Name', 'Last Name', 'Company Name', 'City', 'State',
    'Zip', 'Email', 'Web', 'Age']; 
    
  }

  handleSortingState = (heading) => {
    const prevState = { ...this.state };
    const sortingState = { key : null, sortingOrder : null };
    sortingState.key = heading;
    sortingState.sortingOrder = prevState.sortingState[heading];
    prevState.sortingState[heading] = prevState.sortingState[heading] === 'asc' ? 'desc' : 'asc';
    this.resetSortingIcon(heading, prevState);
    this.setState(prevState, () => this.props.handleSorting(sortingState) );
    
  }
    
  resetSortingIcon = (heading, prevState) => {
    for (let o in prevState.sortingState){
      if(o !== heading)
        prevState.sortingState[o] = 'asc';
    }
  }

  render(){
    const headingMarkUp = this.HEADINGS.map((heading, index) => {

      let directionIcon = this.state.sortingState[heading] === 'asc' ? <i className="fas fa-caret-down"></i> :
        <i className="fas fa-caret-up"></i> ;
      return( <th className='tableHeader' 
        onClick={() => this.handleSortingState(heading) } 
        key={index}> { directionIcon } {heading} 
        
    </th>); });
        return(
          <tr>
            { headingMarkUp }
          </tr>
      );
  }
};
export default TableHeader;