import React from 'react';

const NavBar = () => {

  return (
    <div className='main-navbar'>
      Deskbookers
      <img className= 'main-navbar-image1'src='https://deskbookers-remix.herokuapp.com/images/desk.svg' alt= 'desk'/>
      <img src='https://deskbookers-remix.herokuapp.com/images/book.svg' alt= 'book'/>
    </div>
  );
};

export default NavBar;