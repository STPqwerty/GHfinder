// Экземпляр класса Github
const github = new Github;
// Экземпляр класса UI
const ui = new UI;

// Форма поиска
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  // Получаем введенный текст
  const userText = e.target.value;

  if(userText !== ''){
   // Формируем http запрос
   github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Выводим alert
        ui.showAlert('Пользователь не найден', 'alert alert-danger');
      } else {
        // Показываем профиль
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {

    ui.clearProfile();
  }
}); 