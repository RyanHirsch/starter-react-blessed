import React from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';

import logger from './logger';

// Rendering a simple centered box
function App() {
  return (
    <box
      top="center"
      left="center"
      width="50%"
      height="50%"
      border={{ type: 'line' }}
      style={{ border: { fg: 'blue' } }}
    >
      Hello World!
    </box>
  );
}

// Creating our screen
const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'react-blessed starter',
});

// Adding a way to quit the program
screen.key(['escape', 'q', 'C-c'], (ch, key) => {
  logger.log('verbose', `Exiting due to ${key}`);
  return process.exit(0);
});

// Rendering the React app using our screen
render(<App />, screen);
