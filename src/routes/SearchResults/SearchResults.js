import React, { Component } from 'react';
import SearchResults from '../../Components/SearchResults/SearchResults';
import { Section } from '../../Components/Utils/Utils';
export default class Results extends Component {
  render() {
    return (
      <Section className="SearchResults">
        <h2>Results:</h2>
        <SearchResults />
      </Section>
    );
  }
}
