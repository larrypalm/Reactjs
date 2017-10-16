import firebase from '../firebase.js';

export function addMovies(movie){
  return function(dispatch){
    firebase.database().ref("movies").push(movie)
  }
}

export function fetchMovies() {
  return function(dispatch){
    firebase.database().ref("movies")
      .on("value", snapshot => {
        let tempArray = []
        snapshot.forEach(child => {
          tempArray.push(Object.assign({}, child.val(), {key: child.key}) );

        })
        dispatch({type: "FETCH_MOVIES", movies: tempArray});
      })
  }
}


export function addUser(users){
  return {
    type: 'ADD_USER',
    users
  }
}
