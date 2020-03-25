import { bindActionCreators } from 'redux';
import fetchId from '../reducer/fetchId';
import { getTicketsError, getTicketsPending, getIdSuccess, getTicketsSuccess } from '../reducer/tickets';
import { connect } from 'react-redux';
import Main from './main';
import fetchTickets from "../reducer/fetchTickets";
// function mapsStateToProps(state) {
//   return {
//     pending: getTicketsPending(state),
//     searchId: getIdSuccess(state),
//     tickets: getTicketsSuccess(state),
//     error: getTicketsError(state)
//   };
// }
//
// const mapsDispatchToProps = dispatch => bindActionCreators(
//     { fetchId, fetchTickets }, dispatch);

const App = connect(mapsStateToProps, mapsDispatchToProps)(Main);
export default App;
