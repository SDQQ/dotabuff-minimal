"use strict"
export function nameing(str) {
  return str.slice(11, -9)
}

export function animate(div) {
  const mainItem = div.parentNode.querySelector('.item')
  const secondaryInfo = div.parentNode.querySelector('.statistic-wrap')
  mainItem.addEventListener('click',animateC )
  function animateC() {
    if (secondaryInfo.classList.contains('hide')) {
      secondaryInfo.classList.remove('hide')
      secondaryInfo.classList.remove('close')
      secondaryInfo.classList.add('show')
      mainItem.removeEventListener('click', animateC)
      setTimeout(() => mainItem.addEventListener('click', animateC), 800)
    } else {
      setTimeout(() => {
        secondaryInfo.classList.add('hide')
      }, 700)
      secondaryInfo.classList.add('close')
      secondaryInfo.classList.remove('show')
      mainItem.removeEventListener('click', animateC)
      setTimeout(() => mainItem.addEventListener('click', animateC), 800)
    }
  }


  // mainItem.addEventListener('click', () => {
  //   let marginTop = 0

  //   function anim() {

  //     secondaryInfo.style.marginTop = marginTop + 'px'
  //     marginTop -= 2
  //     console.log(marginTop)
  //     if(marginTop>=-112){
  //       requestAnimationFrame(anim)
  //     }
       

  //   }
  //   anim()
  //   requestAnimationFrame(anim)
  // })
}