let timeframe = 'weekly'; //default value
var container = document.querySelector(".info-grid-continer")
let regularCards; //place holder for all cards (work, play, study, etc)

let data = {};

fetch('./data.json')
  .then(resp => resp.json())
  .then(jsonData => {
    jsonData.forEach(element => {
      container.insertAdjacentHTML('beforeend',
        createRegularCard(element));
    });
    //Convert array to dict
    jsonData.forEach(element => {
      data[element.title] = element.timeframes;
    });

    //I want to have reference to created cards
    regularCards = document.querySelectorAll('.grid');
    //console.log(regularCards);
  })

function createRegularCard(element) {
  let title = element['title'];
  let current = element['timeframes'][timeframe]['current'];
  let previous = element['timeframes'][timeframe]['previous'];

  const timeframeMsg = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
  };

  return `
      <div class="grid ${title.toLowerCase().replace(/\s/g, '')}">
        <div class="inner-div">
          <div class="header">
            <p class="title">${title}</p>
            <span>...</span>
          </div>
          <h2 class = "hours" >${current}hrs</h2>
          <p class="more-info">${timeframeMsg[timeframe]} - ${previous}hrs</p>
        </div>
      </div>
    `


}





const menu = document.querySelectorAll('.menu-link');
menu.forEach(element => {
  element.addEventListener('click', menuOnClick);
});

function menuOnClick(event) {
  //console.log('click', event.target.innerText.toLowerCase());
  menu.forEach(element => {
    element.classList.remove('menu-active');
  });
  event.target.classList.add('menu-active');
  timeframe = event.target.innerText.toLowerCase();

  updateCards(timeframe);
}

function updateCards(timeframe) {
  regularCards.forEach(card => {
    updateCard(card, timeframe);
  });
}

function updateCard(card, timeframe) {
  const title = card.querySelector('.title').innerText;
  const current = data[title][timeframe]['current'];
  const previous = data[title][timeframe]['previous'];

  const timeframeMsg = {
    'daily': 'Yesterday',
    'weekly': 'Last Week',
    'monthly': 'Last Month'
  };

  const hoursElement = card.querySelector('.hours');
  hoursElement.innerText = `${current}hrs`;
  const msgElement = card.querySelector('.more-info');
  msgElement.innerText = `${timeframeMsg[timeframe]} - ${previous}hrs`;
}











