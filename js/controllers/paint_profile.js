function user(id) {
  fetch(`http://localhost:3001/api/users/${id}`)
    .then((resp) => resp.json())
    .then(function (data) {
      console.log(data);
      $('#pp-name').text(data.name);
      $('#pp-nickName').text(data.nickName);
      $('#pp-contactEmail').text(data.email);
      $('#pp-surname').text(data.surname);
      $('#pp-natalCountry').text(data.natalCountry.name);
      $('#pp-residentCountry').text(data.resCountry.name);
      $('#pp-image').attr('src', data.image);
      paintLanguesAndRoles(data.language, 'langues');
      paintLanguesAndRoles(data.role, 'role');
    });
}
function paintLanguesAndRoles(lan_rol, type) {
  console.log(type);
  console.log(lan_rol);
  if (lan_rol.length > 0) {
    lan_rol.forEach((ele) => {
      $(`#pp-${type}`).append(`<li>${ele.name}<li>`);
    });
  }
}
export { user };
