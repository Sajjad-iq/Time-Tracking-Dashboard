var timeframe = 'daily'; //default value
var container = document.querySelector(".info-grid-continer")


let child = document.querySelector(".grid")
child.remove();

async function getData() {
  await fetch('./data.json')
    .then(resp => resp.json())
    .then(jsonData => {
      jsonData.forEach(element => {
        container.insertAdjacentHTML('beforeend',
          createRegularCard(element));
      });
    })
}



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
            <p>${title}</p>
            <span>...</span>
          </div>
          <h2 >${current}</h2>
          <p class="more-info">${timeframeMsg[timeframe]} - ${previous}hrs</p>
        </div>
      </div>
    `
}


getData()