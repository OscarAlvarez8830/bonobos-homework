import React from 'react';

export default ({ zoom, image }) => {
  return (
    <button className="button" onClick={zoom}>
      <img className="button-image" src={image} />
    </button>
  );
};
