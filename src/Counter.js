import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {sayiArttir, sayiAzalt} from './action/index';

class Counter extends Component {
  render() {
    return (
      <div>
        
        <h3>Counter</h3>
        <h4>{this.props.sayi}</h4>
        <button onClick={this.props.handleIncrease}> Arttır </button>
        <button onClick={this.props.handleDecrease}> Azalt </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        sayi:state.sayi,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleIncrease: () => dispatch(sayiArttir()),
        handleDecrease: () => dispatch(sayiAzalt())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Counter);