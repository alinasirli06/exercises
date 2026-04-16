let btn = document.getElementById("btn")
let app = document.getElementById("app")
btn.addEventListener("click",() =>
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
let html = ""
app.innerHTML = data.map(user => {
    return `
    <p>${user.phone}</p>
    <p>${user.address.geo.lng}</p>
    <p>${user.company.bs}</p>`
})}));