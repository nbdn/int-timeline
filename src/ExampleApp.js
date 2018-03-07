// @flow
import React, { Component } from 'react';
import './ExampleApp.css';

import Timeline from './Timeline/';

import type { Trial } from './Timeline/types';

import {
  trialsMock1,
  trialsMock2,
  trialsMock3,
  trialsMock4,
  trialsMock5
} from './Timeline/__tests__/mocks';

type Props = {};

type State = {
  trials: Array<Trial>,
  trialsMocks: Array<any>
};

class ExampleApp extends Component<Props, State> {
  state = {
    trialsMocks: [
      trialsMock1,
      trialsMock2,
      trialsMock3,
      trialsMock4,
      trialsMock5
    ],
    trials: trialsMock2
  };

  generateRandomTrials = () => {
    const { trialsMocks } = this.state;
    this.setState({
      trials: trialsMocks[Math.floor(Math.random() * trialsMocks.length)]
    });
  };

  exposedFunction = (trials: Array<Trial>) => {
    this.setState({ trials });
  };

  render() {
    const { trials } = this.state;
    return (
      <div className="ExampleApp">
        <h1> React Timeline test app : </h1>
        <Timeline trials={trials} />
        <br />
        <h2> Try it : </h2>
        <p>
          The <code>renderClinicalTrials</code> method is available on window,
          you can use it with your own data using the browser console.
        </p>
        <div className="TestButton">
          <button onClick={this.generateRandomTrials}>Random trials</button>
        </div>
        <div>
          <p>
            See the repository documentation{' '}
            <a
              href="https://github.com/nbdn/int-timeline"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>.
          </p>
        </div>
        <br />
      </div>
    );
  }
}

export default ExampleApp;
