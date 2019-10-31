import React, {Component} from 'react'
import './Home.css'

export default class Home extends Component {
  
  onSubmitSearch = () => {

  }
  
  render(){
    return (
      <div>
        <div className='searchBar'>
          <label htmlFor='search'>Search </label>
          <input 
            type='text'
            name='search'
            id='search'
            onSubmit={this.onSubmitSearch}
          />
        </div>
        <section>
          <header>Pet Inventory</header>
          <button>View Inventory</button>
          <p>
            [<em>displays current pet inventory</em>]
          </p>
          <p>These are the pets currently in the building in order from oldest to newest</p>
        </section>
        <section>
          <header>Grooming Schedule</header>
          <button>Add Appointment</button>
          <p>
            [<em>displays grooming schedule on calendar</em>]
          </p>
          <p>These are your upcoming grooming appointments</p>
        </section>
      </div>
    );
  }
}