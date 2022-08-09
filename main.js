let arrayOfPosts;
let fivePosts;
let arrayOfComments;
let arrayOfUserIds;
// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getPosts();
  getFivePosts();
  getComments();
  getUsersIds();
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => (arrayOfPosts = posts));
};

// This function logs the results in your browser's console
const consolePosts = () => {
  console.log(arrayOfUserIds);
};

// this function creates elements inside the all-posts ul, then appends text inside it with the posts that were returned in the request.
const displayPost = () => {
  const allPosts = document.getElementById('all-posts');
  arrayOfPosts.map((post, index) => {
    const li = document.createElement('li');
    const text = document.createTextNode(
      `#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`
    );
    li.appendChild(text);
    allPosts.append(li);
  });
};

//* Fetch 5 Posts
const getFivePosts = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => (fivePosts = posts.slice(0, 5)));
};

const displayFivePost = () => {
  const showFivePosts = document.getElementById('five-posts');
  fivePosts.map((post, index) => {
    const li = `<li>#${index + 1}, Title: ${post.title}: ${
      post.body
    }, by user: ${post.userId}</li>`;
    showFivePosts.insertAdjacentHTML('beforeend', li);
  });
};

// * Fetch Comments
const getComments = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => (arrayOfComments = posts.map((post) => post.body)));
};

const displayComments = () => {
  const showComments = document.getElementById('comments');
  arrayOfComments.map((comment, index) => {
    const li = `<li>#${index + 1}, Comment: ${comment}</li>`;
    showComments.insertAdjacentHTML('beforeend', li);
  });
};

// * Fetch User IDs
const getUsersIds = () => {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((posts) => (arrayOfUserIds = posts.map((post) => post.userId)));
};

const displayUserIds = () => {
  const showUserIds = document.getElementById('user-id');
  arrayOfUserIds.map((userId, index) => {
    const li = `<li>#${index + 1}, User ID: ${userId}</li>`;
    showUserIds.insertAdjacentHTML('beforeend', li);
  });
};

// * Post New Data
const data = {
  userId: 1,
  id: 1,
  title: 'Bad Mammy Jammy',
  complete: true,
};

const postOptions = {
  method: 'Post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

const postNewData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', postOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log('Success', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

// * Update a post
const updateData = {
  userId: 1,
  id: 1,
  title: 'Mediocre Mammy Jammy',
  complete: true,
};

const updateOptions = {
  method: 'Post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updateData),
};

const putData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', updateOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log('Success', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
/* 
Your job now is to follow the functions above and use them as templates 
 to build the functionality the buttons in the index.html file already 
 have laid out in it. This way you can learn how to build fetch requests 
 and work with other APIs and become a real developer!! 
*/
