import {urls, imageToURI} from '../../data/imageURLs.js';
export default function fetchData (param, query){
  fetch('https://deskbookers-remix.herokuapp.com/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: query
      })
    }).then(response => {
      return response.json();
    }).then(responseJSON => {
        var results= responseJSON;
            results= results.map(result => {
              if (result.rating !== null){
                result.rating= result.rating.toFixed(1);
              }
              return result;
            })
        var resultsImages= results.map(result => {
              return result.image_urls[0];
            });
        if(results.length > 0){
          param.setState({results: results, resultsImages: resultsImages, hasSearched: true});
          var storageImages= [];
          // urls.forEach((url, index) =>{
          //   storageImages.push(imageToURI(url))
          // });
          var stringStorage= JSON.stringify(urls);
          localStorage.setItem('resultsImages', stringStorage);
        } else{
          param.setState({results: results, hasSearched: true})
        }
        var stringResults= JSON.stringify(results);
        localStorage.setItem( 'results', stringResults );
        localStorage.setItem( 'hasSearched', true );
      }).catch(err => console.log(err));
}

