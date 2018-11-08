import React from 'react';

export default function ProjectSection(props) {
  return(
    <div className='section' id='projects'>
      <div>
        <h2 className='teal-bar white-text left'>PROJECTS</h2>
      </div>
  
      <div className='project container center clearfix'>
        <div className='row'>
          <img className='col-6 project-image' src='images/goodtimes.gif' alt='Goodtimes' />
          <div className='col-6'>
            <h2 className='teal-text project-name'>Goodtimes</h2>
            <p className='float-right clearfix'>
              Goodtimes is a social event planner designed to help friends coordinate a time and place to hang out. 
              No more endless group texts! The user selects a location and dates/times 
              for their event, and the app generates suggestions for restaurants and activities. 
              Once the user selects a few dates/times and restaurants/activities, the 
              app generates a voting form, which the user shares with their guest attendees via link or email. 
              The guest attendees then vote, and the user sees the most popular options on their dashboard, so they now know the options that 
              work best for everyone!
            </p>
          </div>
        </div>
        <div className='tech'>
          <h3 className='tech-stack teal-text'>Tech Stack:</h3>
          <div className='row front-back-stack'>
            <div className='front-stack col-6-sm'>
              <span class="tech-stack-header">Front-End:</span>
              <ul className='stack-items'>
                <li class="stack-item">React</li>
                <li class="stack-item">Redux</li>
                <li class="stack-item">Moment.js</li>
                <li class="stack-item">Bing Maps API</li>
                <li class="stack-item">Enzyme & Jest</li>
              </ul>
            </div>
            <div className='back-stack col-5-sm'>
              <span class="tech-stack-header">Back-End:</span>
              <ul className='stack-items'>
                <li class="stack-item">Node.js & Express</li>
                <li class="stack-item">Bcrypt & Passport</li>
                <li class="stack-item">MongoDB</li>
                <li class="stack-item">Axios</li>
                <li class="stack-item">Sendgrid & Bitly API</li>
                <li class="stack-item">Yelp & EventBrite API</li>
                <li class="stack-item">Mocha & Chai</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='links'>
          <a href='https://goodtimes-client.herokuapp.com'>Live App</a> 
          <a href='https://github.com/thinkful-ei22/its_a_date_client'>GitHub Client Repo</a> 
          <a href='https://github.com/thinkful-ei22/its_a_date_server'>GitHub Server Repo</a> 
        </div>
      </div> 

      <div className='project container center clearfix'>
        <div className='row'>
          <img className='col-6 project-image' src='images/drone-racing.gif' alt='Drone Racing: The Big Race' />
          <div className='col-6'>
            <h2 className='teal-text project-name'>Drone Racing: The Big Race</h2>
            <p className='float-right clearfix'>
              Drone Racing is a gaming app that allows a user to create their own 2018 AAI RQ-7A BLACK HAWK drone based 
              on the specifications of speed, acceleration, turning, weight, drag, durability, and handling. Once the user is satisfied
              with the tuning of their drone, they are able to race against other users on the database. 
            </p>
          </div>
        </div>
        <div className='tech'>
          <h3 className='tech-stack teal-text'>Tech Stack:</h3>
          <div className='row front-back-stack'>
            <div className='front-stack col-6-sm'>
              <span class="tech-stack-header">Front-End:</span>
              <ul className='stack-items'>
                <li class="stack-item">React</li>
                <li class="stack-item">Redux</li>
                <li class="stack-item">Enzyme & Jest</li>
              </ul>
            </div>
            <div className='back-stack col-5-sm'>
              <span class="tech-stack-header">Back-End:</span>
              <ul className='stack-items'>
                <li class="stack-item">Node.js & Express</li>
                <li class="stack-item">Bcrypt & Passport</li>
                <li class="stack-item">MongoDB</li>
                <li class="stack-item">Mocha & Chai</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='links'>
          <a href='https://drone-racing-client.herokuapp.com'>Live App</a> 
          <a href='https://github.com/thinkful-ei22/Chasen-DroneRacing-client'>GitHub Client Repo</a> 
          <a href='https://github.com/thinkful-ei22/Chasen-DroneRacing-server'>GitHub Server Repo</a> 
        </div>
      </div> 

      <div className='project container center clearfix'>
        <div className='row'>
          <img className='col-6 project-image' src='images/data-structures.gif' alt='Data Structures App' />
          <div className='col-6'>
            <h2 className='teal-text project-name'>Data Structures</h2>
            <p className='float-right clearfix'>
              This application helps to solve the problem of learning new terminology, specifically data structures.  It uses a 
              spaced-repetition algorithm learning technique that incorporates increasing intervals of time between subsequent 
              review of previously learned material in order to exploit the psychological spacing effect. Users create their 
              own account and can track their progress through the content. Also included is a reset button to allow the user to start
              back at the beginning of the content at any time.
            </p>
          </div>
        </div>
        <div className='tech'>
          <h3 className='tech-stack teal-text'>Tech Stack:</h3>
          <div className='row front-stack col-6-sm'>
            <span class="tech-stack-header">Front-End:</span>
            <ul className='stack-items'>
              <li class="stack-item">React</li>
              <li class="stack-item">Redux</li>
              <li class="stack-item">CSS</li>
            </ul>
          </div>
          <div className='back-stack col-5-sm'>
            <span class="tech-stack-header">Back-End:</span>
            <ul className='stack-items'>
              <li class="stack-item">Node.js & Express</li>
              <li class="stack-item">Bcrypt & Passport</li>
              <li class="stack-item">MongoDB</li>
              <li class="stack-item">Mocha & Chai</li>
            </ul>
          </div>
        </div>
        <div className='links'>
          <a href='https://chasen-mitch-spacedrep-client.herokuapp.com/'>Live App</a> 
          <a href='https://github.com/thinkful-ei22/chasen-mitch-spacedRep-client'>GitHub Client Repo</a> 
          <a href='https://github.com/thinkful-ei22/chasen-mitch-spacedRep-server'>GitHub Server Repo</a> 
        </div>
      </div> 
    </div>
  )
}