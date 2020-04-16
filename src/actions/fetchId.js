import { fetchPending, fetchSearchIdSuccess, fetchError } from './actions.js';
import fetchTickets from "./fetchTickets";

function fetchId(stops) {
  return dispatch => {
    dispatch(fetchPending());
    fetch(`https://front-test.beta.aviasales.ru/search`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        const id = res.searchId;
        dispatch(fetchSearchIdSuccess(res.searchId));
        dispatch(fetchTickets(id, stops));
        return res.searchId;
      })
      .catch(error => {
          dispatch(fetchError(error));
      });
  };
}
export default fetchId;
