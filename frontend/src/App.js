import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import Filter from './components/Filter';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollTopButton';
import PatternPage from './PatternPage';

function App() {
  const [patternData, setPatternData] = useState([]);
  const [filters, setFilters] = useState({
    patternSelected: '',
    genderSelected: '',
    groupSelected: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatternData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/patterns');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPatternData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPatternData();
  }, []);

  const getPatternById = (id) => {
    return patternData.find(pattern => pattern._id === id);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Router>
    <div className="App">
      <Navbar />
      <main>
        <p id="logo-text">Stylish sewing and knitting patterns for your next project</p>
        <div className="gallery-container">
          <Filter filters={filters} setFilters={setFilters} />
          <Gallery patternData={patternData} filters={filters} />
        </div>
      </main>
      <ScrollToTopButton />
      <footer></footer>
      <Routes>
      <Route path="/pattern/:_id" element={<PatternPage getPatternById={getPatternById} />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
