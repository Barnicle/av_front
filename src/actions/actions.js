export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_ID_SUCCESS = 'FETCH_ID_SUCCESS';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';

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
  console.log('FETCH SUCCESS', searchId);
  return {
    type: FETCH_ID_SUCCESS,
    searchId: searchId
  };
}
export function  fetchTicketsSuccess(tickets) {
return {
  type: FETCH_TICKETS_SUCCESS,
  tickets: tickets
}
}