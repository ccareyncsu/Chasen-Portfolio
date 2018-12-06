import React from 'react';
import {MdClose} from 'react-icons/md';

export default function Overlay(props){
  return(
    <div className='overlay'>
      <div>
        <MdClose className='menu' onClick={props.onClick()} />
      </div>
      <div className='menu-overlay center'>
        <ul className='menu-options'>
          <li><a href='#about' onClick={props.onClick()}>About</a></li>
          <li><a href='#projects' onClick={props.onClick()}>Projects</a></li>
          <li><a href='#skills' onClick={props.onClick()}>Skills</a></li>
          <li><a href='#contact' onClick={props.onClick()}>Contact</a></li>
          <li>
            <a 
              href='https://drive.google.com/file/d/147bvYLo6cN07PaaxMnTSKjQ9f07B85FQ/view?usp=sharing' 
              target='_blank' 
              onClick={props.onClick()}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}