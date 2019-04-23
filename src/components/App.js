import React, { Component } from "react";
import { withRouter } from "react-router";
import TableViews from './tableViews';
import DetailedView from "./detailedView";
import { CUSTOM_SORT } from '../utilities/sorting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [], duplicateRes: [], detailedObj : {}, cloneRes : [], paginationStartIndex : 0,
      searchValue : '', activePaginationIndex : 1,
    };
    this.sizeOfPages = 5;
    this.activePaginationIndex = 1; 
  }
  async componentDidMount() {
    const res = await fetch("https://demo9197058.mockable.io/users");
    const json = await res.json();
    const sizeOfPages = this.sizeOfPages; 
    this.setState({
      response: json.slice(0, sizeOfPages),
      cloneRes : json.slice(0, sizeOfPages),
      cloneResTwo : json.slice(0, sizeOfPages),
      duplicateRes: json,
      duplicateResTwo : json
    });
  }

  componentWillMount(){
    if( this.props.location.pathname.length > 1 )
      this.props.history.push('/');
  }

  searchNameHandler = event => {
    const state = { ...this.state };
    const finalArr = state.duplicateResTwo.filter(element => {
      if (event.target.value === "") return element;
      else if ( element.first_name
        .toLowerCase()
        .indexOf(event.target.value.toLowerCase()) > -1 )
        return element;
      return null;
    });
    const fn = event.target.value ? {
      response : finalArr.slice(0,5),
      duplicateRes : finalArr,
      activePaginationIndex : 1
    }
     :
      {
        response : state.cloneResTwo,
        duplicateRes : state.duplicateResTwo,
        activePaginationIndex : 1
      }
    this.setState({ ...fn, searchValue : event.target.value });
  };

  handleRowClick = id => {
    const rowData = [ ...this.state.response ];
    const detailedObj = rowData.find(element => element.id === id);
    this.setState({ detailedObj }, () => this.props.history.push(`/user/${id}`) );
  };

  handleBackClick = () => {
    this.props.history.goBack();
  }

  handleSorting = (sortingState) => {
    const prevState = { ...this.state };
    const data = CUSTOM_SORT(prevState.duplicateRes, sortingState);
    prevState.response = data.slice(0, 5);
    prevState.cloneRes = data.slice(0, 5);
    prevState.cloneResTwo = data.slice(0, 5);
    prevState.duplicateRes = data;
    prevState.duplicateResTwo = data;
    this.setState( prevState, ()=>this.handlePagination(prevState.activePaginationIndex) );
  }

  handlePagination = (index) => {
    const pageSize = this.sizeOfPages;
    const prevState = { ...this.state };
    const startIndex = ( index * pageSize ) - pageSize;
    const endIndex = startIndex + pageSize;
    prevState.activePaginationIndex =index;
    prevState.response = prevState.duplicateRes.slice(startIndex, endIndex);
    prevState.cloneRes = prevState.duplicateRes.slice(startIndex, endIndex);;
    this.setState(prevState);
  }

  handleNextClick = () => {
    const p = Math.ceil( this.state.duplicateRes.length / this.sizeOfPages );
    if(this.state.activePaginationIndex < p)
      this.handlePagination(this.state.activePaginationIndex + 1 );
  }
  handlePreviousClick = () => {
    if(this.state.activePaginationIndex > 1)
      this.handlePagination(this.state.activePaginationIndex - 1 );
  }

  handlePaginationClickChange = (operation) =>{
    const prevState = { ...this.state };
    if(operation === '+'){
      prevState.paginationStartIndex =  prevState.paginationStartIndex + 1;
      if( (prevState.duplicateRes.length / 5  ) > (prevState.paginationStartIndex * 14 + 1) )
        this.setState(prevState);
    }
    else{
      prevState.paginationStartIndex =  prevState.paginationStartIndex - 1;
      if(prevState.paginationStartIndex > -1 )
        this.setState(prevState);
    }
  }

  renderSwitch = () => {
    const pathName = this.props.location.pathname;
    const id = pathName.split('/')[2]; 

    switch ( pathName ) {
      case `/user/${id}` :
        return( <DetailedView detailedObj={this.state.detailedObj} 
          handleBackClick={this.handleBackClick} /> 
        );

      default : 
        return (
          <TableViews 
            activePaginationIndex={this.state.activePaginationIndex}
            pageSize={this.sizeOfPages}
            responseData={this.state.response}
            duplicateData={this.state.duplicateRes}
            paginationStartIndex={this.state.paginationStartIndex}
            handleRowClick={this.handleRowClick}
            handleSorting={this.handleSorting}
            searchNameHandler={this.searchNameHandler} 
            handlePagination={this.handlePagination}
            handleNextClick={this.handleNextClick}
            handlePreviousClick={this.handlePreviousClick}
            handlePaginationClickChange={this.handlePaginationClickChange}
            searchValue={this.state.searchValue}
            />
        );
    }
  };

  render() {
    return (
      <>
        { this.renderSwitch() }
      </>
    );
  }
}

export default withRouter(App);
