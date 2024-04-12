const submit = document.querySelector("form");
const password = document.querySelector("#password");
const confirms = document.querySelector("#confirm");
function doPasswordsMatch(){
    if (password.value == confirms.value){
        alert("registration successful")
        return true;
    }
    else{
        alert("password does not match")
        return false;
    }
}