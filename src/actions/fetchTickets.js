import { fetchPending, getTickets, fetchError } from '../actions/actions.js';
import { fetchTicketsInitSuccess } from '../actions/actions';

function fetchTickets(searchId) {
    let tickets;
  return dispatch => {
    dispatch(fetchPending());
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.stop === true) {
          dispatch(fetchTicketsInitSuccess(res.tickets, searchId));
          tickets = res.tickets.slice(0, 5);
          dispatch(getTickets(tickets));
          return res.tickets;
        } else dispatch(fetchTickets(searchId));
      })
      .catch(error => {
        dispatch(fetchTickets(searchId));
        dispatch(fetchError(error));
      });
  };
}
export default fetchTickets;
