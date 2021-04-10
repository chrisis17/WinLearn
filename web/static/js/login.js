function login() {
  var username = $('#username').val();
  var password = $('#password').val();
  var credentials = { 'username': username, 'password': password };
  $.post({
    url: '/authenticate',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      window.location.href = "http://127.0.0.1:8080/welcome.html";
    },
    data: JSON.stringify(credentials)
  });
}