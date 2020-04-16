import { fetchPending, getTickets, fetchError, fetchTicketsInitSuccess } from './actions.js';
import {filterTickets} from "./StopFilter";

function fetchTickets(searchId, stops) {

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
          dispatch(getTickets(res.tickets));
         // dispatch(filterTickets(stops, res.tickets));
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
