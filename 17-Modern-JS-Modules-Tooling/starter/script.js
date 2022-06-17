// import { addToCart, a, b } from './shoppingCart.js';

// console.log('importing module');

// addToCart('water', 10);
// console.log(a, b);

// import add from './shoppingCart.js';

// add('coca cola', 15);

/////////////////////////////
// TOP LEVEL AWAIT
/////////////////////////////

// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data);

const getLastPost = async function () {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);

  return {
    title: data.at(-1).title,
    text: data.at(-1).body,
  };
};

const post = await getLastPost();

console.log(post);
