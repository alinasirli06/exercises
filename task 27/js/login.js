let eye = document.getElementById("eye")
let eyeSl = document.getElementById("eye-slash")
let password = document.getElementById("password")
let form = document.getElementById("form")
let email = document.getElementById("email")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    if(emailValue && passwordValue){
        fetch("http://localhost:3000/users")
        .then(res=>res.json())
        .then(data=>{
            let founded = data.find(e=>e.emailValue==emailValue && e.passwordValue==passwordValue)
            if(founded){
                alert("Success")
            }
            else{
                alert("Wrong email or password")
            }
        }
        )
    }
    else{
        alert("Enter the datas completely")
    }
    
})

eye.addEventListener("click",()=>{
    eye.style.display = "none"
    eyeSl.style.display = "inline"
    password.type = "text"
})
eyeSl.addEventListener("click",()=>{
    eye.style.display = "inline"
    eyeSl.style.display = "none"
    password.type = "password"
})
