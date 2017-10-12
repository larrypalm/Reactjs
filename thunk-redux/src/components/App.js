import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions.js';
import '../App.css';

class App extends Component {

  state = {
    movies: ""
  }

  componentDidMount(){
    this.props.actions.addMovies();
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state){
  return {
    movies: state.movies
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
