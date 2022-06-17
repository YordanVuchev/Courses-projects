console.log('exporting module');

const shippingCost = 10;
const cart = [];

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`Added ${quantity} ${product} to cart`);
  console.log(cart);
}

const a = 5;
const b = 10;

export { a, b, cart };
