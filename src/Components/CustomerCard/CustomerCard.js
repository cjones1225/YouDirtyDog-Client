import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CustomerContext from '../../contexts/CustomerContext';

export default class CustomerCard extends Component {
  static contextType = CustomerContext
  render() {
    const { customer } = this.props;
    return (
      <Link to={`/customers/${customer.id}`} className="CustomerCard">
        <header className="CustomerCard_header">
          <h2 className="CustomerCard__heading">{customer.name}</h2>
        </header>
      </Link>
    );
  }
}

function CustomerPets({ customer }) {
  return (
    <span className="CustomerPets">
      <span>{customer}</span>
    </span>
  );
}