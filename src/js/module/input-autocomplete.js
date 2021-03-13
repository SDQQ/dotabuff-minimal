export default function inputAutocomplete() {

  let input = document.querySelector('input')
  const searchBox = document.querySelector('.search-box')
  const form = document.querySelector('form')
  const submitBtn = form.querySelector('.search-box__button')

  function lostFocus(e) {
    if (searchBox.querySelector('.autocomplete-wrap') && e.target !== input && e.target !== searchBox.querySelector('.autocomplete-wrap')) {
      searchBox.querySelector('.autocomplete-wrap').remove()
    }
  }
  document.addEventListener('click', lostFocus)
  input.addEventListener('click', () => {
    input = document.querySelector('input')
    if (input.value === '') {
      const autocompleteArr = JSON.parse(localStorage.getItem('inputAutocompleteArr'))

      searchBox.querySelector('.autocomplete-wrap') && searchBox.querySelector('.autocomplete-wrap').remove()
      const wrapDiv = document.createElement('div')
      if (autocompleteArr) {
        for (let i = 0; i < (autocompleteArr.length < 10 ? autocompleteArr.length : 10); i++) {
          wrapDiv.insertAdjacentHTML("beforeend", `<p>${autocompleteArr[i]}</p>`)
        }
      }
      wrapDiv.addEventListener('click', (e) => {
        input.value = e.target.textContent
        submitBtn.click()
      })
      wrapDiv.classList.add('autocomplete-wrap')
      searchBox.append(wrapDiv)
    }
  })
  input.addEventListener('input', (e) => {
    if (input.value.length >= 1) {
      const autocompleteArr = JSON.parse(localStorage.getItem('inputAutocompleteArr'))
      let regExp = new RegExp(`${e.target.value}`, 'gi')
      searchBox.querySelector('.autocomplete-wrap') && searchBox.querySelector('.autocomplete-wrap').remove()
      const wrapDiv = document.createElement('div')
      wrapDiv.classList.add('autocomplete-wrap')
      if (autocompleteArr) {
        autocompleteArr.forEach(item => {
          if (regExp.test(item)) {
            wrapDiv.insertAdjacentHTML("beforeend", `<p>${item.replace(regExp,`<span>${e.target.value}</span>`)}</p>`)
            searchBox.append(wrapDiv)
          }
        })
      }
    } else {
      input.click()
    }
  })
}
export function autocompleteStorage(searchValue) {
  const inputAutocompleteArr = JSON.parse(localStorage.getItem('inputAutocompleteArr')) ?
    JSON.parse(localStorage.getItem('inputAutocompleteArr')) : []
  if (inputAutocompleteArr.includes(searchValue)) {
    const index = inputAutocompleteArr.indexOf(searchValue)
    const neededEl = inputAutocompleteArr.slice(index, index + 1)
    const firstHalf = inputAutocompleteArr.slice(0, index)
    const secondHalf = inputAutocompleteArr.slice(index + 1)
    localStorage.setItem('inputAutocompleteArr', JSON.stringify([...neededEl, ...firstHalf, ...secondHalf]))
  } else {
    inputAutocompleteArr.unshift(searchValue)
    localStorage.setItem('inputAutocompleteArr', JSON.stringify(inputAutocompleteArr))
  }
}