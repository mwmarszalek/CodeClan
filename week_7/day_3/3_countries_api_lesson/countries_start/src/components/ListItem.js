import React from 'react';
import './ListItem.css';

const ListItem = ({country,onCountryClicked}) => {

  const handleClick = function() {
    onCountryClicked(country)
  }

  return <li onClick={handleClick}>{country.name.common}</li>
}

export default ListItem;