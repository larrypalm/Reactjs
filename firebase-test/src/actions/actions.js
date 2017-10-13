import firebase from '../firebase.js';

export function addMovies(movie){
  return function(dispatch){
    firebase.database().ref("movies").push(movie)
      .then(addedMovie => {
        const movieKey = Object.assign({}, movie, {key: addedMovie.key} );
        dispatch({
          type: "ADD_MOVIES",
          payload: movieKey
        })
      }) 
      .catch(error => {
        dispatch({type: 'FETCH_ERROR', error: error.message})
      })
  }
  // return function(dispatch){
  //   fetch('https://fend-api.herokuapp.com/movies?_limit=20')
  //     .then(response => response.json())
  //     .then(movies =>{
  //       dispatch({
  //           type: 'ADD_MOVIES',
  //           movies
  //         })
  //     })
  //     .catch(error => {
  //       dispatch({type: 'FETCH_ERROR', error: error.message})
  //     })
  // }
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
      body: JSON.stringify(movie)
    })
    .then(response => response.json())
    .then(movie => dispatch(addMovies(movie)))
    .catch(error => dispatch(error));
  }
}

export function addUser(users){
  return {
    type: 'ADD_USER',
    users
  }
}
