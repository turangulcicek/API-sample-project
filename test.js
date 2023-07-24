
// fetch :apiye http istek atmamızı sağlar
// get:veri almaya yarar
// post: sunucuya veri göndermeye yarar
// put:sunucudaki veriyi güncellemeye yarar
// delete:sunucudaki veriyi silmeye yarar
function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      // ya olumlu olur ve veri gelir
      .then((response) => response.json())
      .then((data) => renderUsers(data))
      // olumsuz olur ve hata mesajı gelir
      .catch((error) => console.log(error));
  }
  
  // fonksiyonu çağırıp isteği gerçekleştirme
  getUsers();
  
  function renderUsers(users) {
    users.forEach((user) => document.write(user.name + '<br>'));
  }

