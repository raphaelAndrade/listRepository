//Add event click to the button
const button = document.getElementById('searchRepository');
button.addEventListener('click', (e) => {
    e.preventDefault();
    listRepository();
})

//Create the function to fetch the list of repository
const listRepository = () => {
    const user = document.getElementById('userID').value;

    const url = `https://api.github.com/users/${user}/repos`;

    if (!user) {
        alert("The input is required. Please insert a valid User Name");
        return;
    }

    fetch(url).then(resp => {
        const status = resp.status;

        if (status !== 200) console.log(`Ops! Something is wrong ${status}`);

        const repoList = document.getElementsByClassName('listRepo')[0];

        resp.json().then(repository => {
            repository.map(value => {

                const li = document.createElement('li');
                li.classList.add('list-group-item');

                li.innerHTML = `
                    <h1>
                        <a href="${value.url}" target="_blank">${value.name}</a>
                    </h1>
                    <p> <b>Description:</b> ${value.description}</p>
                    <p> <b>ID:</b> ${value.id}</p>
                `;

                repoList.appendChild(li);
            })
        })
    })

}