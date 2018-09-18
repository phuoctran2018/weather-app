import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         term:''
      }
      this.onInputChange = this.onInputChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event) {
      this.setState({term: event.target.value});
    }
    onFormSubmit(event) {
      event.preventDefault();
      this.props.fetchWeather(this.state.term);
      this.setState({term:''});
    }
    
  render() {
    return (
      <form 
      onSubmit = {this.onFormSubmit}
      action="" 
      className="input-group">
        <input 
        placeholder='nhap thanh pho'
        className="form-control"
        value = {this.state.term}
        onChange = {this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-success">Sub</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToPros(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToPros)(SearchBar);