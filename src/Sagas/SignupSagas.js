import { put, call } from 'redux-saga/effects';

import SignupActions from '../Redux/SignupRedux';
import FixtureApi from '../Services/FixtureApi';

import { CommonUtils } from '../Utils';

// attempts to signup
export function* signup(api, user) {

    // CommonUtils.log('SignupSagas api: ', api);
    // CommonUtils.log('SignupSagas user: ', user);

    let response = yield call(FixtureApi.authenticate, user)

    // CommonUtils.log('SignupSagas response: ', response);
    if (user.passWord === '') {
        // dispatch failure
        yield put(SignupActions.signupFailure('WRONG'))
    } else {
        // dispatch successful signup
        yield put(SignupActions.signupSuccess(user))
    }
}
