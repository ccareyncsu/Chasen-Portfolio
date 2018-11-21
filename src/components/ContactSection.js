import React from 'react';
import {FaRegFileAlt, FaEnvelope, FaGithub, FaLinkedinIn} from 'react-icons/fa';

export default function ContactSection (props) {
  return(
    <div className='section' id='contact'>
      <div>
        <h2 className='teal-bar white-text left'>CONTACT</h2>
        <div className='row social-icons center'>  
          <div className='col'>
            <a href='http://linkedin.com/in/chasen-arey' target="_blank">
              <span title="View Chasen on LinkedIn">
                <div className='file-background social-icon'>
                  <FaLinkedinIn className='file' title='LinkedIn'/>
                </div>
              </span>
              <p className='contact-label'>LinkedIn</p>
            </a>
          </div>
          <div className='col'>
            <a href='mailto:ccarey@ncsu.edu' target="_blank">
              <span title="Email Chasen">
                <div className='file-background social-icon'>
                  <FaEnvelope className='file' title='Email'/>
                </div>
              </span>
              <p className='contact-label'>Email</p>
            </a>
          </div>
          <div className='col'>
            <a href='https://github.com/ccareyncsu'>
              <span title="View Chasen on GitHub">
                <div className='file-background social-icon'>
                  <FaGithub className='file' title='Github'/>
                </div>
              </span>
              <p className='contact-label'>GitHub</p>
            </a>
          </div>
          <div className='col'>
            <a href='https://docs.google.com/document/d/1bwLMQrKyk6diShgQhyYHkc8hdDnkKZ2stIIXwGSNKh8/edit#heading=h.gjdgxs'>
              <span title="View Chasen's Resume">
                <div className='file-background social-icon'>
                  <FaRegFileAlt className='file' title='Resume'/>
                </div>
              </span>
              <p className='contact-label'>Resume</p>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}