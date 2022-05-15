import React from 'react';

import Nav from '../Nav';

function Header() {
    const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    
    return (
        <header>
            <h1>Jonathan McDonnell</h1>
            <Nav sections={sections} />
        </header>
    )
}

export default Header;