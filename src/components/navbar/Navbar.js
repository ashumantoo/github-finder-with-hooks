import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {

    //this only be considered if props are not passed from the calling component
    static defaultProps = {
        icon: "fab fa-github",
        title: 'Github-finder'
    }

    static propTypes = {
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="navbar bg-primary">
                <h2>
                    <i className={this.props.icon} /> {this.props.title}
                </h2>
            </div>
        )
    }
}

export default Navbar;