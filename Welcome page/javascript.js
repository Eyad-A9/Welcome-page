console.log(`The next Bug Hunter`);
document.getElementById("2406246025").textContent = "Welcome";
let x = window.prompt(`Enter Your Job Title`);
console.log(x)

document.getElementById("submit").onclick = function() {
    let username = document.getElementById("name").value;
    console.log(username)
    document.getElementById("2406246025").textContent = `Welcome , ${username}`;
}