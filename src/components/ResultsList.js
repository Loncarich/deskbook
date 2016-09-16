import React from 'react';
import ResultsEntry from './ResultsEntry';

const ResultsList = (props) => {

  function checkResults() {
    if (props.results.length > 0){
      const results2= props.results.map((result, index) => {
              return <ResultsEntry
                        key= {index}
                        index= {index}
                        workplace= {result.name}
                        location= {result.location_name}
                        score= {result.rating}
                        hourPrice= {result.hour_price}
                        image= {result.image_urls[0]}
                        handleResultClick= {props.handleResultClick}/>
            });
      return results2;
    } else if (props.results.length === 0 && props.hasSearched === true || props.hasSearched === 'true') {
      return (
        <div className= 'main-resultslist-none'>
          <img src= 'http://deskbookers-remix.herokuapp.com/images/search-grey.svg'/>
          <div>
            No Search Results Found
          </div>
        </div>);
    } else {
      return (<div></div>);
    }
  }

  return (
    <div className='main-resultslist'>
      {checkResults()}
    </div>
  );
};

export default ResultsList;