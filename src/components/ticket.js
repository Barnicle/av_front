import React, {Component} from 'react';

class Ticket extends  Component{
    getFlightTime = (departure, minutes)=> {
      departure.setMinutes(departure.getMinutes() + minutes);//if minutes = 0 set departure time
        const hours = departure.getHours() >= 10? departure.getHours(): 0 + departure.getHours().toString();
        const minute = departure.getMinutes() >= 10? departure.getMinutes():0 + departure.getMinutes().toString()
      return `${hours}:${minute}`
    }

    getTime = (date) => {
        const days = `${Math.trunc(Math.trunc(date/60)/24)}`;
        const hours = `${Math.trunc(date/60 %24)}`;
        const minutes = `${date % 60}`;
        const time = [days, hours, minutes];
        const TimeFormat = (time) => time.length < 2?0+time:time;
        for (let i=0; i<time.length; i++){
            time[i] = TimeFormat(time[i]);
        }
        return `${time[0] > 0?`${time[0]}д ${time[1]}ч ${time[2]}м` : `${time[1]}ч ${time[2]}м`} `;
    }
    getStops = (stops) => {
        if(stops.length == 0) return <h3>{`Без Пересадок`}</h3>
        else {
           return <React.Fragment>
            <h3 className='stopsHeader' >{`${stops.length} ${stops.length == 1 ? `Пересадка`: `Пересадки` }`}</h3>
            <span className='stops'>{stops.join(' ')?stops.join(', '):''}</span>
           </React.Fragment>
        }
    }
  render() {
    const ticket = this.props.ticket;
    return (
        <div className="ticket">
            <div className='header'>
            <h1 className='price'>{`${ticket.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Р`}</h1>
            <img className="av-logo" src={`http://pics.avs.io/99/36/${ticket.carrier}.png`}/>
            </div>
            {Object.keys(ticket.segments).map(key => {
                return <div key={key+100} className="info">
                    <h3 className='route'>{ticket.segments[key].origin} - {ticket.segments[key].destination}</h3>
                    <span className='time'>
                        {`${this.getFlightTime(new Date(ticket.segments[key].date), 0)}`} - {`${this.getFlightTime(new Date(ticket.segments[key].date), ticket.segments[key].duration)}`}
                    </span>
                        <h3 className='headerDuration'>в пути</h3>
                        <span className='durationTime'>{this.getTime(ticket.segments[key].duration)}</span>
                        {this.getStops(ticket.segments[key].stops)}

                </div>
            })}
        </div>
    );
  }
};

export default Ticket;
