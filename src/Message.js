import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {sendNumber} from './actions/actions-type'
import { connect } from 'react-redux';

class Message extends Component {


  render(){

    return (
        <React.Fragment> {this.props.values} </React.Fragment>
    );

  }

  
}

const mapStateToProps = state => {return {values : state.values, score : state.score}}

const mapDispatchToProps = {sendNumber}

export default connect(mapStateToProps,mapDispatchToProps)(Message)
