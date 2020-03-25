import React, {Component} from 'react';

class Ticket extends  Component{
  render() {
    console.log(this.props)
    return (
        <div className="ticket">
          <div className="header">
            <h1>13 400 Р</h1>
          </div>
          <div className="av-logo">
            <img src="http://pics.avs.io/99/36/AF.png"/>
          </div>
          <div className="info">
            <div>
              <h3>
                {`MOW`} - {`HTK`}
              </h3>
              <span>
            {`10:45`} - {`08:00`}
          </span>
            </div>
            <div>
              <h3>
                {`MOW`} - {`HTK`}
              </h3>
              <span>
            {`10:45`} - {`08:00`}
          </span>
            </div>
            <div>
              <h3>в пути</h3>
              <span>{`21ч 15м`}</span>
            </div>
            <div>
              <h3>в пути</h3>
              <span>{`21ч 15м`}</span>
            </div>
            <div>
              <h3>{`2 Пересадки`}</h3>
              <span>{`HKG, JNB`}</span>
            </div>
            <div>
              <h3>{`1 Пересадка`}</h3>
              <span>{`HKG`}</span>
            </div>
          </div>
        </div>
    );
  }
};

export default Ticket;
