import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import useInput from '../../../hooks/use-input';
import {connect} from 'react-redux';
import Logo from '../../UI/logo/logo';
import {login} from '../../../store/api-actions';
import PropTypes from 'prop-types';
import {AppRouteCreator, AuthorizationStatus} from '../../../const';
import {validateEmail, checkInputIsEmpty} from '../../../utils/user';
import {ActionCreator} from '../../../store/action';

const ErrorMessages = {
  DEFAULT: 'Please enter your credentials',
  PASSWORD_EMPTY: 'Password cannot be empty or contain only spaces',
  EMAIL_INCORRECT: 'Please enter a valid email',
};

function SignInPage(props) {
  const {
    onSubmit,
    authorizationStatus,
    hasServerResponseAuthorizationError,
    serverResponseAuthorizationError,
    resetServerAuthorizationError,
  } = props;
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(validateEmail, setIsFormTouched);
  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(checkInputIsEmpty, setIsFormTouched);

  const history = useHistory();

  useEffect(() => {
    if (emailInputHasError) {
      return setErrorMessage(ErrorMessages.EMAIL_INCORRECT);
    } else if (passwordInputHasError) {
      return setErrorMessage(ErrorMessages.PASSWORD_EMPTY);
    } else if (hasServerResponseAuthorizationError) {
      return setErrorMessage(serverResponseAuthorizationError);
    } else if (isFormTouched) {
      return setErrorMessage(ErrorMessages.DEFAULT);
    }}, [passwordInputHasError, emailInputHasError, isFormTouched, hasServerResponseAuthorizationError, serverResponseAuthorizationError]);

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      history.push({pathname: AppRouteCreator.getMain()});
    }

    return resetServerAuthorizationError;
  }, [authorizationStatus, history, resetServerAuthorizationError]);

  const isFormInvalid = emailInputHasError || passwordInputHasError;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!isFormTouched) {
      setErrorMessage(ErrorMessages.DEFAULT);
      return;
    }

    if (!isFormInvalid) {
      onSubmit({
        login: enteredEmail,
        password: enteredPassword,
      });
    }
  };

  const getNameInputClasses = (flag) => flag ? 'sign-in__field sign-in__field--error' : 'sign-in__field';

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          className="sign-in__form"
          action=""
          onSubmit={handleSubmit}
        >
          {(isFormInvalid || !isFormTouched || hasServerResponseAuthorizationError) && (
            <div className="sign-in__message">
              <p>{errorMessage}</p>
            </div>)}
          <div className="sign-in__fields">
            <div className={getNameInputClasses(emailInputHasError)}>
              <input
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className={getNameInputClasses(passwordInputHasError)}>
              <input
                onChange={passwordChangedHandler}
                onBlur={passwordBlurHandler}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <Logo isFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

SignInPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  hasServerResponseAuthorizationError: PropTypes.bool.isRequired,
  serverResponseAuthorizationError: PropTypes.string.isRequired,
  resetServerAuthorizationError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  hasServerResponseAuthorizationError: state.hasServerResponseAuthorizationError,
  serverResponseAuthorizationError: state.serverResponseAuthorizationError,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(formData) {
    dispatch(login(formData));
  },
  resetServerAuthorizationError() {
    dispatch(ActionCreator.resetServerAuthorizationError());
    dispatch(ActionCreator.resetHasServerAuthorizationError());
  },
});

export {SignInPage};
export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
