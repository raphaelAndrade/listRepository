//Create the function to fetch the list of repository

const listRepository = () => {
    const user = document.getElementById('userID').value;
    // const url = "https://api.github.com/users/VikiSevcikova/repos?"
    const url = `https://api.github.com/users/${user}/repos`;
    if(user === ""){
        alert("The input is required. Please insert a valid User Name")
    } else {
       fetch(url).then(resp => {
           const status = resp.status;
           if(status !== 200){
               console.log(`Ops! Something is wrong ${status}`)
           }
           document.getElementById("listRepoInfo").innerHTML=""
           resp.json().then(repository => {
            //    console.log(repository)

               repository.map(value => {
                   const td= document.createElement("tr")
                   const name = value.name;
                   const url = value.hooks_url;
                   const description = value.description;
                   document.getElementById("listRepoInfo").innerHTML+=`<td>${name}</td> <td> ${url}</td><td>${description}` 
                                  
               })
           })
       })
    }
}

// Add event click to the button
const button = document.getElementById('searchRepository');
button.addEventListener('click',(e)=> {
    e.preventDefault();
    listRepository();
})

console.log("hello")