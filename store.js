import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import firebase from 'firebase';

// Firebaseの初期化
var firebaseConfig = {
    apiKey: "AIzaSyD7nzoXeJ3mVkpAR1zvDCMzFmhBegDigJU",
    authDomain: "yam-react.firebaseapp.com",
    databaseURL: "https://yam-react-default-rtdb.firebaseio.com",
    projectId: "yam-react",
    storageBucket: "yam-react.appspot.com",
    messagingSenderId: "907566305260",
    appId: "1:907566305260:web:9afbb7d1003365189a3ac9",
    measurementId: "G-BXDFN92NSG"
  };

var fireapp;
try {
    firebase.initializeApp(firebaseConfig);
} catch (error) {
    console.log(error.message);
}
export default fireapp;

// ステート初期値
const initial = {
  login: false,
  username: '(click here!)',
  email: '',
  data: [],
  items: []
}

// レデューサー
function fireReducer (state = initial, action) {
    switch (action.type) {
      // ダミー
        case 'UPDATE_USER':
            return action.value;
        default:
            return state;
    }
}

// initStore関数（redux-store.jsで必要）
export function initStore(state = initial) {
    return createStore(fireReducer, state, applyMiddleware(thunkMiddleware))
}