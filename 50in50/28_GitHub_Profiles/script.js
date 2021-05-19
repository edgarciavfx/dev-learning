const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// getUser('thecodercoder'); // delete this when done!!!

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    console.log(data);
    createUserCard(data);
    getRepos(username);

  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard('No profile with that username.');
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=updated'); //?sort=created
    addReposToCard(data);

  } catch (err) {
    createErrorCard('Problem fetching repos');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);

    search.value = '';
  }
  
});

function createUserCard(userdata) {
  const cardHTML = `
  <div class="card">
    <div>
      <img src=${userdata.avatar_url} alt="${userdata.name ? userdata.name : userdata.login}" class="avatar">
    </div>

    <div class="user-info">
      <h2>${userdata.name ? userdata.name : userdata.login}</h2>
      <p>${userdata.bio ? userdata.bio : ''}</p>

      <ul>
        <li>${userdata.followers}<strong>Followers</strong></li>
        <li>${userdata.following}<strong>Following</strong></li>
        <li>${userdata.public_repos}<strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
  `;

  main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
  const cardHTML = `
  <div class="card error">
    <h1>${msg}</h1>
  </div>
  `;

  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos
  .slice(0, 10)
  .forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}