"use strict"
import {
  nameing
} from './helper'

export default class SecondaryInfo {
  constructor(game, getData) {
    this.game = game
    this.getData = getData
  }
  render() {
    const time = this.getData.getMatchTime(this.game)
    const score = this.getData.getScore(this.game)
    const heroes = this.getData.getAllHeroIcon(this.game)

    let statistic = document.createElement('div');
    statistic.classList.add('statistic-wrap', 'hide')
    statistic.innerHTML = `
    <div class="item__more-statistic-wrap">
      <div class="item__radiant-heroes">
      <picture >
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[0][0].slice(1,-3)}webp">
          <img src="${heroes[0][0]}" alt="${nameing(heroes[0][0])}"title="${nameing(heroes[0][0])}" loading="lazy" class="hero-img">
      </picture>
      <picture>
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[0][1].slice(1,-3)}webp">
          <img src="${heroes[0][1]}" alt="${nameing(heroes[0][1])}"title="${nameing(heroes[0][1])}" loading="lazy" class="hero-img">
      </picture>
      <picture >
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[0][2].slice(1,-3)}webp">
          <img src="${heroes[0][2]}" alt="${nameing(heroes[0][2])}"title="${nameing(heroes[0][2])}" loading="lazy" class="hero-img">
      </picture>
      <picture>
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[0][3].slice(1,-3)}webp">
          <img src="${heroes[0][3]}" alt="${nameing(heroes[0][3])}"title="${nameing(heroes[0][3])}" loading="lazy" class="hero-img">
      </picture>
      <picture >
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[0][4].slice(1,-3)}webp">
          <img src="${heroes[0][4]}" alt="${nameing(heroes[0][4])}"title="${nameing(heroes[0][4])}" loading="lazy" class="hero-img">
      </picture>
      </div>
      <div class="item__score-time">
        <div class="game-time"title="Game time">${time.hour}${time.minutes}:${time.seconds}</div>
        <div class="game-score" title="Game score">${score.radiant}:${score.dire}</div>
      </div>
      <div class="item__dire-heroes">
      <picture >
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[1][0].slice(1,-3)}webp">
          <img src="${heroes[1][0]}" alt="${nameing(heroes[1][0])}"title="${nameing(heroes[1][0])}" loading="lazy" class="hero-img">
      </picture>
      <picture >
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[1][1].slice(1,-3)}webp">
          <img src="${heroes[1][1]}" alt="${nameing(heroes[1][1])}"title="${nameing(heroes[1][1])}" loading="lazy" class="hero-img">
      </picture>
      <picture >
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[1][2].slice(1,-3)}webp">
          <img src="${heroes[1][2]}" alt="${nameing(heroes[1][2])}"title="${nameing(heroes[1][2])}" loading="lazy" class="hero-img">
      </picture>
      <picture >
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[1][3].slice(1,-3)}webp">
          <img src="${heroes[1][3]}" alt="${nameing(heroes[1][3])}"title="${nameing(heroes[1][3])}" loading="lazy" class="hero-img">
      </picture>
      <picture >
      <div class="load-circle"></div>
          <source  type="image/webp" srcset="webp-img${heroes[1][4].slice(1,-3)}webp">
          <img src="${heroes[1][4]}" alt="${nameing(heroes[1][4])}"title="${nameing(heroes[1][4])}" loading="lazy" class="hero-img">
      </picture>
      </div>
    </div>
`
    return statistic
  }
}

