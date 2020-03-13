import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import { getFirebase, isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Router } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import firebase from '../src/config/Firebase';
import App from './App';
import './fontawesome';
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';

export const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

const app = (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router history={history}>
        <AuthIsLoaded>
          <App />
        </AuthIsLoaded>
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>
);

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  // console.log(auth)
  if (!isLoaded(auth)) return <div></div>;
  return children;
}

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
