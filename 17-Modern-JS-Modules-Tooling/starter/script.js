// import { addToCart, a, b } from './shoppingCart.js';

// console.log('importing module');

// addToCart('water', 10);
// console.log(a, b);

// add('coca cola', 15);

/////////////////////////////
// TOP LEVEL AWAIT
/////////////////////////////

// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();
// console.log(data);

// const getLastPost = async function () {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   console.log(data);

//   return {
//     title: data.at(-1).title,
//     text: data.at(-1).body,
//   };
// };

// const post = await getLastPost();

// console.log(post);

/*////////////////////////////
    THE MODULE PATTERN
////////////////////////////*/
// const ShoppingCart2(function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`Added ${quantity} ${product} to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered`);
//   };

//   return addToCart, cart, totalPrice, totalQuantity;
// })();

import add from './shoppingCart.js';
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

if (module.hot) {
  module.hot.accept();
}
