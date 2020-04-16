//ПОЛУЧАЕТ SearchId
// Законсит

import {
  FETCH_PENDING,
  FETCH_ERROR,
  FETCH_TICKETS_INIT_SUCCESS,
  FETCH_TICKETS_SUCCESS,
  FETCH_ID_SUCCESS,
  FILTER_BY_TABS,
  FILTER_BY_STOPS,
  UPDATE_STOPS,
} from '../actions/actions.js';

function tickets(state = [], action) {

  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_ID_SUCCESS:
      return {
        ...state,
        pending: false,
        searchId: action.searchId,
      };
    case FETCH_TICKETS_INIT_SUCCESS:
      return {
        ...state,
        pending: false,
        ticketsInit: action.tickets,
      };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.tickets,
      };

    case FILTER_BY_TABS:
      return {
        ...state,
        filter: action.filter,
        ticketsInit: action.tickets,
      };

    case FILTER_BY_STOPS:
      return {
        ...state,
        stops: action.stops,
        tickets: action.tickets,
      };

    case UPDATE_STOPS:
      return {
        ...state,
        stops: action.stops,
      };

    case FETCH_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
}

//SELECTORS TICKETS
export const getIdSuccess = (state) => state.searchId;
export const getTicketsPending = (state) => state.pending;
export const getTicketsError = (state) => state.error;
export const getTicketsInitSuccess = (state) => state.ticketsInit;
export const getTicketsSuccess = (state) => state.tickets;

//SELECTORS FOR STOPS FILTER
export const getStopsFilter = (state) => state.stops;

//SELECTOR FOR TABS
export const getFilter = (state) => state.filter;

export default tickets;
