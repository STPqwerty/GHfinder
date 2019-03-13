class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Выводим профиль в UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Посмотреть профиль</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Репозитории пользователя: ${user.public_repos}</span>
            <span class="badge badge-secondary">Gists пользователя: ${user.public_gists}</span>
            <span class="badge badge-success">Подписчики: ${user.followers}</span>
            <span class="badge badge-info">Подписан: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Компания: ${user.company}</li>
              <li class="list-group-item">Сайт/блог: ${user.blog}</li>
              <li class="list-group-item">Местность: ${user.location}</li>
              <li class="list-group-item">Зарегистрирован: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">5 последних репозиториев</h3>
      <div id="repos"></div>
    `;
  }

  // Вывод репозиториев пользователя
  showRepos(repos) {
    let output = '';

    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Звезд: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Просмотров: ${repo.watchers_count}</span>
            <span class="badge badge-success">Вилок: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

  // Вывод сообщения alert
  showAlert(message, className) {

    this.clearAlert();

    const div  =  document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));

    const container =  document.querySelector('.searchContainer');

    const search = document.querySelector('.search');
    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Очищаем страницу от alert-сообщений
  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert){
      currentAlert.remove();
    }
  }

  // Очищаем страницу
  clearProfile() {
    this.profile.innerHTML = '';
  }
}