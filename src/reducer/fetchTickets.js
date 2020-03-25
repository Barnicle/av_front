import { fetchPending, fetchTicketsSuccess, fetchError } from '../actions/actions.js';

function fetchTickets(searchId) {
  return dispatch => {
    dispatch(fetchPending());
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchTicketsSuccess(res.tickets));
        return res.tickets;
      })
      .catch(error => {
        dispatch(fetchError(error));
      });
  };
}
export default fetchTickets;
