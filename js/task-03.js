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


// const listEl = document.createElement("li");

const createList = ({url, alt}) =>{
  const imgEl = document.createElement("img");
  imgEl.classList = "img__gallery";
  imgEl.src = url;
  imgEl.alt = alt;
  
  const listEl = document.createElement("li");
  listEl.appendChild(imgEl);
  return listEl;
}

const galleryArr = images.map(createList);
const galleryList = document.querySelector(".gallery");
galleryList.append(...galleryArr);