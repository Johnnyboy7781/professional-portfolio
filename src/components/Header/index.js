import React from 'react';

import Nav from '../Nav';

function Header(props) {
    const {
        sections,
        currSection,
        setCurrSection
    } = props;
    
    return (
        <header>
            <h1>Jonathan McDonnell</h1>
            <Nav 
                sections={sections} 
                currSection={currSection}
                setCurrSection={setCurrSection}
            />
        </header>
    )
}

export default Header;