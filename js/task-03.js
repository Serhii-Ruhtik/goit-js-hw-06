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
function onImegesRef(images) {
  const gallery = [];
  images.forEach((url) => {
    console.log(images)
    const li = document.createElement('li');
    const img = document.createElement('img');
    
    li.append(img);
    img.src = url.url;
    img.alt = url.alt;
    img.width = 400;
    gallery.push(li);
  });
  return gallery;
};

const imagesRef = document.querySelector('.gallery');
imagesRef.append(...onImegesRef(images));





