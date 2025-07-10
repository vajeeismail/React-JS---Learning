import PropTypes from 'prop-types';

function UserGreeting(props) {
    
    // if (props.isLoggedIn) {
    //     return <h2 className="welcome-message">Welcome {props.username}</h2>
    // }

    // else {
    //     return <h2 className="login-propmt">Plese log in to continue</h2>
    // }


    // Better code than above
    // return(props.isLoggedIn 
    //     ? <h2 className="welcome-message">Welcome {props.username}</h2> 
    //     : <h2 className="login-propmt">Plese log in to continue</h2>)

    // Other Way
    const welcomeMessage =  <h2 className="welcome-message">
                                Welcome {props.username}
                            </h2>

    const loginPropmt =     <h2 className="login-propmt">
                                Plese log in to continue
                            </h2>
    
    return(props.isLoggedIn ? welcomeMessage : loginPropmt)

}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting