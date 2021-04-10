function get_current() {
  console.log("Traere al usuario logueado");
  $.getJSON("/current", function (data) {
    let link = 'http://127.0.0.1:8080/static/photos/'
    link += data['photo'];
    console.log(data['username']);
    console.log(data['photo']);
    console.log(link);
    let name = 'name';
    let username = '@username';
    username = username.replace('username', data['username']);
    name = name.replace('name', data['name']);
    document.getElementById('userPhoto').src = link;
    $('.user-name').append(name);
    $('.user-role').append(username);
  })
}


$("#close-sidebar").click(function () {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function () {
  $(".page-wrapper").addClass("toggled");
});