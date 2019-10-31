import React, { Component } from 'react'
import Main from '../../Components/Main/Main'
import { Section } from '../../Components/Utils/Utils'

export default class MainPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  render() {
    return (
      <Section className='MainPage'>
        <Main/>
      </Section>
    )
  }
}