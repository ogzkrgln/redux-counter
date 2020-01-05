import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {sayiArttir, sayiAzalt} from './action/index';

class DigerComponent extends Component {
  render() {
    return (
      <div>
        <h6>Counter componentinin <br></br> state'ini kullanan diğer component</h6>
        <h4>{this.props.sayi}</h4>
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        sayi:state.sayi,
    }
}



export default connect (mapStateToProps)(DigerComponent);