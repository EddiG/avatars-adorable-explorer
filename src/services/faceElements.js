import fetch from 'isomorphic-fetch'

const ELEMENTS_EP = 'https://api.adorable.io/avatars/list'

const fetchElements = () =>
  fetch(ELEMENTS_EP)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Network response was not ok.')
    })

export default fetchElements
