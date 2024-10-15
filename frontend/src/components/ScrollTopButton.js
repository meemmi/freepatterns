import React, { useState, useEffect } from 'react';
import '../App.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) {  // Show button after scrolling more than 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Use useEffect to add the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          id="scrollToTopBtn"
          onClick={scrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
