import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider } from 'react-redux'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import store from './store/store';



const Home=()=>{
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" component={App}/>
    </Switch>
    </BrowserRouter>
  )
}
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path="/" component={App}/>
    </Switch>
    </BrowserRouter>
  // <Provider store={store}>
  //   <Home/>
  // </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
