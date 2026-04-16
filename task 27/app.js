let eye = document.getElementById("eye")
let eyeSl = document.getElementById("eye-slash")
let password = document.getElementById("password")
let form = document.getElementById("form")
let name = document.getElementById("name")
let email = document.getElementById("email")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let nameValue = name.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    if(nameValue && emailValue && passwordValue){
        fetch("http://localhost:3000/users")
        .then(res=>res.json())
        .then(data=>{
            let founded = data.find(e=>e.emailValue==emailValue)
            if(founded){
                alert("Email already exists")
            }
            else{
                fetch("http://localhost:3000/users",{
                    method:"POST",
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify({nameValue,emailValue,passwordValue})
                })
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
