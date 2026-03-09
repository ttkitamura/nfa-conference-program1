const PASSWORD = "nfa2026";

function checkPassword() {

const input = document.getElementById("password").value;

if(input === PASSWORD){
document.getElementById("login").style.display="none";
document.getElementById("content").style.display="block";
loadProgram();
}
else{
alert("Wrong password");
}

}