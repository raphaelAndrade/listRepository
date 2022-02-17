//Create the function to fetch the list of repository

const listRepository = () => {
    const user = document.getElementById('userID').value;
    if(user === ""){
        alert("The input is required. Please insert a valid User Name")
    } else {
        console.log(user);
        return user;
    }
}

//Add event click to the button
const button = document.getElementById('searchRepository');
button.addEventListener('click',(e)=> {
    e.preventDefault();
    listRepository();
})