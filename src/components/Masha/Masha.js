import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Masha.scss';

const propTypes = {
};

const defaultProps = {
};

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class Masha extends Component {
    componentDidMount() {}
    /* here is the place for custom methods */
    render() {
        return (
            <div className="Masha">
            {/* here is going to be body of the component */}
            </div>
        );
    }
}

Masha.propTypes = propTypes;
Masha.defaultProps = defaultProps;

export default Masha;