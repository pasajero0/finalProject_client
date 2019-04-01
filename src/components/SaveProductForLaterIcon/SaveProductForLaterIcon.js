import React from 'react';
import { FiHeart } from "react-icons/fi";
import './SaveProdutForLaterIcon.scss';

const SaveProductForLaterIcon = (props) => {
  const { className } = props;
  return <FiHeart className={className} />
};

export default SaveProductForLaterIcon;