// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const top1 = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(data => {
        arr = data.data.topics
        arr.forEach(element => {
            top1.appendChild(newTopic(element))
        });

    })
    .catch(error => console.log('Error -->', error))


function newTopic(topics) {

    const tab = document.createElement('div')
    tab.classList.add('tab')
    tab.textContent = topics

    return tab

}