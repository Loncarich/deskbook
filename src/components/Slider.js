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
    this.handleResize= this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
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
    const newIndex= this.state.currentImageIndex -1;
    const newMargin= 0;
    if (newIndex === 0){
      this.setState({prevPointer: 'hidden', currentImageIndex: newIndex, leftMargin: newMargin});
    } else if (newIndex === this.state.resultsImages2.length - 2){
      this.setState({nextPointer: 'visible', currentImageIndex: newIndex, leftMargin: newMargin});
    } else {
      this.setState({currentImageIndex: newIndex, leftMargin: newMargin})
    }
  }

  handleResize() {
    //update leftMargin on resize
    var elemHolder= document.getElementById('holder');
    const currentViewWidth= document.documentElement.clientWidth;
    const newMargin= currentViewWidth * (this.state.currentImageIndex * -1) + 'px';
    elemHolder.style.left= newMargin;
    //update slide height on resize
    const holderWidth= parseInt(getComputedStyle(elemHolder).getPropertyValue('width'), 10);
    const holderHeight= parseInt(getComputedStyle(elemHolder).getPropertyValue('height'), 10);
    var slider= document.getElementsByClassName('main-slider-slide');
    for (var i= 0; i< slider.length; i++){
      const newPaddingTop= ((holderHeight/holderWidth) * 100) + '%';
      slider[i].style.paddingTop= newPaddingTop;
    }
  }

  render() {
    const viewWidth= document.documentElement.clientWidth;
    const viewHeight= document.documentElement.clientHeight;
    const paddingTopCalc= (((viewHeight * 0.66666666)/(viewWidth * 3)) * 100) +'%';
    const images= this.props.images.map((image, index) => {
      const stylesSlide= {
        backgroundImage: 'url('+image+')',
        backgroundSize: '100% 100%',
        width: '100vw',
        paddingTop: paddingTopCalc,
        float: 'left'
      }
      return <div style= {stylesSlide} className= 'main-slider-slide' key= {index}>
             </div>
      });
    const stylesHolder = {
      width: '300%',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: viewWidth * (this.state.currentImageIndex *  -1),
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
          <div style= {stylesHolder} id= 'holder'>
            {images}
          </div>
        </div>
        <SearchBar fetchResults= {this.props.fetchResults}/>
      </div>
    );
  }
};

export default Slider;