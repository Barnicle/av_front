import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import fetchId from '../reducer/fetchId';
import fetchTickets from "../reducer/fetchTickets";
import { getTicketsError, getTicketsPending, getIdSuccess, getTicketsSuccess } from '../reducer/tickets';
import Ticket from './ticket';
import Logo from '../images/Logo.svg';
import Filter from './filter';
import Tabs from './tabs';

function mapsStateToProps(state) {
  return {
    pending: getTicketsPending(state),
    searchId: getIdSuccess(state),
    tickets: getTicketsSuccess(state),
    error: getTicketsError(state)
  };
}

const mapsDispatchToProps = dispatch => bindActionCreators({ fetchId, fetchTickets }, dispatch);


class Main extends Component {
  componentDidMount(){
    console.log(this.props);
    // const {dispatch, fetchId, fetchTickets} = this.props;
    //   dispatch(fetchId);
      // dispatch(fetchTickets(this.props.searchId));
  }

  render() {
      // this.props.tickets === undefined? console.log('there are no tickets') : console.log(this.props.tickets.slice(0, 5));

      // const tickets = this.props.tickets.slice(0, 5);
      // console.log(tickets);
      return (
      <div className="grid-container">
        <div className="Logo">
          <a onClick={() => this.props.fetchTickets(this.props.searchId)}>
            <Logo />
          </a>
        </div>
        <div className="app">
          <div className="Filters">
            <Filter />
          </div>
          <div className="tickets">
            <Tabs />
            {this.props.tickets === undefined?console.log('NO TICKETS FOR YOU'):<Ticket tickets={this.props.tickets}/>}
          </div>
        </div>
      </div>
    );
  }
}


export default connect(mapsStateToProps, mapsDispatchToProps)(Main);
