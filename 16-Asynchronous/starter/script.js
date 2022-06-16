'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
 `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//  `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('bulgaria');
// getCountryData('greece');

///////////////////////////////////////

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     //render country 1
//     renderCountry(data);

//     //Get neighbour contry
//     const [neighbour] = data.borders;
//     if (!neighbour) return;
//     //AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('bulgaria');

///////////////////////////////////////

// const request = fetch('https://restcountries.com/v2/name/portugal');

// const getJSON = function (url, errMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errMsg} ${response.status}`);
//     }
//     return response.json();
//   });
// };
//
// const getCountryData = function (country) {
//   return fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });

//   // console.log(obj);
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) throw new Error(`Neighbour not found`);

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         `Country not found`
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });

//   // console.log(obj);
// };

// btn.addEventListener('click', function () {
//   getCountryData('bulgaria');
// });

// const whereAmI = function (lat, lng) {
//   return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       console.log(data);
//       return fetch(
//         `https://restcountries.com/v2/name/${data.country.toLowerCase()}`
//       );
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// whereAmI(52.508, 13.381);

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw....');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You won');
//     } else {
//       reject(new Error('You lost'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// //Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve, _) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 secs');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 sec'));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(new Error(err))
//     // );

//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Problem with geocoding ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       console.log(data);
//       return fetch(
//         `https://restcountries.com/v2/name/${data.country.toLowerCase()}`
//       );
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', whereAmI);

const createImage = function (path) {
  return new Promise(function (resolve, reject) {
    if (path) {
      const image = document.createElement('img');
      image.src = path;
      document.querySelector('.images').append(image);
      return resolve(image);
    } else {
      return reject(new Error('Your path to the image is wrong'));
    }
  });
};

// let currentImg;
// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();

//     const { latitude: lat, longitude: lng } = pos.coords;
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

//     if (!resGeo.ok)
//       throw new Error('Problem getting the data for your location');

//     const resGeoData = await resGeo.json();
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${resGeoData.country}`
//     );
//     if (!res.ok) throw new Error('Country not found');
//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${resGeoData.city}, ${resGeoData.country}`;
//   } catch (err) {
//     console.error(err.message);
//     //Rejec promise returned by this async function
//     throw err;
//   }
// };

// console.log('Getting location first');
// // whereAmI()
// //   .then(city => console.log(city))
// //   .catch(err => console.error(err))
// //   .finally(() => {
// //     console.log('Getting location finished');
// //   });

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//     console.log('Getting location finished');
//   } catch (err) {
//     console.error(err);
//   }
// })();

// const getJSON = function (url, errMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errMsg} ${response.status}`);
//     }
//     return response.json();
//   });
// };

// const get3Countries = async function (first, second, third) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${first}`);
//     // const [data2] = await getJSON(
//     //   `https://restcountries.com/v2/name/${second}`
//     // );
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${third}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${first}`),
//       getJSON(`https://restcountries.com/v2/name/${second}`),
//       getJSON(`https://restcountries.com/v2/name/${third}`),
//     ]);

//     console.log(data.map(obj => obj[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// // get3Countries('bulgaria', 'turkey', 'serbia');
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   // console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(1)])
//   .then(response => console.log(response[0]))
//   .catch(err => console.error(err));

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('Reject'),
//   Promise.resolve('Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// //ES2021 feature - returns the first fulfilled promise
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('Reject'),
//   Promise.resolve('Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// CHALLENGE 3

// const loadNPause = async function () {
//   try {
//     // Load first image
//     let img = await createImage('img/img-1.jpg');
//     console.log('Image 1 loaded');
//     await wait(2);
//     img.style.display = 'none';

//     // Load second image
//     img = await createImage('img/img-2.jpg');
//     console.log('Image 2 loaded');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//   }
// };

const loadAll = async function (imgsArr) {
  try {
    const images = imgsArr.map(async function (img) {
      return await createImage(img);
    });
    const elements = await Promise.all(images);
    console.log(images);
    console.log(elements);
    elements.forEach(el => el.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
