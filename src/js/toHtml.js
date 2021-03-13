"use strict"
import GetIcons from './get-icons.js';
import wrapper from './wrapper.js';
import {
  nameing,
  animate
} from './helper'
import SecondaryInfo from './secondary-info.js'
import SecondaryInfoDmg from './secondary-info-dmg.js'
import MainItem from './main-item-render'
import SearchItem from './search-item'
import imgLoadedEvent from './module/img-loaded-event.js';
import inputAutocomplete from './module/input-autocomplete.js';

function init() {
   // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyApIsJ7jkXlwZdFy_1t9XwILDdabMEamTk",
    authDomain: "dotabuff-minimal.firebaseapp.com",
    databaseURL: "https://dotabuff-minimal.firebaseio.com",
    projectId: "dotabuff-minimal",
    storageBucket: "dotabuff-minimal.appspot.com",
    messagingSenderId: "632349522174",
    appId: "1:632349522174:web:b1e0c5236447a60f004daf",
    measurementId: "G-J0FX00QS96"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  document.querySelector('input').focus()
  if (localStorage.getItem('lastSearchPlayer') && localStorage.getItem('forLastGameRender')) {
    const lastPlayer = JSON.parse(localStorage.getItem('lastSearchPlayer'))
    const forLastGameRender = JSON.parse(localStorage.getItem('forLastGameRender'))
    document.querySelector('.search-box-wrap').prepend(new SearchItem(forLastGameRender).render())
    startAll(lastPlayer.id, lastPlayer.playerName)
    imgLoadedEvent()
    inputAutocomplete()
  } else {
    inputAutocomplete()
  }
}
init()


export function startAll(id, name) {
  const doc = document.querySelector('body')
  doc.append(wrapper)
  // let counter = 0;
  let bigArr = new GetIcons(id, name).getLast10Id();
  let getData = new GetIcons(id, name);
  bigArr.then(res => {
    toHtml(res, getData)
    doc.removeChild(wrapper)
  })
  // counter++
  // let set = new Set();
  // const interval = setInterval(() => {
  //   wrapper.querySelector('span').textContent = `${counter}0%`
  //   wrapper.querySelector('.progress-bar').style.width = `${counter}0%`
  //   bigArr.forEach(item => {
  //     if (!set.has(item) && item.replay_url !== undefined) {
  //       set.add(item)
  //       counter++
  //     }
  //   })
  //   if (set.size === 10) {
  //     toHtml([...set].sort((a, b) => a.start_time - b.start_time).reverse(), getData);
  //     clearInterval(interval);
  //     doc.removeChild(wrapper)
  //     counter = 0
  //   }
  // }, 50);
}

export function toHtml(gamesArr, getData) {
  const wrapperItem = document.createElement("div")
  wrapperItem.classList.add('wrapper-item')
  document.querySelector('.container').append(wrapperItem)
  document.querySelector('.search-players-wrap') && document.querySelector('.search-players-wrap').remove();
  console.groupCollapsed(`%c${getData.name} last 10 match`, 'color:rgb(20, 201, 20);')

  gamesArr.forEach(item => {
    console.log(item)
    const innerItemWrap = document.createElement("div")
    innerItemWrap.classList.add('inner-item-wrap')
    try {
      const div = new MainItem(item, getData).render()
      innerItemWrap.append(div)
      innerItemWrap.append(new SecondaryInfo(item, getData).render());

      animate(div) //Анимация 
      document.querySelector('.wrapper-item').append(innerItemWrap)
      innerItemWrap.querySelector('.statistic-wrap').append(new SecondaryInfoDmg(item, getData).render())
    } catch (e) {
      console.log(e)
    }
  });
  imgLoadedEvent()
  console.groupEnd()
}