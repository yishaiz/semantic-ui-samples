import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Buttons from './Samples/Sample1-Buttons';
import AnimatedButtons from './Samples/Sample2-animation-buttons';
import Inputs from './Samples/Sample3-inputs';
import Dropdown from './Samples/Sample4-dropdown';
import 'semantic-ui-react';

function App() {
  return (
    <div>
      <h3>
        few smaples from:{' '}
        <a href="https://react.semantic-ui.com/" 
        rel="noopener noreferrer"
        target='_blank'>
          https://react.semantic-ui.com/
        </a>
      </h3>
      <Buttons></Buttons>
      <hr />
      <AnimatedButtons></AnimatedButtons>
      <hr />
      <Inputs></Inputs>
      <hr />
      <Dropdown></Dropdown>
    </div>
  );
}

export default App;
