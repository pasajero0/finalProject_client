import React from "react";
import ScrollUpButton from "react-scroll-up-button";
import './ScrollUpButton.scss';
import { FaChevronCircleUp} from "react-icons/fa";


export default class Index extends React.Component {
  render() {
    return (
      <div>
          <ScrollUpButton 
          ContainerClassName = "classForContainer"
          TransitionClassName = "classForTransition"
          >
          <FaChevronCircleUp />
        </ScrollUpButton>
      </div>
    );
  }
}