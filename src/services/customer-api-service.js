import TokenService from '../services/token-service'
import config from '../config'

const CustomerApiService = {
  getCustomers(){
    return fetch(`${config.API_ENDPOINT}/customers`, {
      headers: {

      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()  
      )
  },
  getCustomer(customerId){
    return fetch(`${config.API_ENDPOINT}/customers/${customerId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()  
      )
  },
  getCustomerPets(customerId){
    return fetch(`${config.API_ENDPOINT}/customers/${customerId}/pets`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}