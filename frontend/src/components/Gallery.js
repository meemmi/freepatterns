import React from 'react';
import GalleryItem from './GalleryItem';

function Gallery({ patternData, filters }) {
  const { patternSelected, genderSelected, groupSelected } = filters;

  // Filter data based on selected filters
  const filteredData = patternData.filter((item) => {
    return (
      (patternSelected === '' || item.patternType === patternSelected) &&
      (genderSelected === '' || item.gender === genderSelected) &&
      (groupSelected === '' || item.garmet === groupSelected)
    );
  });

  return (
    
    <div className="gallery">
      {filteredData.map((item) => (
        <GalleryItem key={item._id} item={item} />
      ))}
    </div>
  );
}

export default Gallery;
