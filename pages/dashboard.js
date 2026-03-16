let generateBtn = document.querySelector('.generate-btn')
let clearBtn = document.querySelector('.clear-btn')
let divResult = document.querySelector('.result')
let logoutBtn = document.querySelector('.logout-btn')

clearBtn.addEventListener('click', () => {
  divResult.innerText = ''
})

generateBtn.addEventListener('click', () => {
  fetch('https://instagram-express-app.vercel.app/api/auth/zuku',{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(response => response.json())
  .then(data => {
    if(data.success == true){
      divResult.innerText = data.data.message
    }
    else{
      alert(data.message)
    }
  })
  .catch(error => alert(error))
})

logoutBtn.addEventListener('click', () => {
  fetch('https://instagram-express-app.vercel.app/api/auth/logout',{
    method: 'DELETE',
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(response => response.json())
  .then(info => {
    if(info.success == true){
      localStorage.setItem('token', info.data.token)
      window.location.href = 'login.html'
    }
    alert(info.message)
  })
  .catch(error => alert(error))
})

