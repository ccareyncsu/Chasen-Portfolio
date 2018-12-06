import React from 'react';

export default function Header(props) {
  return(
    <div className='background'>

      <picture>
        <source media="(min-width: 401px)" srcset="/images/mount-huron.jpg" alt="A picture of Huron Peak in the Rocky Mountains" />
        <img src="/images/portrait-suit.jpg" alt="A picture of Chasen" />
      </picture>
      {/* <div>
        <img src='/images/mount-huron.jpg' className='background' alt='rocky mountains' />
        <img src='/images/portrait-suit.jpg' className='photo'/>
      </div> */}

      <div >
        <h2 className='quote'>
          ''Put your heart, mind, and soul <br/>
           into even your smallest acts. <br/>
           This is the secret of success.''
        </h2>
      </div> 
    </div>
  )
}