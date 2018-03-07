import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExampleApp from './ExampleApp';
import registerServiceWorker from './registerServiceWorker';

let timelineExampleApp = null;
ReactDOM.render(
  <ExampleApp ref={ref => (timelineExampleApp = ref)} />,
  document.getElementById('root')
);

// Only for testing purpose
if (window && timelineExampleApp && timelineExampleApp.exposedFunction) {
  window.renderClinicalTrials = timelineExampleApp.exposedFunction;
} else {
  /* eslint-disable no-console */
  console.warn(
    'Cannot expose the renderClinicalTrials method on the global window.'
  );
  /* eslint-enable */
}

registerServiceWorker();
