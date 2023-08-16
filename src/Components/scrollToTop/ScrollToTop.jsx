import React, { useState, useEffect } from 'react';
import './scroll.css'
import { HiArrowUp } from "react-icons/hi";

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show/hide the button based on the user's scroll position
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}>
            {/* <div className='scrollToTopButton' onClick={scrollToTop}>
                <HiArrowUp />
            </div> */}
            <button onClick={scrollToTop}>
                <HiArrowUp className='myArrow'/>
            </button>
        </div>
    );
}

export default ScrollToTop