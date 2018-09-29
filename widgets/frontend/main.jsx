import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class MyComponent extends React.Component {
  render() {
    return(
      <div>
        <header>
          header
          <Tabs tabs={[{title: 'math', content: 'space'}, {title: 'red', content: 'red cats'}]}/>
        </header>
        something is here
        <Clock />
      </div>
    );
  }
}

export default MyComponent;
