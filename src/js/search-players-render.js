"use strict"
import GetIcons from './get-icons.js';
import wrapper from './wrapper.js';
import {
  nameing
} from './helper'
import {
  startAll,
  toHtml
} from './toHtml.js'
import SearchItem from './search-item'
import imgLoadedEvent from './module/img-loaded-event.js';
import { autocompleteStorage } from './module/input-autocomplete.js';


let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formInput = form.querySelector('input')

  function getPlayers(name) {
    if (name.value) {
      // Массив поисковых запросов
      autocompleteStorage(name.value)
     

      const doc = document.querySelector('body')
      doc.append(wrapper)
      fetch(`https://api.opendota.com/api/search?q=${name.value}`)
        .then(res => {
          name.value = ''
          return res.json()
        })
        .then(res => {
          res = res.filter(item => item.last_match_time && new Date(item.last_match_time).getFullYear() >= '2020' && new Date(item.last_match_time).getMonth() >= '0')
          doc.removeChild(wrapper)
          searchPlayersRender(res)
        })
    }

  }
  getPlayers(formInput)
})


function searchPlayersRender(playersArr) {

  document.querySelector('.search-players-wrap') && document.querySelector('.search-players-wrap').remove()
  const wrap = document.createElement('div')
  wrap.classList.add('search-players-wrap')
  document.querySelector('.container').append(wrap)
  const wrapForItem = document.querySelector('.search-players-wrap')
  document.querySelector('.wrapper-item') && document.querySelector('.wrapper-item').remove();

  playersArr.forEach(item => {
    const searchItem = new SearchItem(item).render()
    wrapForItem.append(searchItem)
  })
  imgLoadedEvent()

  wrap.addEventListener('click', function (e) {
    if (e.target.closest('.search-players')) {
      const searchBox = document.querySelector('.search-box-wrap')
      const closest = e.target.closest('.search-players')
      const clone = closest.cloneNode(true)
      clone.querySelector('.search-players__last-match').remove()
      searchBox.querySelector('.search-players') && searchBox.querySelector('.search-players').remove()
      searchBox.prepend(clone)
      let name = closest.querySelector('.search-players__name')
      name = name.getAttribute('title')

      startAll(closest.dataset.id, name)
      let lastPlayer = {
        id: closest.dataset.id,
        playerName: name,
      }
      let forLastGameRender = {
        personaname: name,
        account_id: closest.dataset.id,
        avatarfull: closest.querySelector('.search-players__icon').getAttribute('src'),
        lastMatch: closest.querySelector('.search-players__last-match').textContent,
        alt: true,
      }
      localStorage.setItem('lastSearchPlayer', JSON.stringify(lastPlayer))
      localStorage.setItem('forLastGameRender', JSON.stringify(forLastGameRender))

    }
  })
}