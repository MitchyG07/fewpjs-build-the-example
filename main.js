// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
addEventListeners()
let hidden = document.querySelector('#modal')
hidden.style.display = 'none'
//fetch fake server 
function addEventListeners() {
  likeButtons = document.querySelectorAll('.like-glyph')
  likeButtons.forEach(like => like.addEventListener('click', ServerCall))
}

function ServerCall(e) {
  mimicServerCall()
  .then(heart => {
    heart = e.target
    if (heart.classList[0] === "activate_heart") {
      heart.innerHTML = EMPTY_HEART 
    }
    else {
      heart.innerHTML = FULL_HEART
      heart.classList = "activate_heart"
    }
  })
  .catch(() => {
    hidden.style.display = 'block'
    setTimeout(ifError, 5000)
  })
}

function ifError () {
  alert("Baby come back")
  hidden.style.display = 'none'
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
