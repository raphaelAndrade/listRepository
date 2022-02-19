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
               alert(`Sorry, something went wrong, try again error:${status}`) // I added this line for to let to know the user why the app didn't give back any response in case the fetch falis
               console.log(`Ops! Something is wrong ${status}`)
           }
           resp.json().then(repository => {
               //console.log(repository)
               repository.map(value => {
                   const name = value.name;
                   const url = value.hooks_url;
                   const status = value.private;
                   console.log(name);
                   console.log(url);
                   const ul = document.getElementById("listRepoLinks");
                   ul.innerHTML += `<li><div class="url">Link:<a>href="${url}">${url}<a/></div><div class="name"><a> Name: ${name}</a></div><div><div class="status"><a>Private status: ${status}<a/><div></li>`
                   
                    
                  
                })
            
            
               
               /*
                0) Clone the repository and create your own branch before start to work
                1) Print the name of the repository
                2) Print the link of the repository
                3) One or two more information that you believe its good for your application
                4) Create a pull request when you finish your work
               */
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


