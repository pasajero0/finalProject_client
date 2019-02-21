import React, {Component} from 'react';
import {FiHeart} from "react-icons/fi";
import './SaveForLaterIcon.scss';

class SaveForLaterIcon extends Component {
    state = {
        saveForLater: false
    };

    toogleSaveForLater = () => {
        this.setState({saveForLater: !this.state.saveForLater});
    };

    render() {
        return (
            <FiHeart className={this.state.saveForLater ? "saveForLaterIcon saved" : "saveForLaterIcon"}
                     onClick={this.toogleSaveForLater}
            />
        )
    }
}

export default SaveForLaterIcon;