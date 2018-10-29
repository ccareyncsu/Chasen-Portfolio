import React from 'react';
import {MdMenu} from 'react-icons/md';

export default function NavBar(props) {
  return(
    <div className='row nav'>
      <div className='nav-text'>
        <h2 className='teal-text'>Chasen Arey</h2>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
        <MdMenu className='menu teal-text'/>
      </div>
  </div>
  )
}