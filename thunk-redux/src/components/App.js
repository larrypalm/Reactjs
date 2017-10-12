import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/actions.js';
import '../App.css';

class App extends Component {

  state = {
    movies: "",
    user: ""
  }

  componentDidMount(){
    this.props.actions.addMovies();
  }

  add = () => {

    this.props.actions.addUser({
      name: "gustav",
      age: 25
    });
    this.setState({user: ""});
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.add}>Add user</button>
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
    movies: state.movies,
    user: state.user
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
