export function addMovies(movies){
  return {
    type: 'ADD_MOVIE',
    movies
  }
}

export function addUser(users){
  return {
    type: 'ADD_USER',
    users
  }
}
