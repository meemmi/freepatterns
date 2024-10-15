import React from 'react';
import { Link } from 'react-router-dom';

function GalleryItem({ item }) {
  return (
    <div className="item">
      <Link to={`/pattern/${item._id}`}> {/* Use Link to navigate to the PatternPage */}
        <img src={item.imagePath} alt="pattern item" />
      </Link>
      <h4 className="gallery-picture-header">{item.creator}</h4>
      <p className="gallery-picture-description">{item.itemName}</p>
    </div>
  );
}

export default GalleryItem;
