const USER_URL = 'https://pair-crud-api.herokuapp.com/users';

$(appReady);

function appReady() {
let id = getID();
  getUser(id)
    .then(showUser);
  getUserResources(id).
    then(showUserResources);

}

function getID(){
  let currentURL = window.location.href;
  let charArray = currentURL.split('');
  let index = charArray.indexOf('=') + 1;
  let id = currentURL.substring(index);
  return id;
}

function getUser(id) {
  return $.get(USER_URL+'/'+id);
}

function getUserResources(id) {
  return $.get(USER_URL+'/'+id+'/beers');
}

function showUser(user) {
  const source = $("#entry-template").html();
  const template = Handlebars.compile(source);
  const html = template({
    user
  });
  $('main').append(html);

}

function showUserResources(userResource) {
  const source = $("#entry-template2").html();
  const template = Handlebars.compile(source);
  const html = template({
    userResource
  });
  $('main').append(html);

}
