import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryText: ''
    };
  }

  setQueryText(e) {
    console.log(e.target.value);
    this.setState({queryText: e.target.value});
  }

  handleClick() {
    console.log('clicked');
    this.setState({queryText: ''});
    this.props.fetchResults();
  }

  render (){
    return (
      <div className= 'search-bar'>
        <input
          className="form-control"
          type="text"
          placeholder="Search Desks"
          value={this.state.queryText}
          onChange={(e) => this.setQueryText(e)} />
        <button onClick= {() => {this.handleClick()} } >
          Search
        </button>
      </div>
    );
  }
};

export default SearchBar;