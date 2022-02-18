/*
    0) Clone the repository and create your own branch before start to work ✅
    1) Print the name of the repository ✅
    2) Print the link of the repository ✅
    3) One or two more information that you believe its good for your application ✅
    4) Create a pull request when you finish your work ✅
*/

//Create the function to fetch the list of repository
const listRepository = () => {
    const user = document.getElementById('userID').value;
    const url = `https://api.github.com/users/${user}/repos`;
    if (user === "") {
        alert("The input is required. Please insert a valid User Name");
        return;
    }
    fetch(url).then(resp => {
        const status = resp.status;
        if (status !== 200) {
            console.log(`Ops! Something is wrong ${status}`)
        }

        let repoList = document.getElementsByClassName('listRepo')[0];

        resp.json().then(repository => {
            repository.map(value => {
                const {
                    name,
                    html_url: url,
                    updated_at,
                    language
                } = value;

                let li = document.createElement('li');
                li.classList.add('list-group-item');

                li.innerHTML = (`
                    <h2><a href="${url}" target="_blank">${name}</a></h2>
                    <p>Updated ${formatDaysAgo(new Date(updated_at))}</p>
                    ${language ? `<p><strong>Language:</strong> ${language}</p>` : ''}
                `);

                repoList.appendChild(li);
            })
        })
    })
}

//Add event click to the button
const button = document.getElementById('searchRepository');
button.addEventListener('click', (e) => {
    e.preventDefault();
    listRepository();
})

const formatDaysAgo = (value) => {
    const date = new Date(value);
    const deltaDays = (date.getTime() - Date.now()) / (1000 * 3600 * 24);
    const formatter = new Intl.RelativeTimeFormat('en-US');
    return formatter.format(Math.round(deltaDays), 'days');
}