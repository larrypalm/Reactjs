import firebase from '../firebase.js';

export function addMovies(){
  return function(dispatch){
    fetch('https://fend-api.herokuapp.com/movies?_limit=20')
      .then(response => response.json())
      .then(movies =>{
        dispatch({
            type: 'ADD_MOVIES',
            movies
          })
      })
      .catch(error => {
        dispatch({type: 'FETCH_ERROR', error: error.message})
      })
  }
}
//only send data to API
export function postMovie(movie) {
  return function(dispatch){
    fetch('https://fend-api.herokuapp.com/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({movie})
    })
    .then(response => response.json())
    .then(movie => dispatch(addMovies(movie)));
  }
}

export function addUser(users){
  return {
    type: 'ADD_USER',
    users
  }
}
