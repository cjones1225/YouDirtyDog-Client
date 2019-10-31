import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../Components/Header/Header';
import PrivateRoute from '../Components/Utils/PrivateRoute';
import PublicOnlyRoute from '../Components/Utils/PublicOnlyRoute';
import Results from '../routes/SearchResults/SearchResults';
import CustomerCard from '../routes/CustomerCard/CustomerCard';
import LoginPage from '../routes/LoginPage/Login';
import RegistrationPage from '../routes/RegistrationPage/Register';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';
import MainPage from '../routes/MainPage/MainPage';
import HomePage from '../routes/HomePage/HomePage'
import './App.css';

class App extends Component {
  state = {hasError: false}

  static getDerivedStateFrom(error){
    console.error(error)
    return{hasError: true}
  }

  render(){
    return(
      <div className='App'>
        <header className='App_header'>
          <Header />
        </header>
        <main className='App_main'>
          {this.state.hasError && <p className='red'>There was an Error! Oh dear.</p>}
          <Switch>
            <Route
              exact
              path={'/'}
              component={MainPage}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
            <PrivateRoute
              path={'/home'}
              component={HomePage}
            />
            <PrivateRoute
              path={'/results'}
              component={Results}
            />
            <PrivateRoute
              path={'/customers/:customerId'}
              component={CustomerCard}
            />
            <Route
              component={NotFoundPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App