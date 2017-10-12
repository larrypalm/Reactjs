export function addMovies(){
  return function(dispatch){
    fetch('http://fend-api.herokuapp.com/movies?_limit=20')
      .then(response => response.json())
      .then(movies =>{
        dispatch({
            type: 'ADD_MOVIES',
            movies
          })
      })
  }

}

export function addUser(users){
  return {
    type: 'ADD_USER',
    users
  }
}
