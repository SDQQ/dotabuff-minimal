import GetIcons from './get-icons.js';

const bigArr = new GetIcons(76201616).getLast10Id();
const getData = new GetIcons(76201616);

// getId(136446471); // Настин
// getId(76201616); //мой

const interval = setInterval(() => {
  if (bigArr.length >= 10) {
    toHtml(bigArr);
    clearInterval(interval);
  }
}, 100);

function toHtml(Arr) {
  Arr.forEach(item => {
    
    getData.getHeroIcon(item).then(res => div.querySelector('.item__hero-icon').style.backgroundImage = `url(${res})`);
    // getData.getKDA(item).then(res => div.querySelector('.item__kda').textContent = `Килов-${res.kills} Смертей-${res.deaths} Ассистов-${res.assists}`);
    getData.getKDA(item).then(res=> div.querySelectorAll('.table__score').forEach((item,i) => item.textContent = res[i]));
      //  
    getData.getItemIcon(item).then(res => div.querySelectorAll('.items').forEach((i, index) => i.style.backgroundImage = `url(${res[index].img})`));
    getData.getWinStatus(item).then(res => {
      if (res === 'Победа') {
        div.style.borderColor = 'Green';
        div.querySelector('.status__description').textContent = 'Win';
      }
    });
    let div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `<img href='../Abyssal_Blade_icon.png' class="item__hero-icon"></img> 
    <div class="item__hero-icon"></div>
    <div class="item__stats">
      <div class="item__kda">
      <table class="item__table">
            <tr>
              <th>Kill</th>
              <th>Death</th>
              <th>Assists</th>
            </tr>
            <tr>
              <td class="table__score">1</td>
              <td class="table__score">2</td>
              <td class="table__score">3</td>
            </tr>
          </table>
          </div>
      <div class="item__items">
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
      </div>
    </div>
    <div class="item__status">
      <p class="status__description" >Lose</p>
    </div>`;
    document.querySelector('.container').append(div);
  });
}