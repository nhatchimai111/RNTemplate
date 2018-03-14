import { put, call } from 'redux-saga/effects';

import AuthenticateActions from '../Redux/AuthenticateRedux';

import { CommonUtils } from '../Utils';

// attempts to authenticate
export function* authenticate(api, param) {

    try {

        const { user, isSignup, isLogin } = param.authenticate;

        // CommonUtils.log('AuthenticateSagas authenticate param: ', param);

        const response = isSignup ? yield call(api.signup, user) : yield call(api.login, user);
        const authenticate = { isLogin, isSignup, ...response };

        // CommonUtils.log('AuthenticateSagas authenticate: ', authenticate);

        if (user.passWord === '') {
            // dispatch failure
            yield put(AuthenticateActions.authenticateFailure('WRONG'))
        } else {
            // dispatch successful authentication
            yield put(AuthenticateActions.authenticateSuccess(authenticate))
        }
    } catch (error) {
        CommonUtils.log('AuthenticateSagas error: ', error)
    }

}
