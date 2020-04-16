import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchId from '../actions/fetchId';
import fetchTickets from '../actions/fetchTickets';
import { tabsFilter } from '../actions/TabsFilter';
import { updateStopsArr, filterTickets } from '../actions/StopFilter';
import {
  getTicketsError,
  getTicketsPending,
  getIdSuccess,
  getTicketsInitSuccess,
  getTicketsSuccess,
  getStopsFilter,
  getFilter
} from '../reducer/tickets';
import Ticket from './ticket';
import Logo from '../images/Logo.svg';
import Filter from './filter';
import Tabs from './tabs';

function mapsStateToProps(state) {
  return {
    error: getTicketsError(state),
    pending: getTicketsPending(state),
    searchId: getIdSuccess(state),
    ticketsInit: getTicketsInitSuccess(state),
    tickets: getTicketsSuccess(state),
    filter: getFilter(state),
    stops: getStopsFilter(state)
  };
}

const mapsDispatchToProps = dispatch =>
  bindActionCreators({ fetchId, fetchTickets, tabsFilter, updateStopsArr, filterTickets }, dispatch);

class Main extends Component {
  displayFilters = ()=>{
    const divElement = document.querySelector('.app');
    divElement.classList.add('app__filters-show');
    const filters = document.querySelector('.Filters');
    filters.classList.remove('Filters__disabled');
    console.log(filters.classList);

  }
  render() {
    const {tickets, stops, ticketsInit} = this.props;
    if(tickets) this.displayFilters();
    return (
      <div className="grid-container">
        <div className="Logo">
          <a onClick={() => this.props.fetchId(stops)}>
            <Logo />
          </a>
        </div>
        <div className="app">
          <div className="Filters Filters__disabled">
            <Filter {...this.props} />
          </div>
          <div className="tickets">
            <Tabs tabsFilter={this.props.tabsFilter} tickets={ticketsInit}  />
            {tickets === null
              ? undefined
              : Object.keys(tickets).map(key => <Ticket key={key} ticket={tickets[key]} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(Main);
