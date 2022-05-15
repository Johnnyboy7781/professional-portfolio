import React from 'react';

function Nav(props) {
    const {
        sections,
        currSection,
        setCurrSection
    } = props;
    
    const changeSection = (sectionName) => {
        setCurrSection(sectionName);
    }
    
    return (
        <nav>
            <ul>
                {sections.map(section => (
                    <li 
                    className={section === currSection ? 'selected' : ''}
                    key={section}
                    onClick={() => changeSection(section)}>
                        {section}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;