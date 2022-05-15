import React, { useState } from 'react';

function Nav(props) {
    const { sections } = props;
    const [currSection, setCurrSection] = useState(sections[0]);

    const changeSection = (sectionName) => {
        setCurrSection(sectionName);
    }
    
    return (
        <nav>
            <ul>
                {sections.map(section => (
                    <li 
                    className={section === currSection && 'selected'}
                    onClick={() => changeSection(section)}>
                        {section}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;