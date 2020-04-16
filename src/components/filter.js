import React, { Component } from 'react';

class Filter extends Component {
  checkboxHandle = (e) => {
    const { target } = e;
    const id = target.id;
    const stops = this.props.stops;
    if(id === '0') {
      this.toggleAllStop(target);

    };
    this.toggleCheckbox();
    stops[id] = target.checked;
    this.props.updateStopsArr(stops);
    this.props.filterTickets(stops, this.props.ticketsInit);
  };

  toggleAllStop = (target) => {
    const inputs = document.querySelectorAll('input');
    const stops = this.props.stops;
    const toggleSwitch = target.checked;
    toggleSwitch? stops.fill(true): stops.fill(false);
    for (let i = 1; i < inputs.length; i++) inputs[i].checked = toggleSwitch;
    this.props.updateStopsArr(this.props.stops);
  };

  toggleCheckbox = () => {
    const inputs = document.querySelectorAll('input');
    const all = inputs[0]; //all checkbox
    const stopsArray = this.props.stops;
    const stops = Array.from(inputs).slice(1); //stops checkboxes
    if (all.checked) {
      stopsArray[0] = all.checked = false;
    };
    if (stops.every((el) => el.checked) && !all.checked) {
      stopsArray[0] = all.checked = true;
    };
    this.props.updateStopsArr(stopsArray);
  };

  render() {
    const names = ['Все', 'Без пересадок', '1 Пересадка', '2 Пересадки', '3 Пересадки'];
    return (
      <form className="form-container form-container_active" onChange={(event) => this.checkboxHandle(event)}>
        <h2 className="filter-header">Количество пересадок</h2>
        {names.map((el, index) => (
          <div className="filters-container" key={index}>
            <input
              className="checkbox"
              type="checkbox"
              id={index}
              value={el}
              defaultChecked={true}
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
