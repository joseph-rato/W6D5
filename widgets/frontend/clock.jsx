import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: (new Date()).toString(),
    };
    this.time = "";
    this.tick = this.tick.bind(this);

  }

  componentDidMount() {
    console.log('activated');
    this.time = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log('undone');
    clearInterval(this.time);
  }

  tick() {
    let new_date = (new Date()).toString();
    this.setState({date: new_date});
  }

  render(){
    return (
      <div className="idk">
        <div className="datetime">
          <label htmlFor="date">Date</label>
          <br/>
          <br/>
          <label htmlFor="time">Time</label>
        </div>
        <div className="clock">
          <div id="date" className="date">{this.state.date.slice(0,16)}</div>
          <br/>
          <div id="time" className="time">{this.state.date.slice(16,24)}</div>
        </div>
      </div>
    );
  }
}

export default Clock;
