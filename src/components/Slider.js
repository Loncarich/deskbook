import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMargin: 0,
      resultsImages2: ['http://localhost:3000/images/default1.XL.jpg',
                      'http://localhost:3000/images/default2.large.jpg',
                      'http://localhost:3000/images/default1.XL.jpg'],
      currentImageIndex: 0,
      prevPointer: 'hidden',
      nextPointer: 'visible'
    };
  }

  handleNextClick() {
    const imageWidth= document.documentElement.clientWidth;
    const newMargin= this.state.leftMargin - imageWidth;
    const newIndex= this.state.currentImageIndex +1;
    if (newIndex === this.state.resultsImages2.length - 1){
      this.setState({nextPointer: 'hidden', currentImageIndex: newIndex, leftMargin: newMargin});
    } else if (newIndex === 1){
      this.setState({prevPointer: 'visible', currentImageIndex: newIndex, leftMargin: newMargin});
    } else {
      this.setState({currentImageIndex: newIndex, leftMargin: newMargin})
    }
  }

  handlePrevClick() {
    const imageWidth= document.documentElement.clientWidth;
    const newMargin= this.state.leftMargin + imageWidth;
    const newIndex= this.state.currentImageIndex -1;
    if (newIndex === 0){
      this.setState({prevPointer: 'hidden', currentImageIndex: newIndex, leftMargin: newMargin});
    } else if (newIndex === this.state.resultsImages2.length - 2){
      this.setState({nextPointer: 'visible', currentImageIndex: newIndex, leftMargin: newMargin});
    } else {
      this.setState({currentImageIndex: newIndex, leftMargin: newMargin})
    }
  }

  render() {
    const images= this.props.images.map((image, index) => {
      const stylesSlide= {
        backgroundImage: 'url('+image+')',
        backgroundSize: '100% 100%',
        width: '100vw',
        paddingTop: '14.47%',
        float: 'left'
      }
      return <div style= {stylesSlide} key= {index}>
             </div>
      });
    const stylesHolder = {
      width: '300%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: this.state.leftMargin,
      transition: 'left 0.5s',
    }
    const stylesSlider = {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '100vw'
    }
    const stylesPrevPointer = {
      visibility: this.state.prevPointer
    }
    const stylesNextPointer = {
      visibility: this.state.nextPointer
    }

    return (
      <div className='main-slider'>
        <button style= {stylesNextPointer} onClick= {() => {this.handleNextClick()}} className='main-slider-next'>{'>>'}</button>
        <button style= {stylesPrevPointer} onClick= {() => {this.handlePrevClick()}} className='main-slider-prev'>{'<<'}</button>
        <div style= {stylesSlider}>
          <div style= {stylesHolder}>
            {images}
          </div>
        </div>
        <SearchBar />
      </div>
    );
  }
};

export default Slider;