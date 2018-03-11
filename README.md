# RNTemplate base on [Ignite](https://github.com/infinitered/ignite)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install libraries:

## Librarires in project

**Manual Library**
* [React Native Extra Dimensions Android](https://github.com/Sunhat/react-native-extra-dimensions-android)
* [React Native Smart Splash Screen](https://github.com/react-native-component/react-native-smart-splash-screen)

**Use React Native Link**
* [React](https://github.com/facebook/react)
* [React Native](https://github.com/facebook/react-native)
* [React Native Extended StyleSheet](https://github.com/vitalets/react-native-extended-stylesheet)
* [React Native i18n](https://github.com/AlexanderZaytsev/react-native-i18n)
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
* [React Navigation](https://github.com/react-navigation/react-navigation)
* [React Redux](https://github.com/reactjs/react-redux)
* [Redux](https://github.com/reactjs/redux)
* [Redux Persist](https://github.com/rt2zz/redux-persist)
* [Redux Saga](https://github.com/redux-saga/redux-saga)
* [Apisauce](https://github.com/infinitered/apisauce)
* [Redux Sauce](https://github.com/infinitered/reduxsauce)
* [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)
* [Lodash](https://github.com/lodash/lodash)
* [Ramda](https://github.com/ramda/ramda)

## :arrow_forward: How to Run App
```
1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run npm run i or react-native run-ios
  * for Android
    * Run Genymotion
    * run  npm run a or react-native run-android
```

## :arrow_forward: How to show log
[Install Reactotron](https://github.com/infinitered/reactotron/blob/master/docs/installing.md)


***Simple log***
```
console.tron.log(<string>);
```
***Complex log***
```
console.tron.display({
  name: <string>,
  value: <object>,
  preview: <string>,
  important: true,
  // image: 'http://placekitten.com/g/400/400'
    });
```