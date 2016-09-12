import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMargin: 0
    };
  }

  handleNextClick() {
    const imageWidth= document.documentElement.clientWidth;
    this.setState({leftMargin: this.state.leftMargin - imageWidth});
    console.log(document.documentElement.clientWidth);
    //console.log(this.state.leftMargin);
  }

  handlePrevClick() {
    const imageWidth= document.documentElement.clientWidth;
    this.setState({leftMargin: this.state.leftMargin + imageWidth});
  }


  render() {
    const images= this.props.images.map((image, index) => {
      return <li key= {index}>
              <img src={image}/>
             </li>
      });
    const leftMargin= this.state.leftMargin;
    const styles = {
      top: 0,
      left: this.state.leftMargin,
      transition: 'left 0.5s',
      width: '300%',
      transtion: 'right 0.5s'
    }
    return (
      <div className='main-slider'>
        <a onClick= {() => {this.handleNextClick()}} className='main-slider-next'>{'>>'}</a>
        <a onClick= {() => {this.handlePrevClick()}} className='main-slider-prev'>{'<<'}</a>
        <ul style= {styles}>
          {images}
        </ul>
        <SearchBar />
      </div>

    );
  }
};

export default Slider;