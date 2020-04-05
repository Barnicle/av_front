import React, { Component } from 'react';
import { stopFilter } from '../actions/StopFilter';
import tickets from '../reducer';

class Filter extends Component {
  //handle form checkbox
  //manage
  CheckboxHandle = e => {
    const { target } = e;
    const inputs = document.querySelectorAll('input');
    target.checked = true;
    console.log(target.checked);
    console.log(inputs);
  };
  render() {
    const { stopsFilter, tickets, stops } = this.props;
    const names = ['Все', 'Без пересадок', '1 Пересадка', '2 Пересадки', '3 Пересадки'];
    return (
      <form className="form-container">
        <h2 className="filter-header">Количество пересадок</h2>
        {names.map((el, index) => (
          <div className="filters-container" key={index}>
            <input
              className="checkbox"
              type="checkbox"
              id={index}
              value={el}
              defaultChecked={true}
              onClick={() => this.CheckboxHandle(event, stopFilter)}
            />
            <label className="labels" htmlFor={index}>
              {el}
            </label>
          </div>
        ))}
      </form>
    );
  }
}
export default Filter;
