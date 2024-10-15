import React from 'react';

function Filter({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    
      <div className="filter">
        <div className="gallery-container-filter">
          <select name="patternSelected" value={filters.patternSelected} onChange={handleFilterChange}>
            <option value="">PATTERN TYPE</option>
            <option value="knitting">KNITTING</option>
            <option value="sewing">SEWING</option>
          </select>
        </div>

        <div className="gallery-container-filter">
          <select name="genderSelected" value={filters.genderSelected} onChange={handleFilterChange}>
            <option value="">GENDER</option>
            <option value="female">FEMALE</option>
            <option value="male">MALE</option>
          </select>
        </div>

        <div className="gallery-container-filter">
          <select name="groupSelected" value={filters.groupSelected} onChange={handleFilterChange}>
            <option value="">GROUP</option>
            <option value="shirt">SHIRTS</option>
            <option value="skirt">SKIRTS</option>
            <option value="dress">DRESSES</option>
            <option value="pants">PANTS</option>
            <option value="accessories">ACCESSORIES</option>
            <option value="jacket">JACKETS</option>
          </select>
        </div>
      </div>
    
  );
}

export default Filter;
