export default class GetData {
  constructor(idAccount) {
    this.idAccount = idAccount;
  }

 getMatch(matchNumber) {
    let resoult = {};
     fetch(`https://api.opendota.com/api/matches/${matchNumber}`)
      .then(res => res.json())
      .then(res => {
        Object.assign(resoult, res);
        console.log(resoult);

      });
    return resoult;
  }
  getIdMatches() {
    let arr = [];
    fetch(`https://api.opendota.com/api/players/${this.idAccount}/matches`)
      .then(res => res.json())
      .then(res => {
        for (let i = 0; i < 10; i++) {
          arr.push(res[i]);
        }
      });
    return arr;
  }
  getLast10Id() {
    let matchInfo = [];
    let matches = new Promise(res => {
      let arr = this.getIdMatches();
      const int = setInterval(() => {
        if (arr.length >= 10) {
          clearInterval(int);
          res(arr);
        }
      }, 100);
    });
    matches.then(res => {
      let arr = [];
      res.forEach(item => {
        arr.push(this.getMatch(item.match_id));
      });
      return arr;
    }).then(res => matchInfo.push(...res));
    return matchInfo;

  }
}

// getId(136446471); // Настин
// getId(76201616); //мой