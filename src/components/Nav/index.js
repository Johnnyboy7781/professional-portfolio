import React, { useEffect, useState } from 'react';

function Nav(props) {
    const {
        sections,
        currSection,
        setCurrSection
    } = props;
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    
    const changeSection = (sectionName) => {
        setCurrSection(sectionName);
    }

    const toggleHamburger = () => {
        setHamburgerIsOpen(!hamburgerIsOpen);
    }

    let [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize);
    })
    
    return (
        <nav>
                {width >= 1060 ? ( 
                    <ul>
                        {sections.map(section => (
                            <li 
                                className={section === currSection ? 'selected' : ''}
                                key={section}
                                onClick={() => changeSection(section)}>
                                    {section}
                            </li>))}
                    </ul>
                ) : (
                    <>
                        <svg onClick={() => toggleHamburger()} className='hamburger' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                        </svg>
                        <div className='modal-container'>
                            <ul className={hamburgerIsOpen ? 'modal open' : 'modal'}>
                                {sections.map(section => (
                                    <li 
                                        className={section === currSection ? 'selected' : ''}
                                        key={section}
                                        onClick={() => {
                                            changeSection(section);
                                            toggleHamburger();
                                        }}>
                                            {section}
                                    </li>))}
                            </ul>
                        </div>
                    </>
                )}
        </nav>
    )
}

export default Nav;