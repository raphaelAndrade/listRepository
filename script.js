//Create the function to fetch the list of repository

const listRepository = () => {
    const user = document.getElementById('userID').value;
    const url = `https://api.github.com/users/${user}/repos`;
    if(user === ""){
        alert("The input is required. Please insert a valid User Name")
    } else {
       fetch(url).then(resp => {
           const status = resp.status;
           if(status !== 200){
               console.log(`Ops! Something is wrong ${status}`)
           }
           resp.json().then(repository => {
               console.log(repository)
               repository.map(value => {
                    const name = value.name;
                    const url = value.hooks_url;

                    //Test to check the values
                    console.log('ID:', value.id);
                    console.log('Repo:', value.name);            
                    console.log('URL:', value.html_url);

                    let repoList = document.getElementById('listRepo');
                    let li = document.createElement('li');

                    // Add Bootstrap list item class to each li
                    li.classList.add('list-group-item')

                    li.innerHTML = (`
                        <p><strong>ID:</strong> ${value.id}</p>
                        <p><strong>Repo Name:</strong> ${value.name}</p>
                        <p><strong>URL:</strong> <a href="${value.html_url}">${value.html_url}</a></p>
                    `);
                    
                    // Append each li to the repoList
                    repoList.appendChild(li);
               })
           })
       })
    }
}

//Add event click to the button
const button = document.getElementById('searchRepository');
button.addEventListener('click',(e)=> {
    e.preventDefault();
    listRepository();
})