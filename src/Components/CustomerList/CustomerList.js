import React, {Component} from 'react'
import CustomerListContext from '../../contexts/CustomerListContext'
import {Section} from '../../Components/Utils/Utils'
import CustomerApiService from '../../services/customer-api-service'
import CustomerCard from '../CustomerCard/CustomerCard'

export default class CustomerList extends Component {
  static contextType = CustomerListContext

  componentDidMount(){
    this.context.clearError()
    CustomerApiService.getCustomers()
      .then(this.context.setCustomerList)
      .catch(this.context.setError)
  }

  renderCustomers(){
    const customerList = this.context.customerList
    console.log(customerList)
    return customerList.map(customer =>
      <CustomerCard
        key={customer.id}
        customer={customer}
      />  
    )
  }
  
  render(){
    const {error} = this.context
    return(
      <Section list className='CustomerList'>
        {error
          ? <p className='red'>There was an error, try again</p>
          : this.renderCustomers()}
      </Section>
    )
  }
}