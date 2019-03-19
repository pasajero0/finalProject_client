import React from 'react';
import Loader from 'react-loader-spinner';

const RenderLoader = ({color, size }) => {
  return (
    <Loader
      type="Circles"
      color={color}
      height={size}
      width={size}
    />
  );
};

export default RenderLoader;
