import React, { Component } from 'react';
import LocationEntry from './LocationEntry.js';
import locations from '../../data/locations.js';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    var initQueryText = localStorage.getItem( 'queryText' ) || '',
        initLocationsLocal = localStorage.getItem( 'locationsLocal' ) !== null ?
          JSON.parse(localStorage.getItem('locationsLocal')) : locations,
        initFocusState = localStorage.getItem( 'focusState' ) || 'blur';
    this.state = {
      queryText: initQueryText,
      locationsLocal: initLocationsLocal,
      focusState: initFocusState
    }
    this.renderLocations= this.renderLocations.bind(this);
    this.handleLocationClick= this.handleLocationClick.bind(this);
  }

  setQueryText(e) {
    const queryString= e.target.value,
          queryStringLower= queryString.trim().toLowerCase();
    var locationsTemp= locations.slice(0),
        stringLocations;
    if (queryString.length > 0){
      locationsTemp= locationsTemp.filter(location => {
        return location.toLowerCase().match(queryStringLower);
      });
    }
    this.setState({queryText: queryString, locationsLocal: locationsTemp});
    localStorage.setItem( 'queryText', queryString );
    stringLocations= JSON.stringify(locationsTemp)
    localStorage.setItem( 'locationsLocal', stringLocations );
  }

  handleClick() {
    var stringLocations;
    if (this.state.queryText.length > 0){
      this.props.fetchResults(this.state.queryText);
      this.setState({queryText: '', locationsLocal: locations});
      document.getElementById('form-control').blur();
      localStorage.setItem( 'queryText', '' );
      stringLocations= JSON.stringify(locations);
      localStorage.setItem( 'locationsLocal', stringLocations);
    }
  }

  handleLocationClick(location) {
    this.setState({queryText: location, focusState: 'blur'});
    localStorage.setItem( 'queryText', location );
    localStorage.setItem( 'focusState', 'blur' );
  }

  renderLocations() {
    if (this.state.focusState === 'focus'){
      var locationsLocalTemp= this.state.locationsLocal;
          locationsLocalTemp= locationsLocalTemp.map(location => {
            return <LocationEntry
                    key= {location}
                    location= {location}
                    handleLocationClick= {this.handleLocationClick}/>
          });
      return (<ul >{locationsLocalTemp}</ul>);
    } else{
      return (<div></div>);
    }
  }

  handleBlur() {
    var stringLocations;
    this.setState({focusState: 'blur', queryText: '', locationsLocal: locations});
    document.getElementById('form-control').blur();
    localStorage.setItem( 'queryText', '' );
    stringLocations= JSON.stringify(locations);
    localStorage.setItem( 'locationsLocal', stringLocations );
    localStorage.setItem( 'focusState', 'blur' );
  }

  handleFocus() {
    var stringLocations;
    this.setState({focusState: 'focus', queryText: '', locationsLocal: locations});
    localStorage.setItem( 'queryText', '' );
    stringLocations= JSON.stringify(locations);
    localStorage.setItem( 'locationsLocal', stringLocations );
    localStorage.setItem( 'focusState', 'focus' );
  }

  render (){

    return (
      <div onMouseLeave= {() => this.handleBlur()} className= 'search-bar'>
        <div className= 'search-bar-wrapper'>
        <input
          id="form-control"
          type="text"
          placeholder="Enter City"
          value={this.state.queryText}
          onChange={(e) => this.setQueryText(e)}
          onFocus= {() => this.handleFocus()}
          />
          {this.renderLocations()}
        </div>
        <button onClick= {() => {this.handleClick()} } >
          <img src='http://deskbookers-remix.herokuapp.com/search-darkgrey.svg' alt= 'search'/>
        </button>
        </div>
    );
  }
};

export default SearchBar;