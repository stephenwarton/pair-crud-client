const USERS_URL = 'https://pair-crud-api.herokuapp.com/users';

$(appReady);

function appReady() {

  getUsers()
    .then(showUsers)

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
