import React from 'react';

function About() {
    return (
        <section>
            <div className='profile-pic-container'>
                <img
                    className='profile-pic'
                    src={require('../../assets/imgs/profile-pic.jpg')} 
                    alt='Headshot of Jonathan McDonnell'
                />
            </div>
            <div className='about-container' >
                <p className='about'>
                    Just your average medical student turned hippie software developer.
                    <br /><br />
                    I have been teaching myself how to code for a little over a year now. I have been working my way up the knowledge ladder, and what started as a passing hobby turned into my new career!
                    <br /><br />
                    I studied hard from the educational materials I could find and eventually ended up coding an entire app with visual design help and artwork done by my good friend Samuel Adams (that's his name I swear). You can check out that app and my other projects below.
                    <br /><br />
                    Thanks for stopping by!
                </p>
            </div>
        </section>
    )
}

export default About;