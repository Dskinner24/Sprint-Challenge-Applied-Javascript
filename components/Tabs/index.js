// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

let tabEntry = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( (response) => {
    //console.log(response.data)
    let tabTitles = response.data.topics;
    tabTitles.forEach( (e) => {
        tabEntry.append(topicsCreator(e))
    })
})
.catch(err => {err})

function topicsCreator(element) {
    const tab = document.createElement('div');
    
    tab.classList.add('tab');

    tab.textContent = `${element}`;

    return tab;
}