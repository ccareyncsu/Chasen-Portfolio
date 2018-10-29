import React from 'react';

export default function AboutSection (props) {
  return(
    <div className='about-section'>
      <div>
        <h2 className='teal-bar white-text left'>ABOUT</h2>
      </div>
      <div className='col-10 center about-text'>
        <p className='left'>Software Developer. Biochemist. Weightlifter. After studying and working as Biochemist a little under ten years, 
          I needed a new challenge. Work became complacent, and I knew I needed a new passion. Luckily, that is exactly what I 
          found when I dove into code. I applied for Thinkful's full-time Engineering Immersion Bootcamp, got in, moved across the country, 
          and the rest is history... </p>
        <br />
        <p className='left'>I just recently finished the Engineering Immersion Program at Thinkful.  It was an amazing experience to say the least.
          As a software developer and biochemist I love using my exceptional attention to detail each and 
          everyday, but unlike with biochemistry, I am able to harness my unequivocal love for making things.
          That is exactly why I fell in love with this career path and it is exactly why I can not contain my 
          excitement to continue to learn and grow in this field.  
        </p>
      </div> 
    </div>
  )
}