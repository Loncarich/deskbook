import React from 'react';

const LocationEntry = (props) => {

  return (
    <li onClick= {() => props.handleLocationClick(props.location)}>
      {props.location}
    </li>
  );
};

export default LocationEntry;