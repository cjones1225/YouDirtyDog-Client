import React, {Component} from 'react'
import './SearchResults.css'

export default class SearchResults extends Component {
  render(){
    return (
      <div>
        <section className="results">
          <div className="customerCard">
            <h2>Customer Name</h2>
            <h3>Pets:</h3>
            <p>Pets listed here</p>
          </div>
        </section>
        <section>
          <div className="customerCard">
            <h2>Jane Doe</h2>
            <h3>Pets:</h3>
            <p>Fido</p>
            <p>Mr. Whiskers</p>
          </div>
        </section>
        <section>
          <div className="customerCard">
            <h2>John Doe</h2>
            <h3>Pets:</h3>
            <p>Tanner</p>
            <p>Sonny</p>
          </div>
        </section>
      </div>
    );
  }
}