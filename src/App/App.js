import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from '../Components/Header/Header';
import PrivateRoute from '../Components/Utils/PrivateRoute';
import PublicOnlyRoute from '../Components/Utils/PublicOnlyRoute';
import SearchResults from '../routes/SearchResults/SearchResults';
import CustomerPage from '../routes/CustomerPage/CustomerPage'
import LoginPage from '../routes/LoginPage/Login';
import RegistrationPage from '../routes/RegistrationPage/Register';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';
import HomePage from '../routes/Home/Home';
import LoggedInHome from '../routes/LoggedInHome/LoggedInHome';
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
            <PublicOnlyRoute
              exact
              path={'/'}
              component={HomePage}
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
              path={'/results'}
              component={SearchResults}
            />
            <PrivateRoute
              path={'/customers/:customerId'}
              component={CustomerPage}
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