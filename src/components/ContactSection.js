import React from 'react';
import ReactDOM from 'react-dom'
import {FaRegFileAlt, FaEnvelope, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import {SocialIcon} from 'react-social-icons';

export default function ContactSection (props) {
  return(
    <div className='section' id='contact'>
      <div>
        <h2 className='teal-bar white-text left'>CONTACT</h2>
        <div className='social-icons'>  
          {/* <SocialIcon url="http://linkedin.com/in/chasen-arey" className='social-icons' title='View Chasen on LinkedIn' color='#593C8F'/>
          <SocialIcon url="mailto:ccarey@ncsu.edu" className='social-icons' title='Email Chasen' color='#593C8F'/>
          <SocialIcon url="https://github.com/ccareyncsu" className='social-icons' title='View Chasen on GitHub' color='#593C8F'/> */}

          <a href='http://linkedin.com/in/chasen-arey'>
            <span title="View Chasen on LinkedIn">
              <div className='file-background social-icon'>
                <FaLinkedinIn className='file' title='LinkedIn'/>
              </div>
            </span>
          </a>
            <a href='https://docs.google.com/document/d/1bwLMQrKyk6diShgQhyYHkc8hdDnkKZ2stIIXwGSNKh8/edit#heading=h.gjdgxs'>
            <span title="Email Chasen">
              <div className='file-background social-icon'>
                <FaEnvelope className='file' title='Email'/>
              </div>
            </span>
          </a>
          <a href='https://docs.google.com/document/d/1bwLMQrKyk6diShgQhyYHkc8hdDnkKZ2stIIXwGSNKh8/edit#heading=h.gjdgxs'>
            <span title="View Chasen on GitHub">
              <div className='file-background social-icon'>
                <FaGithub className='file' title='Github'/>
              </div>
            </span>
          </a>
          <a href='https://docs.google.com/document/d/1bwLMQrKyk6diShgQhyYHkc8hdDnkKZ2stIIXwGSNKh8/edit#heading=h.gjdgxs'>
            <span title="View Chasen's Resume">
              <div className='file-background social-icon'>
                <FaRegFileAlt className='file' title='Resume'/>
              </div>
            </span>
          </a>
        </div>
        
      </div>
    </div>
  )
}