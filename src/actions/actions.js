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

export function FilterStops(stops) {
  return {
    type: FILTER_BY_STOPS,
    stops
  }

}
export function getTabsFilter(tickets) {
  return {
    type: FILTER_BY_TABS,
    tickets
  }

}

export function  getTickets(tickets) {
  return {
    type: FETCH_TICKETS_SUCCESS,
    tickets: tickets
  }
}

export function  fetchTicketsInitSuccess(tickets) {
return {
  type: FETCH_TICKETS_INIT_SUCCESS,
  // searchId: searchId,
  tickets: tickets
}
}