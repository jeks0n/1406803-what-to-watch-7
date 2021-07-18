import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {logout} from '../../../store/api-actions';
import PropTypes from 'prop-types';

function UserBlock(props) {
  const {authorizationStatus, userEmail, logoutUser} = props;

  const history = useHistory();

  const userBlockAuthorized = (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
            onClick={() => history.push({pathname: AppRoute.MY_LIST})}
          />
        </div>
        <span>{userEmail}</span>
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
      <Link to={AppRoute.SIGN_IN} className="user-block__link">Sign in</Link>
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
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser() {
    dispatch(logout());
  },
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
