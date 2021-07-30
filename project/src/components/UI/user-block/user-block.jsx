import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {APP_ROUTE_CREATOR, AuthorizationStatus} from '../../../const';
import {logout} from '../../../store/api-actions';
import {getAuthorizationStatus, getUserAvatar, getUserEmail, getUserName} from '../../../store/user/selectors';

function UserBlock() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const userAvatar = useSelector(getUserAvatar);
  const userEmail = useSelector(getUserEmail);
  const userName = useSelector(getUserName);

  const dispatch = useDispatch();

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
            onClick={() => history.push({pathname: APP_ROUTE_CREATOR.getMyList()})}
          />
        </div>
      </li>
      <li className="user-block__item">
        <a href="/#"
          className="user-block__link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logout());
          }}
        >Sign out
        </a>
      </li>
    </ul>
  );

  const userBlockUnauthorized = (
    <div className="user-block">
      <Link to={APP_ROUTE_CREATOR.getSignIn()} className="user-block__link">Sign in</Link>
    </div>
  );

  return (
    authorizationStatus === AuthorizationStatus.AUTH ?
      userBlockAuthorized
      : userBlockUnauthorized
  );
}

export default UserBlock;
