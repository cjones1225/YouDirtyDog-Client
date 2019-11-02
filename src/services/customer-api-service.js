import TokenService from '../services/token-service'
import config from '../config'

const CustomerApiService = {
  getCustomers(){
    return fetch(`${config.API_ENDPOINT}/customers`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      }
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
  getPets(){
    return fetch(`${config.API_ENDPOINT}/pets`, {
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
  getPet(petId){
    return fetch(`${config.API_ENDPOINT}/pets/${petId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default CustomerApiService