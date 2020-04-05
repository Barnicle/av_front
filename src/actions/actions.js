export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_ID_SUCCESS = 'FETCH_ID_SUCCESS';
export const FETCH_TICKETS_INIT_SUCCESS = 'FETCH_TICKETS_INIT_SUCCESS';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FILTER_BY_STOPS = 'FILTER_BY_STOPS';
export const FILTER_BY_TABS = 'FILTER_BY_TABS'
export function fetchPending() {
  return {
    type: FETCH_PENDING
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error: error
  };
}

export function fetchSearchIdSuccess(searchId) {
  return {
    type: FETCH_ID_SUCCESS,
    searchId: searchId
  };
}

export function FilterStops(stops, tickets) {
  return {
    type: FILTER_BY_STOPS,
    stops,
    tickets
  }

}
export function getTabsFilter(filter, tickets) {
  return {
    type: FILTER_BY_TABS,
    filter,
    tickets
  }

}

export function  getTickets(tickets) {

  return {
    type: FETCH_TICKETS_SUCCESS,
    tickets: tickets.slice(0, 5)
  }
}

export function  fetchTicketsInitSuccess(tickets) {
return {
  type: FETCH_TICKETS_INIT_SUCCESS,
  tickets: tickets
}
}