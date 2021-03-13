"use strict"
export default class MainItem {
  constructor(game, getData) {
    this.game = game
    this.getData = getData
  }
  render() {
    
    let div = document.createElement('div');
    const {icon} = this.getData.getHeroIcon(this.game)
    const itemIcons = this.getData.getItemIcon(this.game)
    const winLose = this.getData.getWinStatus(this.game)
    // const kda = this.getData.getKDA(this.game)
    const {kills,deaths,assists} = this.getData.getKDA(this.game)
    const {day,month,year,hour,minutes} = this.getData.getGameDate(this.game)

    winLose === 'Win' ? div.style.borderColor = 'Green' : div.style.borderColor = 'Red'
    div.classList.add('item');
    div.innerHTML = ` 
    <div class="item__hero-icon">
      <picture class="item__picture">
      <div class="load-circle"></div>
        <source type="image/webp" srcset="webp-img${icon.slice(2,-3)}webp">
        <img src="${icon.slice(1)}" alt="">
      </picture>
    </div>
    <div class="item__stats">
      <div class="item__kda">
      <table class="item__table">
            <tr>
              <th class="game-date">Game date</th>
              <th>Kill</th>
              <th>Death</th>
              <th>Assists</th>
            </tr>
            <tr>
              <td class="table__score"><span class="date">${day}-${month}-${year}</span> <span class="time">${hour}:${minutes}</span> </td>
              <td class="table__score">${kills}</td>
              <td class="table__score">${deaths}</td>
              <td class="table__score">${assists}</td>
            </tr>
          </table>
          </div>
      <div class="item__items">
        <div class="items">
        <div class="load-circle"></div>
          <picture class="items-picture">
            <source type="image/webp" srcset="webp-img${itemIcons[0].img.slice(2,-3)}webp">
            <img src="${itemIcons[0].img.slice(1)}" alt="">
          </picture>
        </div>
        <div class="items">
          <div class="load-circle"></div>
          <picture class="items-picture">
            <source type="image/webp" srcset="webp-img${itemIcons[1].img.slice(2,-3)}webp">
            <img src="${itemIcons[1].img.slice(1)}" alt="">
          </picture>
        </div>
        <div class="items">
        <div class="load-circle"></div>
          <picture class="items-picture">
            <source type="image/webp" srcset="webp-img${itemIcons[2].img.slice(2,-3)}webp">
            <img src="${itemIcons[2].img.slice(1)}" alt="">
          </picture>
        </div>
        <div class="items">
        <div class="load-circle"></div>
          <picture class="items-picture">
            <source type="image/webp" srcset="webp-img${itemIcons[3].img.slice(2,-3)}webp">
            <img src="${itemIcons[3].img.slice(1)}" alt="">
          </picture>
        </div>
        <div class="items">
        <div class="load-circle"></div>
          <picture class="items-picture">
            <source type="image/webp" srcset="webp-img${itemIcons[4].img.slice(2,-3)}webp">
            <img src="${itemIcons[4].img.slice(1)}" alt="">
          </picture>
        </div>
        <div class="items">
        <div class="load-circle"></div>
          <picture class="items-picture">
            <source type="image/webp" srcset="webp-img${itemIcons[5].img.slice(2,-3)}webp">
            <img src="${itemIcons[5].img.slice(1)}" alt="">
          </picture>
        </div>
        <div class="items">
        <div class="load-circle"></div>
          <picture class="items-picture">
            <source type="image/webp" srcset="webp-img${itemIcons[6].img.slice(2,-3)}webp">
            <img src="${itemIcons[6].img.slice(1)}" alt="">
          </picture>
        </div>
      </div>
    </div>
    <div class="item__status">
      <p class="status__description">${winLose}</p>
    </div>`
    return div
  }
}