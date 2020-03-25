import React, { Component } from 'react';

class Filter extends Component {
  render() {
    const names = ['Все', 'Без пересадок', '2 Пересадки', '3 Пересадки'];
    return (
      <form className="form-container">
        <h2 className="filter-header">Количество пересадок</h2>
        {names.map((el, index) => (
          <div className="filters-container" key={index}>
            <input className="checkbox" type="checkbox" id={el} />
            <label className="labels" htmlFor={el}>
              {el}
            </label>
          </div>
        ))}
      </form>
    );
  }
}
export default Filter;
