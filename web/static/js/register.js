function register() {
  var name = $('#name').val();
  var email = $('#email').val();
  var username = $('#username').val();
  var password = $('#password').val();
  console.log(name, email, username, password);
  var credentials = {
    'name': name,
    'email': email,
    'username': username,
    'password': password,
    'photo': 'user.jpg'
  }
  $.post({
    url: '/register',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      window.location.href = "http://127.0.0.1:8080/welcome.html";
    },
    data: JSON.stringify(credentials)
  });
}