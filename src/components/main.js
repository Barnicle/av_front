import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import fetchId from '../reducer/fetchId';
import fetchTickets from "../reducer/fetchTickets";
import {tabsFilter} from '../reducer/TabsFilter';
import { getTicketsError,  getTicketsPending, getIdSuccess,  getTicketsInitSuccess, getTicketsSuccess, getStopsFilter, getFilter } from '../reducer/tickets';
import Ticket from './ticket';
import Logo from '../images/Logo.svg';
import Filter from './filter';
import Tabs from './tabs';

function mapsStateToProps(state) { return {
    error: getTicketsError(state),
    pending: getTicketsPending(state),
    searchId: getIdSuccess(state),
    ticketsInit: getTicketsInitSuccess(state),
    tickets: getTicketsSuccess(state),
    filter: getFilter(state),
    stops: getStopsFilter(state)
  };
}

const mapsDispatchToProps = dispatch => bindActionCreators({ fetchId, fetchTickets, tabsFilter}, dispatch);

class Main extends Component {
    render() {
        const tickets = this.props.tickets;
      return (
      <div className="grid-container">
        <div className="Logo">
          <a onClick={() => this.props.fetchId()}>
            <Logo />
          </a>
        </div>
        <div className="app">
          <div className="Filters">
            <Filter />
          </div>
          <div className="tickets">
            <Tabs tabsFilter={this.props.tabsFilter} ticketsInit={this.props.ticketsInit}/>
            {tickets === null?undefined:Object.keys(tickets).map(key => <Ticket key={key} ticket={tickets[key]}/>)}
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapsStateToProps, mapsDispatchToProps)(Main);
