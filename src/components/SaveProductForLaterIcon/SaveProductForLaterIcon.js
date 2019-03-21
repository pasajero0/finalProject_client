import React from 'react';
import { FiHeart } from "react-icons/fi";
import './SaveProdutForLaterIcon.scss';

const SaveProductForLaterIcon = (props) => {
  const { customClass } = props;
  return <FiHeart className={customClass} />
};

export default SaveProductForLaterIcon;