import React, { Component } from 'react';

class Tabs extends Component {
  render() {
    return (
      <div className="tabs">
        <button className="tabs-btn" id="fast">
          Самый быстрый
        </button>
        <button className="tabs-btn" id="cheap">
          Самый дешевый
        </button>
      </div>
    );
  }
}
export default Tabs;
