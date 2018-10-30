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
              href='https://docs.google.com/document/d/1bwLMQrKyk6diShgQhyYHkc8hdDnkKZ2stIIXwGSNKh8/edit#heading=h.gjdgxs' 
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