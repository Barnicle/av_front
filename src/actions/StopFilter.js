import { FilterStops } from '../actions/actions';

export const stopFilter = props => {
  const { tickets, stops } = props;
  const value = HandleFilters(stops);
  console.log(value);
  return dispatch => {
    if (stop === null) dispatch(FilterStops(stops, tickets));
    const result = tickets.filter(el => {
      return el.segments[0].stops.length <= stop && el.segments[1].stops.length <= stop;
    });
    console.log(result);
    dispatch(FilterStops(stop, result));
  };
};

const HandleFilters = stops => {
  const result = stops.reduce(el => el === true);
  return result;
};
