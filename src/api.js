const url = 'http://localhost:8000/api'
const api_key = 'key_cur_prod_fnPqT5xQEi5Vcb9wKwbCf65c3BjVGyBB';
function getAssets() {
    return fetch(`${url}/posts?api_key=${api_key}`)
      .then(res => res.json())
      .then(res => res.data)
  }
  
function getAsset(post) {
  return fetch(`${url}/posts/${post}?api_key=${api_key}`)
    .then(res => res.json())
   .then(res => res.data)
}
function newPost(formData){
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
  },
    body: formData
  };

  return fetch(`${url}/posts?api_key=${api_key}`, requestOptions)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
}
function getComments(post){
  return fetch(`${url}/comments/${post}?api_key=${api_key}`)
  .then(res => res.json())
 .then(res => res.data)

}

  export default {
    getAssets,
    getAsset,
    newPost,
    getComments
  }