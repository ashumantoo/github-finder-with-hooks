import React from 'react';
import PropTypes from 'prop-types';

// class Navbar extends Component {
//     //In this component we are not using any state
//     //so we can convert it into the functional component

//     //this only be considered if props are not passed from the calling component
//     static defaultProps = {
//         icon: "fab fa-github",
//         title: 'Github-finder'
//     }

//     static propTypes = {
//         icon: PropTypes.string.isRequired,
//         title: PropTypes.string.isRequired
//     };

//     render() {
//         return (
//             <div className="navbar bg-primary">
//                 <h2>
//                     <i className={this.props.icon} /> {this.props.title}
//                 </h2>
//             </div>
//         )
//     }
// }

// export default Navbar;

const Navbar = (props) => {
    return (
        <div className="navbar bg-primary">
            <h2>
                <i className={props.icon} /> {props.title}
            </h2>
        </div>
    )

}

//this only be considered if props are not passed from the calling component
Navbar.defaultProps = {
    icon: "fab fa-github",
    title: 'Github-finder'
}

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Navbar;