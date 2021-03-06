const USERS_URL = 'https://pair-crud-api.herokuapp.com/users';

$(appReady);

function appReady() {

  getUsers()
    .then(showUsers)
    .then(function(){
    $('form').submit(function(event) {
      event.preventDefault();

      var userID = $('.selector').val();
      var beerName = $('.beerName').val();
      var beerType = $('.beerType').val();
      var beerABV = $('.beerABV').val();
      var beerImage = $('.beerImage').val();
      var postURL = USERS_URL + '/' + userID + '/beers'

      var info = {
        "name": beerName,
        "type": beerType,
        "abv": beerABV,
        "url": beerImage,
        "user_id": userID
      };

      $.post(postURL, info)
        .then(function(result) {
          window.location.replace("http://localhost:3000/index.html");
        })
    })
  });
}

function getUsers() {
  return $.get(USERS_URL);
}

function showUsers(users) {
  const source = $("#entry-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    users
  });
  $('main').append(html);
}
