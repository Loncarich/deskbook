import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleResize= this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize() {
    //update leftMargin on resize
    var elemHolder= document.getElementById('holder');
    const currentViewWidth= document.documentElement.clientWidth,
          newMargin= currentViewWidth * (this.props.currentImageIndex * -1) + 'px';
          elemHolder.style.left= newMargin;
    //update slide height on resize
    var holderWidth= getComputedStyle(elemHolder).getPropertyValue('width'),
        holderHeight= getComputedStyle(elemHolder).getPropertyValue('height'),
        slider= document.getElementsByClassName('main-slider-slide'),
        newPaddingTop;

        holderWidth= Number(holderWidth.slice(0, holderWidth.length - 2));
        holderHeight= Number(holderHeight.slice(0, holderHeight.length - 2));
    for (var i= 0; i< slider.length; i++){
        newPaddingTop= ((holderHeight/holderWidth) * 100) + '%',
        slider[i].style.paddingTop= newPaddingTop;
    }
  }

  render() {
    const viewWidth= document.documentElement.clientWidth,
          numImages= this.props.images.length,
          images= this.props.images.map((image, index) => {
            var heightHolder;
            if(viewWidth > 1000){
              heightHolder= ((2/3) * 800);
            }else if (viewWidth <= 1000 && viewWidth > 500){
              heightHolder= ((3/6.3) * 800);
            } else if (viewWidth <= 500){
              heightHolder= ((2/5.25) * 800);
            }
            const paddingTopCalc= ((heightHolder/(viewWidth * numImages)) * 100) +'%',
                  stylesSlide= {
                    backgroundImage: 'url('+image+')',
                    backgroundSize: '100% 100%',
                    width: '100vw',
                    paddingTop: paddingTopCalc,
                    float: 'left'
                  }
            return <div style= {stylesSlide} className= 'main-slider-slide' key= {index}>
                   </div>
          }),
          stylesSlider = {
            overflow: 'hidden',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: '100vw'
          },
          stylesHolder = {
            width: (numImages * 100)+'%',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: viewWidth * (this.props.currentImageIndex *  -1),
            transition: 'left 0.5s',
          },
          stylesPrevPointer = {
            visibility: this.props.prevPointer
          },
          stylesNextPointer = {
            visibility: this.props.nextPointer
          }

    return (
      <div className='main-slider'>
        <button style= {stylesNextPointer} onClick= {() => {this.props.handleNextClick()}} className='main-slider-next'>{'>>'}</button>
        <button style= {stylesPrevPointer} onClick= {() => {this.props.handlePrevClick()}} className='main-slider-prev'>{'<<'}</button>
        <div style= {stylesSlider}>
          <div style= {stylesHolder} id= 'holder'>
            {images}
          </div>
        </div>
        <SearchBar fetchResults= {this.props.fetchResults} locations= {this.props.locations}/>
      </div>
    );
  }
};

export default Slider;