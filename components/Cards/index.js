// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        const response = res.data.articles
        // console.log(response)
        arr = []
        // response.forEach(art => { arr.push(art) })vc
        // console.log(arr)
        // for (i in response) {
        //     arr.push(response[i])
        // }
        // console.log(arr)
        for (item in response) {
            arr.push(...response[item])
        }
        // console.log(arr)
        arr.forEach(article => cardsContainer.appendChild(createCard(article)))
    }).catch(error => { console.log('ERROR from Cards file ->> :', error) })

// console.log(response)

function createCard(props) {

    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const authorName = document.createElement('span')

    card.className = 'card'
    headline.className = 'headline'
    author.className = 'author'
    imgContainer.className = 'img-container'

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(image)
    author.appendChild(authorName)

    headline.textContent = props.headline
    image.src = props.authorPhoto
    authorName.textContent = `By: ${props.authorName}`

    return card
}

const cardsContainer = document.querySelector('.cards-container');