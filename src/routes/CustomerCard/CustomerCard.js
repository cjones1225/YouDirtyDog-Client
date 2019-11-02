import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class CustomerCard extends Component {
  render(){
    const {customer} = this.props
    return(
      <Link key={customer}/>
    )
  }
}
