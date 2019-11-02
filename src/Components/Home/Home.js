import React, {Component} from 'react'
import CustomerList from '../CustomerList/CustomerList'
import './Home.css'

export default class Home extends Component {
  
  
  render(){
    return (
      <div>
        <CustomerList />
      </div>
    );
  }
}