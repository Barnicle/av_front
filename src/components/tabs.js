import React, { Component } from 'react';

class Tabs extends Component {
    beforeFetch = (e) => {
        e.preventDefault()
        e.target.setAttribute('disabled', "disabled")
        console.log(e.target);
    }
  render() {
      const {ticketsInit, tabsFilter} = this.props;
    return (
      <div className="tabs">
        <button className="tabs-btn" id="fast" onClick={(e)=> ticketsInit? tabsFilter('duration', ticketsInit) : this.beforeFetch(e)} >
          Самый быстрый
        </button>
        <button className="tabs-btn" id="cheap" onClick={(e)=> ticketsInit? tabsFilter('price', ticketsInit): this.beforeFetch(e)}  >
          Самый дешевый
        </button>
      </div>
    );
  }
}
export default Tabs;
