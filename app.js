$(document).ready(function() {
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

  // var context = {
  //   title: "My New Post",
  //   body: "This is my first post!"
  // };
  //
  //
  // var html = template(context);
  // $('main').append(html);

  console.log('hello');
  $('button').click(getUsers)

  function getUsers(event) {
    event.preventDefault()

    $.get('https://pair-crud-api.herokuapp.com/users/')
      .then(function(results){
        console.log(results);

        var context = {
          title: results[0].email,
          body: "This is my first post!"
        };

        var html = template(context);
        $('main').append(html);

      })
}
})
