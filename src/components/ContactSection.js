import React from 'react';
import ReactDOM from 'react-dom'
import {FaRegFileAlt} from 'react-icons/fa';
import {SocialIcon} from 'react-social-icons';

export default function ContactSection (props) {
  return(
    <div className='section'>
      <div>
        <h2 className='teal-bar white-text'>Contact</h2>
        <h3 className='contact-message'>I look foward to hearing from you!</h3>
        <div className='social-icons'>  
          <SocialIcon url="http://linkedin.com/in/chasen-arey" className='social-icons' title='LinkedIn'/>
          <SocialIcon url="mailto:ccarey@ncsu.edu" className='social-icons' title='Mail'/>
          <SocialIcon url="https://github.com/ccareyncsu" className='social-icons' title='GitHub'/>
          <a href='https://docs.google.com/document/d/1bwLMQrKyk6diShgQhyYHkc8hdDnkKZ2stIIXwGSNKh8/edit#heading=h.gjdgxs'>
            <span title="Resume">
              <FaRegFileAlt className='file social-icon' title='Resume'/>
            </span>
          </a>
        </div>
        
      </div>
    </div>
  )
}