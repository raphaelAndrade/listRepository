//Create the function to fetch the list of repository

const listRepository = () => {
    const user = document.getElementById('userID').value;
    const url = `https://api.github.com/users/${user}/repos`;
    if (user === "") {
        alert("The input is required. Please insert a valid User Name")
    } else {
        fetch(url).then(resp => {
            const status = resp.status;
            if (status !== 200) {
                console.log(`Ops! Something is wrong ${status}`)
            }
            resp.json().then(repository => {
                console.log(repository);
                const repoListBodyElement = document.getElementsByClassName('listRepo')[0];
                repoListBodyElement.replaceChildren();
                let rowNumber = 1;
                repository.map(value => {
                    const name = value.name;
                    const url = value.html_url;
                    const language = value.language;
                    const wiki = value.has_wiki;
                    const forks = value.forks;

                    const repoRowElement = document.createElement('tr');

                    const repoRowNumberCell = document.createElement('th');
                    repoRowNumberCell.attributes['scope'] = 'row';
                    repoRowNumberCell.innerText = rowNumber++;
                    repoRowElement.appendChild(repoRowNumberCell);

                    const repoNameCell = document.createElement('td');
                    repoNameCell.innerText = name;
                    repoRowElement.appendChild(repoNameCell);

                    const repoUrlCell = document.createElement('td');
                    repoUrlCell.innerText = url;
                    repoRowElement.appendChild(repoUrlCell);

                    const repoLanguageCell = document.createElement('td');
                    repoLanguageCell.innerText = language;
                    repoRowElement.appendChild(repoLanguageCell);

                    const repoWikiCell = document.createElement('td');
                    repoWikiCell.innerHTML = wiki ? '&#10003' : '';
                    repoRowElement.appendChild(repoWikiCell);

                    const repoForksCell = document.createElement('td');
                    repoForksCell.innerText = forks;
                    repoRowElement.appendChild(repoForksCell);

                    repoListBodyElement.appendChild(repoRowElement);
                })
            })
        })
    }
}

//Add event click to the button
const button = document.getElementById('searchRepository');
button.addEventListener('click', (e) => {
    e.preventDefault();
    listRepository();
})