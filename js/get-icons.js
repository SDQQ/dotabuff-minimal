import GetData from './getData.js';
import heroes from './heroes.js';
import items from './items.js';

const rin = 'Rintintin';
const fime = 'Fime';
const setName = 'Rintintin';

export default class GetIcons extends GetData {
  constructor(accId) {
    super(accId);
  }

  getPlayer(matchObj) {
    const player = matchObj;
    let promise = new Promise(res => {
      const setInter = setInterval(() => {
        if (player.players != undefined) {
          clearInterval(setInter);
          res(player.players.find(item => item.personaname === setName));
        }
      }, 100);
    });
    return promise;
  }
  async getHeroIcon(matchObj) {
    let result = '';
    let promise = this.getPlayer(matchObj);
    await promise.then(res => heroes.find(item => item.id == res.hero_id)).
    then(res => {
      result += res.icon;
    });
    return result;
  }

  async getKDA(matchObj) {
    let arr = [];
    let promise = this.getPlayer(matchObj);
    await promise.then(res => {
      arr.push(res.kills);
      arr.push(res.deaths);
      arr.push(res.assists);
      
    });
    return arr;
  }
  async getItemIcon(matchObj) {
    let result = [];
    let newResult = [];
    let promise = this.getPlayer(matchObj);
    await promise.then(res => {
        result.push(res.item_0);
        result.push(res.item_1);
        result.push(res.item_2);
        result.push(res.item_3);
        result.push(res.item_4);
        result.push(res.item_5);
        result.push(res.item_neutral);
        return result;
      })
      .then(res => res.forEach(item => {
        newResult.push(items.find(i => i.id == item));
      }));
    return newResult;
  }

  async getWinStatus(matchObj) {
    let radiantWin = true;
    let isRadiant = true;
    let winStatus = '';
    let promise = new Promise(res => {
      const setInter = setInterval(() => {
        if (matchObj.radiant_win != undefined) {
          clearInterval(setInter);
          res(matchObj);
        }
      }, 100);
    });
    await promise.then(res => {
      radiantWin = res.radiant_win;
      return res;
    }).
    then(res => res.players.find(item => item.personaname === setName)).
    then(res => isRadiant = res.isRadiant);
    radiantWin === isRadiant ? winStatus += 'Победа' : winStatus += 'Поражение';
    return winStatus;
  }
}