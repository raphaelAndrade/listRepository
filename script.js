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
               
               for(i=0;i<repository.length;i++){
                console.log('ID:', repository[i].id);
                console.log('Repo:', repository[i].name);            
                console.log('URL:', repository[i].html_url);

                let repoList = document.getElementById('listRepo');
                let li = document.createElement('li');

                // Add Bootstrap list item class to each li
                li.classList.add('list-group-item')

                li.innerHTML = (`
                    <p><strong>ID:</strong> ${repository[i].id}</p>
                    <p><strong>Repo Name:</strong> ${repository[i].name}</p>
                    <p><strong>URL:</strong> <a href="${repository[i].html_url}">${repository[i].html_url}</a></p>
                `);
                
                // Append each li to the repoList
                repoList.appendChild(li);
               }
           })
       })
    }
}