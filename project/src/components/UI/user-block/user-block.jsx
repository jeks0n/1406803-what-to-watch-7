import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRouteCreator, AuthorizationStatus} from '../../../const';
import {logout} from '../../../store/api-actions';
import PropTypes from 'prop-types';

function UserBlock(props) {
  const {
    authorizationStatus,
    userAvatar,
    userEmail,
    userName,
    logoutUser,
  } = props;

  const history = useHistory();

  const userBlockAuthorized = (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={userAvatar}
            alt={`${userName}: ${userEmail}`}
            width="63"
            height="63"
            onClick={() => history.push({pathname: AppRouteCreator.getMyList()})}
          />
        </div>
      </li>
      <li className="user-block__item">
        <a href="/#"
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            logoutUser();
          }}
        >Sign out
        </a>
      </li>
    </ul>
  );

  const userBlockUnauthorized = (
    <div className="user-block">
      <Link to={AppRouteCreator.getSignIn()} className="user-block__link">Sign in</Link>
    </div>
  );

  return (
    authorizationStatus === AuthorizationStatus.AUTH ?
      userBlockAuthorized
      : userBlockUnauthorized
  );
}

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userAvatar: state.userAvatar,
  userEmail: state.userEmail,
  userName: state.userName,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser() {
    dispatch(logout());
  },
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
