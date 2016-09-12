import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryText: ''
    };
  }

  setQueryText(e) {
    this.setState({queryText: e.target.value});
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
        <button>
          Search
        </button>
      </div>
    );
  }
};

export default SearchBar;