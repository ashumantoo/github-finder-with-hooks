import React from 'react';
import { Link } from 'react-router-dom';
import { useGAEventsTracker } from '../Hooks/useGAEventsTracker';

const UserItem = (props) => {
  const GAEventTracker = useGAEventsTracker('External Github');
  //We can also convert this class based component into the function based component
  //because here we are not using any state inside the component

  /*============ Defining Local Component state inside the constructor ========
  constructor() {
      super()
      this.state = {
          user: {
              id: 1,
              login: "mojombo",
              avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
              url: "https://api.github.com/users/mojombo",
              html_url: "https://github.com/mojombo",
          }
      }
  }
  ============================================================================*/
  //===========================================================================
  // Now Passing this local component state data from the props i.e 
  // now this state data gets passed from the users component to the 
  // userItem component using props
  //
  // state = {
  //     user: {
  //         id: 1,
  //         login: "mojombo",
  //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //         html_url: "https://github.com/mojombo",
  //     }
  // }
  //===========================================================================

  //destructing the this.props.user because we used 'this.props.user' lots of 
  //the places in the code
  // const { login, avatar_url, html_url } = this.props.user;
  return (
    <div className="card text-center">
      <img className="round-img" src={props.user.avatar_url} alt="user_logo" style={{ width: "60px" }} />
      <h4>{props.user.login}</h4>
      <Link
        to={`/user/${props.user.login}`}
        className="btn btn-dark btn-sm my-1"
        onClick={e => GAEventTracker('More', 'Redirecting to external github website')}>More
          </Link>
    </div>
  )
}

export default UserItem;