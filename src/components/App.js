import React, { Component } from 'react';
import NavBar from './NavBar';
import Slider from './Slider';
import ResultsList from './ResultsList';
import fetchData from '../api/fetchData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      resultsImages: ['http://localhost:3000/images/default1.XL.jpg',
                      'http://localhost:3000/images/default2.large.jpg',
                      'http://localhost:3000/images/default2.large.jpg']
    };
  }

  render (){
    return (
      <div className='main'>
        <NavBar />
        <Slider images= {this.state.resultsImages}/>
        <ResultsList results={this.state.results}/>
      </div>
    );
  }
};

export default App;