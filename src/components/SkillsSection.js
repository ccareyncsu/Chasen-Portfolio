import React from 'react';

export default function SkillsSection(props) {
  return(
    <div className='section' id='skills'>
      <div>
        <h2 className='teal-bar white-text left'>SKILLS</h2>
      </div>

      <div className='container skill'>
        <h2 className='teal-text skill-header'>Front End</h2>
        <div className='row'>
          <div className='col'>
            <img className='skills' src='\images\html-5.svg' alt='html5 icon' />
            HTML
          </div>
          <div className='col'>
            <img className='skills' src='\images\css-3.svg' alt='css icon' />
            CSS
          </div>
          <div className='col'>
            <img className='skills' src='\images\vector-javascript-logo-4.png' alt='javascript icon' />
            ES6 JS
          </div>
          <div className='col'>
            <img className='skills' src='\images\react.svg' alt='react icon' />
            React
          </div>
          <div className='col'>
            <img className='skills' src='\images\redux.svg' alt='redux icon' />
            Redux
          </div>
          <div className='col'>
            <img className='skills' src='images\jquery-logo.png' alt='jQuery icon' />
            jQuery
          </div>
        </div> 
      </div>

      <div className='container skill'>
        <h2 className='teal-text skill-header'>Back End</h2>
        <div className='row'>
          <div className='col'>
            <img className='skills' src='\images\nodejs.svg' alt='node icon' />
            Node
          </div>
          <div className='col'>
            <img className='skills' src='\images\expressjs.png' alt='express icon' />
            Espress
          </div>
          <div className='col'>
            <img className='skills' src='\images\mongodb.png' alt='MongoDB icon' />
            MongoDB
          </div>
          <div className='col'>
            <img className='skills' src='\images\postgresql.png' alt='PostgreSQL icon' />
            PostgreSQL
          </div>
        </div>
      </div>
      <div className='container skill'>
        <h2 className='teal-text skill-header'>Other Tools</h2>
        <div className='row'>
          <div className='col'>
            <img className='skills' src='\images\github.png' alt='GitHub icon' />
            GitHub
          </div>
          <div className='col'>
            <img className='skills' src='\images\heroku.png' alt='Heroku icon' />
            Heroku
          </div>
          <div className='col'>
            <img className='skills' src='\images\travis-ci.svg' alt='travis CI icon' />
            Travis CI
          </div>
        </div>
      </div>

    </div>
  )
}