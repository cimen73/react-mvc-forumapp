import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header>
     <img
          style={{ height: '50px' }}
          src="src/indirr.png"
        />
      <h1>Forum</h1>
      <NavLink to={'/'}>Posts</NavLink>
      <NavLink to={'/add-post'}>Add Post</NavLink>
    </header>
  );
};

export default Header;