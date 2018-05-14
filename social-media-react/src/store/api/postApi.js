class PostApi {
  static getAllPosts() {
    return fetch('http://localhost:3000/posts').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default PostApi;