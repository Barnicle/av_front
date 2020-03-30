import { fetchPending, getTickets, fetchError } from '../actions/actions.js';
import {fetchTicketsInitSuccess} from "../actions/actions";

function fetchTickets(searchId) {
  return dispatch => {
    dispatch(fetchPending());
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if(res.stop === true){
            dispatch(fetchTicketsInitSuccess(res.tickets, searchId));
            dispatch(getTickets(res.tickets));
            return res.tickets;
        } else {
            //dispatch(fetchTicketsInitSuccess(res.tickets, searchId));
            dispatch(fetchTickets(searchId));
        }
      })
      .catch(error => {
          dispatch(fetchTickets(searchId));
          dispatch(fetchError(error));
      });
  };
}
export default fetchTickets;
