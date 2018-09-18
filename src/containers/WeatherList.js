import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;
    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temp} color='orange' unit='K' />
        </td>
        <td>
          <Chart data={press} color='blue'unit='hPa' />
        </td>
        <td>
          <Chart data={humid} color='violet' unit='%'/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp</th>
            <th>Press</th>
            <th>Humid</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}
function mapStatetoProps({weather}) {
  return {weather}
}
export default connect(mapStatetoProps)(WeatherList);
