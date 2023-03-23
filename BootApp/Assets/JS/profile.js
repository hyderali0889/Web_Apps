let sign_in = document.querySelector('#sign_in')
let sign_up = document.querySelector('#sign_up')
let forgot = document.querySelector('#forgot') 
let forgot_pass = document.querySelector('#forgot_pass')
let new_user = document.querySelector('#new_user')
let already_user = document.querySelector('#already_user')

new_user.addEventListener('click', (e)=>{
    sign_up.classList.remove("d-none")
    sign_in.classList.add("d-none")
    e.preventDefault()
})
forgot.addEventListener('click', (e)=>{
    forgot_pass.classList.remove("d-none")
    sign_in.classList.add("d-none")
    e.preventDefault()
})

