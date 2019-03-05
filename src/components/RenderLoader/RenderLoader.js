import React from 'react';
import Loader from 'react-loader-spinner';

const RenderLoader = () => {
  return (
    <Loader
      type="Circles"
      color="#blue"
      height={80}
      width={80}
    />
  );
};

export default RenderLoader;
