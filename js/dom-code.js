const projectsTemplate = document.querySelector(".projectsTemplate").innerHTML;
const template = Handlebars.compile(projectsTemplate);
const frontEndProjectsElement = document.querySelector(".fe-projects");
async function getRepos(){
    let all = await fetch('https://api.github.com/users/michaelcdavids/repos');
    let result = all.json();
    return result;
}
window.addEventListener('load', function () {
  getRepos()
    .then(results => {
        frontEndProjectsElement.innerHTML = template({
        repo: results
      });
    });
});