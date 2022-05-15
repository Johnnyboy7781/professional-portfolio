import React from 'react';

function Resume() {
    return (
        <section className='resume-container'>
            <div className='resume'>
                <h2>View my resume <a href='https://www.linkedin.com/in/jonathan-mcdonnell-6a6a35156/overlay/1539471480117/single-media-viewer?type=DOCUMENT&profileId=ACoAACWHMJ4B4JxE7VKvBsM97Cxomx9pnnv89gw&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BXlAFSxCJSfi%2BMwJMBV6H4w%3D%3D'>here</a></h2>
            </div>
            <div>
                <h2>Fron-End Proficiencies</h2>
                <ul className='proficiencies'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>HandleBars</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div>
                <h2>Back-End Proficiencies</h2>
                <ul className='proficiencies'>
                    <li>Node</li>
                    <li>Express</li>
                    <li>SQL - MySQL</li>
                    <li>NoSql - MongoDB</li>
                    <li>Unit Testing - Jest</li>
                    <li>APIs</li>
                    <li>REST</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;