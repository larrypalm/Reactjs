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
      name: this.state.user,
      age: 25
    });
    this.setState({user: ""});

  }
  //function to fetch data from <input/>
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.onChange} name="user" value={this.state.user}/>
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
