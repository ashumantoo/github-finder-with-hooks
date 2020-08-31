import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
// let GATrakingId;
if (process.env.NODE_ENV !== 'production') {
  GATrakingId = process.env.REACT_APP_GA_TRACKING_CODE;
} else {
  GATrakingId = process.env.GA_TRACKING_CODE;
}


// ReactGA.initialize(process.env.NODE_ENV ? process.env.REACT_APP_GA_TRACKING_CODE : process.env.GA_TRACKING_CODE);
ReactGA.initialize("UA-176812691-1");

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

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.timing({
      category: 'JS Libraries Pageview UserSpent Time',
      variable: 'load',
      value: 20, // in milliseconds
      label: 'CDN libs'
    })
  });

  return (
    <div className="navbar bg-primary">
      <h2>
        <i className={props.icon} /> {props.title}
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/contactme">Contact Me</Link>
        </li>
      </ul>
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

export default withRouter(Navbar);