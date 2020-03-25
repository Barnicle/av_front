//ПОЛУЧАЕТ SearchId
// Законсит
import {
  FETCH_PENDING,
  FETCH_ERROR,
  FETCH_TICKETS_SUCCESS,
  FETCH_ID_SUCCESS
} from '../actions/actions.js';

function tickets(state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_ID_SUCCESS:
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        pending: false,
        searchId: action.searchId,
        tickets: action.tickets
      }
    case FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

//SELECTORS
export const getIdSuccess = state => state.searchId;
export const getTicketsSuccess = state => state.tickets;
export const getTicketsPending = state => state.pending;
export const getTicketsError = state => state.error;

export default tickets;
