let form = document.querySelector('.signup-form')
let nameInput = document.querySelector('#name')
let emailInput = document.querySelector('#email')
let passwordInput = document.querySelector('#password')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  fetch('https://instagram-express-app.vercel.app/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": nameInput.value,
      "email": emailInput.value,
      "password": passwordInput.value
    })
  })
  .then(response => response.json())
  .then(info => {
    if(info.success == true){
      localStorage.setItem('token', info.data.token)
    }
    alert(info.message)
    window.location.href = 'dashboard.html'
  })
  .catch(error => {
    alert(error)
  })

  nameInput.value = ''
  emailInput.value = ''
  passwordInput.value = ''
})