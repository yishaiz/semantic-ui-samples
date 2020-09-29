import React from 'react';
import { Input, Segment } from 'semantic-ui-react';

const InputExampleInput = () => (
  <div>
    <h2>inputs</h2>
    <Input placeholder="Search..." />
    <br />
    <Input icon="search" placeholder="Search..." />
    <br />
    <Input label="http://" placeholder="mysite.com" />
    <br />
    <Input
      action={{
        color: 'teal',
        labelPosition: 'right',
        icon: 'copy',
        content: 'Copy',
      }}
      defaultValue="http://ww.short.url/c0opq"
    />
    <br />
    <Segment inverted>
      <Input inverted placeholder="Search..." />
    </Segment>
    <br />
    <Input fluid icon='search' placeholder='Search...' />
    <br />
    <div>
    <Input size='mini' icon='search' placeholder='Search...' />
    <br />
    <br />
    <Input size='small' icon='search' placeholder='Search...' />
    <br />
    <br />
    <Input size='large' icon='search' placeholder='Search...' />
    <br />
    <br />
    <Input size='big' icon='search' placeholder='Search...' />
    <br />
    <br />
    <Input size='huge' icon='search' placeholder='Search...' />
    <br />
    <br />
    <Input size='massive' icon='search' placeholder='Search...' />
  </div>
    <br />
    <br />

  </div>
);

export default InputExampleInput;
