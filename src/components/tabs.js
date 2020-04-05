import React, { Component } from 'react';
import tickets from "../reducer";

class Tabs extends Component {
  handleTabs =  (e) => {
      const {target} = e;
        let btn;
       target.id === 'fast' ? btn = document.querySelector('#cheap') : btn = document.querySelector('#fast');
       if(this.isActive(btn))this.toogleBtn(btn);
       this.props.tabsFilter(target.id, this.props.tickets)
       this.toogleBtn(target);
  }
  tickets = ()=> {
      return  new Promise( resolve => {
          if(this.props.tickets !=null) {
              resolve(this.props.tickets);
          }

      })
  }
      toogleBtn = (btn)=> {
      this.isActive(btn)?
          btn.classList.replace('tabs-btn-active', 'tabs-btn-disabled')
     :
          btn.classList.replace('tabs-btn-disabled', 'tabs-btn-active')

      }

       isActive(btn){
      return btn.classList.contains('tabs-btn-active');
       }

  render() {
      const promise = this.tickets();
    return (
      <div className="tabs">
        <button className="tabs-btn tabs-btn-disabled" id="fast" disabled={this.props.tickets?false: true} onClick={event => this.handleTabs(event)}>
          Самый быстрый
        </button>
        <button
          className="tabs-btn tabs-btn-disabled"
          id="cheap"
          disabled={this.props.tickets?false: true}
          onClick={event => this.handleTabs(event)}
        >
          Самый дешевый
        </button>
      </div>
    );
  }
}
export default Tabs;
