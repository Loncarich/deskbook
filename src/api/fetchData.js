export default function fetchData (param){
  fetch('http://localhost:3000/data', {
    method: 'GET'
  }).then(response => {
      return response.json();
    }).then(responseJSON => {
        console.log(responseJSON);
        const results= responseJSON.rows.slice(0, 3);
        const resultsImages= results.map(result => {
          return result.image_urls[0];
        })
        param.setState({results: results, resultsImages: resultsImages},
          console.log(param.state.results));
      }).catch(err => console.log(err));
}

