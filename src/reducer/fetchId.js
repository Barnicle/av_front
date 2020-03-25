import { fetchPending, fetchSearchIdSuccess, fetchError } from '../actions/actions.js';

function fetchId() {
  return dispatch => {
    dispatch(fetchPending());
    fetch(`https://front-test.beta.aviasales.ru/search`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchSearchIdSuccess(res.searchId));
        console.log(res.searchId);
        return res.searchId;
      })
      .catch(error => {

          dispatch(fetchError(error));
      });
  };
}
export default fetchId;
