import {getTabsFilter} from "../actions/actions";

export const tabsFilter = (tabs, tickets)=> {
    return dispatch => {
        switch (tabs) {
            case 'price':
                const byPrice = tickets.sort((a, b) => {
                    return a.price- b.price}).splice(0, 5);
                dispatch(getTabsFilter(byPrice));

            case 'duration':
                const byDuration = tickets.sort((a, b) => {
                    return (a.segments.reduce((a, b) => a.duration + b.duration) - (b.segments.reduce((a, b) => a.duration + b.duration)));
                }).splice(0, 5);
                dispatch(getTabsFilter(byDuration));
        }
        }

}