import React from 'react';

export default function AboutSection (props) {
  return(
    <div className='about-section' id='about'>
      <div>
        <h2 className='teal-bar white-text left'>ABOUT</h2>
      </div>
      <div className='container center about-text'>
        <div className='left-border'>
          <h2 className='about-header teal-text left'>Developer.</h2>
          <h2 className='about-header about-2 center teal-text'>Biochemist.</h2> 
          <h2 className='about-header about-3 right teal-text'>Weightlifter.</h2>
        </div>
        <p className='left flow-text'>After studying and working in Biochemistry 
          a little under ten years, I became increasingly interested in technology and code. 
          I found myself exploring code every possible opportunity, so I decided to dive in head
          first with Thinkful's full-time Engineering Immersion Program to learn the latest Web 
          Development technologies and frameworks.</p>
        <br />
        <p className='left flow-text'>I recently finished the Engineering Immersion Program at Thinkful. It was an amazing experience to say the least.
          As a Software Developer and Biochemist, I love using my outstanding attention to detail each and 
          every day, and in software development, I am able to harness my undeniable love for making things.
          That is exactly why I fell in love with this career, and it is exactly why I am so excited to
          continue to learn and grow in my new field of Software Development.  
        </p>
      </div> 
    </div>
  )
}