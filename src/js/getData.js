"use strict"
export default class GetData {
  constructor(idAccount = 0) {
    this.idAccount = idAccount;
  }
  getMatch(matchNumber) {
    // let resoult = {};
    // await fetch(`https://api.opendota.com/api/matches/${matchNumber}`)
    //   .then(res => res.json())
    //   .then(res => {
    //     Object.assign(resoult, res);
    //   });
    // return resoult;
    return fetch(`https://api.opendota.com/api/matches/${matchNumber}`)
      .then(res => res.json())
  }
getIdMatches() {
    // let arr = [];
    // await fetch(`https://api.opendota.com/api/players/${this.idAccount}/matches?limit=10`)
    //   .then(res => res.json())
    //   .then(res => {
    //     for (let i = 0; i < res.length; i++) {
    //       arr.push(res[i]);
    //     }
    //   });
    // return arr;
    return fetch(`https://api.opendota.com/api/players/${this.idAccount}/matches?limit=10`)
      .then(res => res.json())
  }
  getLast10Id() {
    // let matchInfo = [];
    // let matches = new Promise(res => {
    //   let arr = this.getIdMatches();
    //   const int = setInterval(() => {
    //     if (arr.length >= 10) {
    //       clearInterval(int);
    //       res(arr);
    //     }
    //   }, 100);
    // });
    // matches.then(res => {
    //   let arr = [];
    //   res.forEach(item => {
    //     try{
    //     arr.push(this.getMatch(item.match_id));
    //     }catch(e){
    //       console.log(e)
    //     }
    //   });
    //   return arr;
    // }).then(res => matchInfo.push(...res));
    // return matchInfo;
    return new Promise(res => {
      this.getIdMatches()
        .then(resoult => Promise.all(resoult.map(item => this.getMatch(item.match_id))))
        .then(resoult => res(resoult))
    })
  }
} 