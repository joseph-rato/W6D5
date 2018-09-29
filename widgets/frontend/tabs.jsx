import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      tabs: props.tabs,
    };
  }

  render (){
    return(
      <div>
        tabs
        <ul>
          {
            this.state.tabs.map((tab) => {
              return(
                <li>
                  <h1 onClick={() => this.setTab()} >{tab.title}</h1>
                  <p>{tab.content}</p>
                </li>
              );
              })

            }

        </ul>
      </div>
    );
  }
}

export default Tabs;
