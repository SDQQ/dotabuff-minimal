export default function imgLoadedEvent(){
  const images = document.querySelectorAll('img')
  images.forEach(img=>{
    img.addEventListener('load',()=>{
    if(img.closest('.items')?.querySelector('.load-circle'))img.closest('.items').querySelector('.load-circle').remove()
    if(img.parentNode?.querySelector('.load-circle')) img.parentNode.querySelector('.load-circle').remove()
      img.style.opacity = 1
    })
  })
}