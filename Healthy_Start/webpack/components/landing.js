//Step 1: Create global variables to obtain DOM elements
var username = document.querySelector('#signUpUsername')
var email = document.querySelector('#signUpEmail')
var username = document.querySelector('#signUpPassword')
var api_token = sessionStorage.getItem('api_token');
var signup_path = '';
var saveSignUp = document.querySelector('#saveSignUp')

//Step 2: Create an event listener to fire off Ajax Post
saveSignup.addEventListener('click', fireAjaxPost)
console.log('We received a click...')

//Step 3: Create fetch to Post new User on saved signup
function fireAjaxPost() {
    console.log('The Ajax is compiling data to fire off...')
    var formData = {
        username: username.value,
        email: email.value,
        password: password.value,
    }
    console.log(formData)
    fetch(signup_path, {
        body:JSON.stringify({
            formData
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
    window.location.href = 'signup.html'
    console.log(response)
    })
}
