import React, { Component } from 'react';
import Home from '../../Components/Home/Home';
import { Section } from '../../Components/Utils/Utils';

export default class HomePage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  render() {
    return (
      <Section className="HomePage">
        <Home />
      </Section>
    );
  }
}
