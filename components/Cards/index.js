// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

let cardsEntry = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( (response) => {
    //console.log(response.data)
    let keys = Object.keys(response.data.articles)
    keys.forEach( (element) => {
        console.log(response.data.articles[element])

        let arrays = response.data.articles[element]

        arrays.forEach( (e) => {
            cardsEntry.append(cardCreator(e))
        })
    })
})
.catch(err => {err})

function cardCreator(item){
    let cardDiv = document.createElement('div');
    let headlineDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    let authorSpan = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    img.src = `${item.authorPhoto}`
    headlineDiv.textContent = `${item.headline}`
    authorSpan.textContent = `By ${item.authorName}`

    cardDiv.append(headlineDiv);
    cardDiv.append(authorDiv);
    authorDiv.append(imgDiv);
    imgDiv.append(img);
    authorDiv.append(authorSpan);

    return cardDiv;

}