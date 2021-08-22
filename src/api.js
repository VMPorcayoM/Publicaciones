const url = 'http://localhost:8000/api'

function getAssets() {
    return fetch(`${url}/posts`)
      .then(res => res.json())
      .then(res => res.data)
  }
  
  function getAsset(post) {
    return fetch(`${url}/posts/${post}`)
      .then(res => res.json())
      .then(res => res.data)
  }

  export default {
    getAssets,
    getAsset
  }