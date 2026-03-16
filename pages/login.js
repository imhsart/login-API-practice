let form = document.querySelector('.login-form')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')

form.addEventListener('submit', (e) =>{
  e.preventDefault()
  let token = localStorage.getItem('token')

  fetch('https://instagram-express-app.vercel.app/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      'Authorization': token
    },
    body:JSON.stringify({
      "email": emailInput.value,
      "password": passwordInput.value
    })
  })
  .then(response => response.json())
  .then(info => {
    alert(info.message)
    if(info.success == true){
      localStorage.setItem('token', info.data.token)
      window.location.href = 'dashboard.html'
    }
  })
  .catch(error => alert(error))

  emailInput.value = ''
  passwordInput.value = ''
})