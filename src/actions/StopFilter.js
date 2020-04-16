import { updateStops, filterStops } from './actions.js';

export const updateStopsArr = (stops) => {
  return dispatch => {
    dispatch(updateStops(stops));
  };
};

export const filterTickets = (stops, tickets)=>{
return dispatch => {
  console.log(stops);
  if(stops.every(el => !el)) return dispatch(filterStops(stops, []));
  let result = tickets.concat();
for(let i =0; i < stops.length - 1; i++){
  if(stops[i+1] === false) result = result.filter( el => el.segments[0].stops.length !== i && el.segments[1].stops.length !== i);
}
  return dispatch(filterStops(stops, result));
}
}