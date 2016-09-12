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
      currentImage: 'http://localhost:3000/images/default1.XL.jpg',
    };
  }

  // handleNextClick() {
  //   const imageWidth= document.documentElement.clientWidth;
  //   this.setState({leftMargin: this.state.leftMargin - imageWidth});
  //   console.log(document.documentElement.clientWidth);
  //   //console.log(this.state.leftMargin);
  // }

  handleNextClick() {
    const currentIndex= this.state.resultsImages2.indexOf(this.state.currentImage);
    this.setState({currentImage: this.state.resultsImages2[currentIndex + 1]});
  }

  // handlePrevClick() {
  //   const imageWidth= document.documentElement.clientWidth;
  //   this.setState({leftMargin: this.state.leftMargin + imageWidth});
  // }

    handlePrevClick() {
    const currentIndex= this.state.resultsImages2.indexOf(this.state.currentImage);
    this.setState({currentImage: this.state.resultsImages2[currentIndex - 1]});
  }


  render() {
    const images= this.props.images.map((image, index) => {
      return <li key= {index}>
             </li>
      });
    const leftMargin= this.state.leftMargin;
    const stylesList = {
      top: 0,
      left: this.state.leftMargin,
      transition: 'left 0.5s',
      width: '300%',
      transition: 'right 0.5s'
    }
    const stylesSlider = {
      backgroundImage: 'url('+this.state.currentImage+')',
      backgroundSize: '100% 100%',
      transition: 'background-image 0.5s linear'
    }

    return (
      <div style= {stylesSlider} className='main-slider'>
        <button disabled= {true} onClick= {() => {this.handleNextClick()}} className='main-slider-next'>{'>>'}</button>
        <button onClick= {() => {this.handlePrevClick()}} className='main-slider-prev'>{'<<'}</button>
        <ul style= {stylesList}>
          {images}
        </ul>
        <SearchBar />
      </div>

    );
  }
};

export default Slider;