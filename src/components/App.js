import React, { Component } from 'react';
import NavBar from './NavBar';
import Slider from './Slider';
import ResultsList from './ResultsList';
import fetchData from '../api/fetchData';
import {urlsInit} from '../../data/imageURLs.js'

class App extends Component {
  constructor(props) {
    super(props);
    var initResults = localStorage.getItem( 'results' ) !== null ?
          JSON.parse(localStorage.getItem('results')) : [],
        initHasSearched = localStorage.getItem( 'hasSearched' ) || false,
        initResultsImages = localStorage.getItem( 'resultsImages' ) !== null ?
          JSON.parse(localStorage.getItem('resultsImages')) : urlsInit,
        initCurrentImageIndex = localStorage.getItem( 'currentImageIndex' ) || 0,
        initPrevPointer = localStorage.getItem( 'prevPointer' ) || 'hidden',
        initNextPointer = localStorage.getItem( 'nextPointer' ) || 'visible';
    this.state = {
      results: initResults,
      hasSearched: initHasSearched,
      resultsImages: initResultsImages,
      currentImageIndex: initCurrentImageIndex,
      prevPointer: initPrevPointer,
      nextPointer: initNextPointer
    };
    this.fetchResults= this.fetchResults.bind(this);
    this.handleNextClick= this.handleNextClick.bind(this);
    this.handlePrevClick= this.handlePrevClick.bind(this);
    this.handleResultClick= this.handleResultClick.bind(this);
  }

  fetchResults(query) {
    const that= this;
    fetchData(that, query);
  }

  handleNextClick() {
    if (this.state.currentImageIndex < 3){
      const newIndex= this.state.currentImageIndex +1;
      if (newIndex === this.state.resultsImages.length - 1){
        this.setState({nextPointer: 'hidden', currentImageIndex: newIndex});
        localStorage.setItem( 'nextPointer', 'hidden' );
      } else if (newIndex === 1){
        this.setState({prevPointer: 'visible', currentImageIndex: newIndex});
        localStorage.setItem( 'prevPointer', 'visible' );
      } else {
        this.setState({currentImageIndex: newIndex})
      }
      localStorage.setItem( 'currentImageIndex', newIndex );
    }
  }

  handlePrevClick() {
    if (this.state.currentImageIndex > 0){
      const newIndex= this.state.currentImageIndex -1;
      if (newIndex === 0){
        this.setState({prevPointer: 'hidden', currentImageIndex: newIndex});
        localStorage.setItem( 'prevPointer', 'hidden' );
      } else if (newIndex === this.state.resultsImages.length - 2){
        this.setState({nextPointer: 'visible', currentImageIndex: newIndex});
        localStorage.setItem( 'nextPointer', 'visible' );
      } else {
        this.setState({currentImageIndex: newIndex})
      }
      localStorage.setItem( 'currentImageIndex', newIndex );
    }
  }

  handleResultClick(index){
    const count= this.state.currentImageIndex;
    if(index === count){
      return;
    } else if (index < count){
        if (index === 0){
          this.setState({prevPointer: 'hidden', currentImageIndex: index, nextPointer: 'visible'});
          localStorage.setItem( 'prevPointer', 'hidden' );
          localStorage.setItem( 'nextPointer', 'visible' );

        } else {
          this.setState({currentImageIndex: index, nextPointer: 'visible'});
          localStorage.setItem( 'nextPointer', 'visible' );
        }
    } else if (index > count){
        if (index === this.state.resultsImages.length - 1){
          this.setState({nextPointer: 'hidden', currentImageIndex: index, prevPointer: 'visible'});
          localStorage.setItem( 'nextPointer', 'hidden' );
          localStorage.setItem( 'prevPointer', 'visible' );
        } else {
          this.setState({currentImageIndex: index, prevPointer: 'visible'});
          localStorage.setItem( 'prevPointer', 'visible' );
        }
    }
    localStorage.setItem( 'currentImageIndex', index );
  }

  render (){
    return (
      <div className='main'>
        <NavBar />
        <Slider
          fetchResults= {this.fetchResults}
          locations= {this.state.locations}
          images= {this.state.resultsImages}
          currentImageIndex= {this.state.currentImageIndex}
          handleNextClick= {this.handleNextClick}
          handlePrevClick= {this.handlePrevClick}
          prevPointer= {this.state.prevPointer}
          nextPointer= {this.state.nextPointer}/>
        <ResultsList
          results={this.state.results}
          hasSearched= {this.state.hasSearched}
          handleResultClick= {this.handleResultClick}/>
      </div>
    );
  }
};

export default App;