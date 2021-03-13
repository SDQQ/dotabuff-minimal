"use strict"
import GetData from './getData.js';
import heroes from './heroes.js';
import items from './items.js';

export default class GetIcons extends GetData {
  constructor(accId = {}, name = {}) {
    super(accId);
    this.name = name
  }
  getMatchTime(matchObj) {
    let a = {
      hour: Math.floor(matchObj.duration / 60 / 60 % 60),
      minutes: Math.floor(matchObj.duration / 60 % 60),
      seconds: Math.floor(matchObj.duration % 60)
    }
    if (a.seconds < 10) {
      a.seconds = '0' + a.seconds
    }
    if (a.minutes < 10) {
      a.minutes = '0' + a.minutes
    }
    a.hour ? a.hour = `${a.hour}:` : a.hour = ''
    return a
  }

  getAllHeroIcon(matchObj) {
    let radiant = []
    let dire = []
    let radiantStr = []
    let direStr = []
    matchObj.players.forEach(item => item.isRadiant === true ? radiant.push(item.hero_id) : dire.push(item.hero_id))
    radiant.forEach(item => {
      heroes.find(i => {
        if (item === i.id) {
          radiantStr.push(i.icon.slice(1))
        }
      })
    })
    dire.forEach(item => {
      heroes.find(i => {
        if (item === i.id) {
          direStr.push(i.icon.slice(1))
        }
      })
    })
    return [radiantStr, direStr]
  }

  getScore(matchObj) {
    return {
      radiant: matchObj.radiant_score,
      dire: matchObj.dire_score
    }
  }

  getPlayer(matchObj) {
    // const player = matchObj;
    // let promise = new Promise(res => {
    //   const setInter = setInterval(() => {
    //     if (player.players != undefined) {
    //       clearInterval(setInter);
    //       res(player.players.find(item => item.personaname === this.name));
    //     }
    //   }, 100);
    // });
    // return promise;
    const player = matchObj.players.find(item => item.personaname === this.name)
    return player
  }
  getHeroIcon(matchObj) {
    const player = this.getPlayer(matchObj)
    let result = heroes.find(item => item.id == player.hero_id)
    return result

    // let result = '';
    // let promise = this.getPlayer(matchObj);
    // await promise.then(res => heroes.find(item => item.id == res.hero_id)).
    // then(res => {
    //   result += res.icon;
    // });
    // return result;
  }

  getKDA(matchObj) {
    // let arr = [];
    // let promise = this.getPlayer(matchObj);
    // await promise.then(res => {
    //   arr.push(res.kills);
    //   arr.push(res.deaths);
    //   arr.push(res.assists);

    // });
    // return arr;

    const player = this.getPlayer(matchObj)
    return {
      kills: player.kills,
      deaths: player.deaths,
      assists: player.assists
    }
  }
  getItemIcon(matchObj) {
    // let result = [];
    // let newResult = [];
    // let promise = this.getPlayer(matchObj);
    // await promise.then(res => {
    //     result.push(res.item_0);
    //     result.push(res.item_1);
    //     result.push(res.item_2);
    //     result.push(res.item_3);
    //     result.push(res.item_4);
    //     result.push(res.item_5);
    //     result.push(res.item_neutral);
    //     return result;
    //   })
    //   .then(res => res.forEach(item => {
    //     newResult.push(items.find(i => i.id == item));
    //   }));
    // return newResult;
    const player = this.getPlayer(matchObj)
    let result = [];
    [player.item_0, player.item_1, player.item_2,
      player.item_3, player.item_4, player.item_5, player.item_neutral
    ].forEach(item => {
      result.push(items.find(i => i.id == item));
    })
    return result

  }

  getGameDate(matchObj) {

    let gameDate = new Date(matchObj.start_time * 1000)
    return gameDate = {
      day: gameDate.getDate(),
      month: gameDate.getMonth() + 1,
      year: gameDate.getFullYear(),
      hour: gameDate.getHours() < 10 ? '0' + gameDate.getHours() : gameDate.getHours(),
      minutes: gameDate.getMinutes() < 10 ? '0' + gameDate.getMinutes() : gameDate.getMinutes(),
    }

  }

  getWinStatus(matchObj) {
    // let radiantWin = true;
    // let isRadiant = true;
    // let winStatus = '';
    // let promise = new Promise(res => {
    //   const setInter = setInterval(() => {
    //     if (matchObj.radiant_win != undefined) {
    //       clearInterval(setInter);
    //       res(matchObj);
    //     }
    //   }, 100);
    // });
    // await promise.then(res => {
    //   radiantWin = res.radiant_win;
    //   return res;
    // }).
    // then(res => res.players.find(item => item.personaname === this.name)).
    // then(res => isRadiant = res.isRadiant);
    // radiantWin === isRadiant ? winStatus += 'Победа' : winStatus += 'Поражение';
    // return winStatus;

    let radiantWin = matchObj.radiant_win
    const player = this.getPlayer(matchObj)
    let isRadiant = player.isRadiant
    return radiantWin === isRadiant ? 'Win' : 'Lose'
  }
  getLastGameTime(matchObj) {
    let date = new Date(matchObj.last_match_time)
    return date = {
      day: date.getUTCDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    }
  }
}