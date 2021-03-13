"use strict"
export default class SecondaryInfoDmg {
  constructor(game, getData) {
    this.game = game
    this.getData = getData
  }



  render() {
   const player = this.game.players.find(item => item.personaname === this.getData.name)
    let statistic = document.createElement('div');
    statistic.classList.add('statistic-dmg-wrap')
    statistic.innerHTML = `
    <div class="statistic-dmg" title ="Net worth">
      <div class="statistic-dmg__img-wrap"><img src="./img/svg/networth.svg" alt="" class="statistic-dmg__img"></div>
      <div class="statistic-dmg__value">${player.gold_spent}</div>
    </div>
    <div class="statistic-dmg" title ="Creep kills">
      <div class="statistic-dmg__img-wrap"><img src="./img/svg/007-monster.svg" alt="" class="statistic-dmg__img"></div>
      <div class="statistic-dmg__value">${player.last_hits}</div>
    </div>
    <div class="statistic-dmg" title ="Denies">
      <div class="statistic-dmg__img-wrap"><img src="./img/svg/den.svg" alt="" class="statistic-dmg__img"></div>
      <div class="statistic-dmg__value">${player.denies}</div>
    </div>
    <div class="statistic-dmg" title ="Gold per minute">
      <div class="statistic-dmg__img-wrap"><img src="./img/svg/gpm.svg" alt="" class="statistic-dmg__img"></div>
      <div class="statistic-dmg__value">${player.gold_per_min}</div>
    </div>
    <div class="statistic-dmg" title ="Experience per minute">
      <div class="statistic-dmg__img-wrap"><img src="./img/svg/xp.svg" alt="" class="statistic-dmg__img"></div>
      <div class="statistic-dmg__value">${player.xp_per_min}</div>
    </div>
    <div class="statistic-dmg" title ="Total damage">
      <div class="statistic-dmg__img-wrap"><img src="./img/svg/damage.svg" alt="" class="statistic-dmg__img"></div>
      <div class="statistic-dmg__value">${player.hero_damage}</div>
    </div>
    <div class="statistic-dmg" title ="Total heal">
      <div class="statistic-dmg__img-wrap"><img src="./img/svg/heal.svg" alt="" class="statistic-dmg__img"></div>
      <div class="statistic-dmg__value">${player.hero_healing}</div>
    </div>
    <div class="statistic-dmg" title ="Total tower damage">
      <div class="statistic-dmg__img-wrap"><img src="./img/svg/tower.svg" alt="" class="statistic-dmg__img"></div>
      <div class="statistic-dmg__value">${player.tower_damage}</div>
    </div>`
    return statistic

  }
}