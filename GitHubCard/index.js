import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
function lorem (param) {
  axios
  .get(param)
  .then(response => {
    const personInfo = response.data
    const cards = document.querySelector('.cards')
    cards.appendChild(idCardMaker(personInfo))
    const personFollowers = `${param}/followers`
    axios
    .get(personFollowers)
    .then(response => {
      const followerInfo = response.data
      followerInfo.forEach(element =>{
        cards.appendChild(idCardMaker(element))
      })
    })
  })
  .catch(error => { 
    console.log(error)
  }) 
}


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  'jonivander',
  'avawing',
  'OrlandoDavila',
  'danielantonio',
  'sami-alaloosi',
  'emcleary',
];

const newArray = followersArray.map(object => {
  return `https://api.github.com/users/${object}`
})

newArray.forEach(element =>{
  lorem(element)
})



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function idCardMaker (person){
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const gitAddress = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(gitAddress)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  card.className = 'card'
  cardInfo.className = 'card-info'
  name.className = 'name'
  userName.className = 'username'
  gitAddress.setAttribute('href', person.html_url)

  image.src = person.avatar_url
  name.textContent = person.name
  userName.textContent = person.login
  location.textContent = person.location
  gitAddress.textContent = person.html_url
  profile.textContent = `Profile:`
  followers.textContent = `Followers: ${person.followers}`
  following.textContent = `Following: ${person.following}`
  bio.textContent = `Bio: ${person.bio}`
  
console.log(card)
console.log(gitAddress)
return card
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
