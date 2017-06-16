$(document).ready(function() {
  console.log('hello');
  $('button').click(getUsers)

  function getUsers(event) {
    event.preventDefault()

    $.get('https://pair-crud-api.herokuapp.com/users/')
      .then(function(results){
        console.log(results);
      })
}
})
