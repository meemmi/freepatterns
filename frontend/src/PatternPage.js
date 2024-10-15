// PatternPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const PatternPage = ({ getPatternById }) => {
    const { _id } = useParams(); // Get the _id from the URL
    const [pattern, setPattern] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const patternData = getPatternById(_id); // Get pattern data from passed function
        if (patternData) {
            setPattern(patternData);
        } else {
            setError('Pattern not found');
        }
        setLoading(false); // Set loading to false after attempting to fetch pattern
    }, [_id, getPatternById]); // Include getPatternById in dependencies

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="site">
            <header className="header">
                <a id="header-site_name" href="/">Free Patterns</a>
                <nav className="header-top_menu">
                    <ul className="header-top_menu-menu">
                        <li id="header-top_menu-menu-click"><a href="/contact">Contact Us</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <h1>{pattern.itemName}</h1>
                <img src={pattern.imagePath} alt={pattern.altText} />
                <p>{pattern.description}</p>
                {/* Add more pattern details as needed */}
            </main>

            <footer>
                <p>Footer Content Here</p>
            </footer>
        </div>
    );
};

export default PatternPage;
