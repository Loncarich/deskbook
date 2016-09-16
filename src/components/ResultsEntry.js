import React from 'react';

const ResultsEntry = (props) => {
  const styles= {
    backgroundImage: 'url('+props.image+')',
    backgroundSize: '100% 100%',
    width: '100%'
  }

  return (
    <div onClick= {() => {props.handleResultClick(props.index)}} className= 'results-list-entry'>
      <div style= {styles} className='container-image-wrapper'>
            {props.score !== null ?
              <div className='container-image-score'>
                <span>
                  {props.score}
                </span>
                <img src='https://deskbookers-remix.herokuapp.com/images/star.svg' alt= 'star'/>
              </div> :
              <div className='container-image-score'>Be the first to rate!</div>
            }
            {props.hoursPrice !== null ?
              <div className='container-image-price'>{'€'+props.hourPrice+'/hour'}</div> :
              <div className='container-image-price'>Contact Location for Pricing</div>
            }
      </div>
      <div className='container-content'>
        <div className='container-content-workplace'>
          {props.workplace}
        </div>
        <div className='container-content-location'>
          {props.location}
        </div>
      </div>
    </div>
  );
};

export default ResultsEntry;