// PatternPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const PatternPage = ({ getPatternById }) => {
    const { _id } = useParams(); // Get the _id from the URL
    const [pattern, setPattern] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mainImage, setMainImage] = useState("");

    useEffect(() => {
        const patternData = getPatternById(_id); // Get pattern data from passed function
        if (patternData) {
            setPattern(patternData);
            setMainImage(patternData.imagePath);
        } else {
            setError('Pattern not found');
        }
        setLoading(false); // Set loading to false after attempting to fetch pattern
    }, [_id, getPatternById]); // Include getPatternById in dependencies

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleImageClick = (newImagePath) => {
        setMainImage(newImagePath); // Change the main image to the clicked additional image
    };

    return (
        <div className="site">
            {/*        <header className="header">
                <a id="header-site_name" href="/">Free Patterns</a>
                <nav className="header-top_menu">
                    <ul className="header-top_menu-menu">
                        <li id="header-top_menu-menu-click"><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
            </header> */}

            <main>
            <p id="logo-text">Stylish sewing and knitting patterns for your next project</p>
                
                <div id='patternpage-container'>
                <div className='pattern-images'>
                <img id="pattern-img" src={mainImage} alt={pattern.altText} />

                <div className="additional-images">
                {(pattern.imagePathAdditional1 || pattern.imagePathAdditional2) && (
                <img
                    className="additional-img"
                     src={pattern.imagePath}
                    alt="Main view"
                     onClick={() => handleImageClick(pattern.imagePath)}
                            />
                    )}

                    {pattern.imagePathAdditional1 && (
                        
                        <img
                            className="additional-img"
                            src={pattern.imagePathAdditional1}
                            alt="Additional view 1"
                            onClick={() => handleImageClick(pattern.imagePathAdditional1)}
                        />
                    )}
                    {pattern.imagePathAdditional2 && (
                        <img
                            className="additional-img"
                            src={pattern.imagePathAdditional2}
                            alt="Additional view 2"
                            onClick={() => handleImageClick(pattern.imagePathAdditional2)}
                        />
                    )}
                </div>
                </div>
                <div className='pattern-details'>
                <h1 id='patternpage-itemName'>{pattern.itemName}</h1>
                <h2 id='patternpage-creatorName'>{pattern.creator}</h2>
                <p>{pattern.description}</p>
                {/* Add more pattern details as needed */}
                </div>
                </div>
            
            </main>

            <footer>
            </footer>
        </div>
    );
};

export default PatternPage;
