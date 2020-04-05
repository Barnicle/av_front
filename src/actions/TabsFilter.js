import {getTabsFilter, getTickets} from './actions';

export const tabsFilter = (tabs, tickets) => {
  let array = tickets.slice();

    return dispatch => {
    if(tabs === 'cheap')
        {
          array
          .sort((a, b) => {
            return a.price - b.price;
          })
        }
      if(tabs === 'fast') {
          array
          .sort((a, b) => {
              return ((a.segments.duration + a.segments.duration) -
                  (b.segments.duration + b.segments.duration));
          })
}
        dispatch(getTabsFilter(tabs, tickets));
        dispatch(getTickets(array));
  }
  };

