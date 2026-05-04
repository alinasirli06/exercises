let btn = document.getElementById("btn")
let app = document.getElementById("app")
btn.addEventListener("click",()=>
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        let random = Math.floor(Math.random()*data.length)
        let user = data[random]
    app.innerHTML= `
    <h2>${user.name}</h2>
    <p>${user.email}</p>` 
}))