import GetIcons from "./get-icons"

export default class SearchItem{
  constructor(game){
    this.game = game
    this.getIcons = new GetIcons()
  }

  render(){
    if(this.game.alt===true){
        const searchItem = document.createElement('div')
    let nickName = this.game.personaname.length < 12 ? this.game.personaname : `${this.game.personaname.trim().slice(0,12)}...`
    searchItem.classList.add('search-players')
    searchItem.setAttribute('data-id', this.game.account_id)

    searchItem.innerHTML = `
        <div class="search-players__icon-wrap">
         <div class="load-circle"></div>
            <img class="search-players__icon"title="Avatar" src="${this.game.avatarfull}"></img>
        </div>
        <div class="search-players__info">
            <div class="search-players__name" title="${this.game.personaname}">${nickName}</div>
        </div>
        `
      return searchItem
    }else{
         const searchItem = document.createElement('div')
    let nickName = this.game.personaname.length < 12 ? this.game.personaname : `${this.game.personaname.trim().slice(0,12)}...`
   const {day, month , year}= this.getIcons.getLastGameTime(this.game)
    searchItem.classList.add('search-players')
    searchItem.setAttribute('data-id', this.game.account_id)

    searchItem.innerHTML = `
        <div class="search-players__icon-wrap">
        <div class="load-circle"></div>
           <img class="search-players__icon"title="Avatar" src="${this.game.avatarfull}"></img>
        </div>
        <div class="search-players__info">
            <div class="search-players__name" title="${this.game.personaname}">${nickName}</div>
            <div class="search-players__last-match"title="Last match date">${day}-${month}-${year}</div>
        </div>
        `
      return searchItem
    }
  }
}