import React, { Component } from 'react'

export const nullCustomer = {
  author: {},
  tags: [],
}

const CustomerContext = React.createContext({
  customer: nullCustomer,
  comments: [],
  error: null,
  setError: () => { },
  clearError: () => { },
  setCustomer: () => { },
  clearCustomer: () => { },
  setPets: () => { },
  addPets: () => { },
})

export default CustomerContext

export class CustomerProvider extends Component {
  state = {
    customer: nullCustomer,
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setCustomer = customer => {
    this.setState({ customer })
  }

  setPets = pets => {
    this.setState({ pets })
  }

  clearCustomer = () => {
    this.setCustomer(nullCustomer)
    this.setPets([])
  }

  addPet = pet => {
    this.setPets([
      ...this.state.pets,
      pet
    ])
  }

  render() {
    const value = {
      customer: this.state.customer,
      pets: this.state.pets,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setCustomer: this.setCustomer,
      setPets: this.setPets,
      clearCustomer: this.clearCustomer,
      addPet: this.addPet,
    }
    return (
      <CustomerContext.Provider value={value}>
        {this.props.children}
      </CustomerContext.Provider>
    )
  }
}