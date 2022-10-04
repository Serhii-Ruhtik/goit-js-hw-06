const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

images.map(function (url, alt) {
  console.log(images)
  const li = document.createElement('li');
  const img = document.createElement('img');
  
  li.append(img);
  img.src = url.url;
  img.alt = url.alt;
  img.width = 400;
  console.log(li);
  
  const imagesRef = document.querySelector('.gallery');
  imagesRef.append(li);
});




// images.map(function (element) {
//   console.log(images)
//   const li = document.createElement('li');
//   const img = document.createElement('img');
  
//   li.append(img);
//   img.src = element.url;
//   img.alt = element.alt;
//   console.log(li);
  
//   const imagesRef = document.querySelector('.gallery');
//   imagesRef.append(li);
// });





// function makeGallery(images) {
//   const gallery = [];
//   images.forEach(({ url, alt } = element) => {
//     const image = document.createElement("img");
//     const li = document.createElement("li");
//     image.src = url;
//     image.alt = alt;
//     image.width = 400;
//     li.append(image);
//     gallery.push(li);
//   });
//   return gallery;
// }
// const ulGaleryRef = document.querySelector("ul.gallery");
// ulGaleryRef.append(...makeGallery(images));
