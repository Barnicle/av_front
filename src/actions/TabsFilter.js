import {getTabsFilter, getTickets} from './actions';

export const tabsFilter = (tabs, tickets) => {
  let array = tickets.slice();

    return dispatch => {
      switch (tabs) {
            case 'fast':
                array.sort((a, b) => {
                        return ((a.segments[0].duration + a.segments[1].duration) -
                            (b.segments[0].duration + b.segments[1].duration));
                    });
                break;
            case 'cheap':
               array.sort((a, b) =>  a.price - b.price);
                break;
          default: //do nothing

        }
        dispatch(getTabsFilter(tabs, tickets));
        dispatch(getTickets(array));
  }
  };

